/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import RichTextEditor from "@/components/Admin/RichTextEditor";
import {
  deleteAdminFiles,
  friendlyFirebaseError,
  normalizeSearch,
  uploadAdminFile,
} from "@/components/Admin/admin-utils";
import {
  paragraphsToRichContent,
  richContentToHtml,
  richContentToParagraphs,
} from "@/lib/rich-content";

const today = () => new Date().toLocaleDateString("sv-SE");
const blankBlocks = () => [{ type: "paragraph", runs: [{ text: "" }] }];
const emptyForm = () => ({
  title: "",
  link: "",
  publishDate: today(),
  targets: [],
  pinToTop: true,
  contentBlocks: blankBlocks(),
  initialHtml: "<p><br></p>",
  images: [],
  videos: [],
});

const locations = [
  { value: "aktivnosti", label: "Aktivnosti", detail: "/aktivnosti" },
  { value: "projekti", label: "Projekti", detail: "/projekti" },
  { value: "etwinning", label: "eTwinning dio", detail: "/projekti" },
  { value: "erasmus", label: "Erasmus dio", detail: "/erasmus" },
  { value: "openfuture", label: "Open Future", detail: "/openfuture" },
  { value: "greentech", label: "Green Tech", detail: "/greentech" },
];

const fieldClass = "w-full rounded-lg border border-blueGray-300 bg-white px-3 py-2 text-blueGray-700 outline-none focus:border-lightBlue-500 focus:ring-2 focus:ring-lightBlue-100";

const normalizeMedia = (media = []) =>
  (Array.isArray(media) ? media : [])
    .map((item) => typeof item === "string" ? { url: item } : item)
    .filter((item) => item?.url);

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [selected, setSelected] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [removedPaths, setRemovedPaths] = useState([]);
  const [fileKey, setFileKey] = useState(0);
  const [editorKey, setEditorKey] = useState(0);
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadPosts = useCallback(async () => {
    try {
      const snapshot = await getDocs(collection(db, "objave"));
      setPosts(snapshot.docs
        .map((item) => ({ id: item.id, ...item.data() }))
        .sort((left, right) => String(right.publishDate || "").localeCompare(String(left.publishDate || ""))));
    } catch (loadError) {
      setError(friendlyFirebaseError(loadError));
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(loadPosts, 0);
    return () => window.clearTimeout(timer);
  }, [loadPosts]);

  const filteredPosts = useMemo(() => {
    const term = normalizeSearch(search);
    return term ? posts.filter((post) => normalizeSearch(post.title || post.naslov).includes(term)) : posts;
  }, [posts, search]);

  const resetForm = () => {
    setSelected(null);
    setForm(emptyForm());
    setImageFiles([]);
    setVideoFiles([]);
    setRemovedPaths([]);
    setFileKey((value) => value + 1);
    setEditorKey((value) => value + 1);
    setError("");
  };

  const selectPost = (post) => {
    const blocks = Array.isArray(post.contentBlocks) && post.contentBlocks.length
      ? post.contentBlocks
      : paragraphsToRichContent(post.paragrafi || []);
    setSelected(post);
    setForm({
      title: post.title || post.naslov || "",
      link: post.link || "",
      publishDate: post.publishDate || today(),
      targets: Array.isArray(post.targets) ? post.targets : [],
      pinToTop: post.pinToTop === true,
      contentBlocks: blocks,
      initialHtml: richContentToHtml(blocks),
      images: normalizeMedia(post.images || post.slike),
      videos: normalizeMedia(post.videos || (post.video ? [post.video] : [])),
    });
    setImageFiles([]);
    setVideoFiles([]);
    setRemovedPaths([]);
    setFileKey((value) => value + 1);
    setEditorKey((value) => value + 1);
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTarget = (target) => {
    setForm((current) => ({
      ...current,
      targets: current.targets.includes(target)
        ? current.targets.filter((value) => value !== target)
        : [...current.targets, target],
    }));
  };

  const chooseImages = (event) => {
    const files = Array.from(event.target.files || []);
    const tooLarge = files.find((file) => file.size >= 10 * 1024 * 1024);
    if (tooLarge) {
      setError(`Slika „${tooLarge.name}“ je veća od dozvoljenih 10 MB.`);
      return;
    }
    setError("");
    setImageFiles(files);
  };

  const chooseVideos = (event) => {
    const files = Array.from(event.target.files || []);
    const tooLarge = files.find((file) => file.size >= 250 * 1024 * 1024);
    if (tooLarge) {
      setError(`Video „${tooLarge.name}“ je veći od dozvoljenih 250 MB.`);
      return;
    }
    setError("");
    setVideoFiles(files);
  };

  const removeExistingMedia = (kind, index) => {
    setForm((current) => {
      const currentItems = current[kind];
      const removed = currentItems[index];
      if (removed?.path) setRemovedPaths((paths) => [...paths, removed.path]);
      return { ...current, [kind]: currentItems.filter((_, itemIndex) => itemIndex !== index) };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");
    const paragraphs = richContentToParagraphs(form.contentBlocks);
    if (!form.targets.length) {
      setError("Označite najmanje jedno mjesto na kojem će se objava prikazati.");
      return;
    }
    if (!paragraphs.length) {
      setError("Unesite tekst objave.");
      return;
    }

    setBusy(true);
    const uploaded = [];
    try {
      for (const file of imageFiles) uploaded.push({ kind: "image", ...(await uploadAdminFile(file, "posts/images")) });
      for (const file of videoFiles) uploaded.push({ kind: "video", ...(await uploadAdminFile(file, "posts/videos")) });

      const images = [
        ...form.images,
        ...uploaded.filter((item) => item.kind === "image").map(({ kind, ...item }) => ({ ...item, alt: form.title.trim() })),
      ];
      const videos = [
        ...form.videos,
        ...uploaded.filter((item) => item.kind === "video").map(({ kind, ...item }) => item),
      ];
      const payload = {
        title: form.title.trim(),
        naslov: form.title.trim(),
        contentBlocks: form.contentBlocks,
        paragrafi: paragraphs,
        images,
        slike: images.map((item) => item.url),
        videos,
        video: videos[0]?.url || "",
        link: form.link.trim(),
        targets: form.targets,
        published: true,
        pinToTop: form.pinToTop,
        publishDate: form.publishDate,
        updatedAt: serverTimestamp(),
      };

      if (selected) {
        await updateDoc(doc(db, "objave", selected.id), payload);
      } else {
        await addDoc(collection(db, "objave"), { ...payload, createdAt: serverTimestamp() });
      }
      await deleteAdminFiles(removedPaths);
      setMessage(selected ? "Objava je uspješno ažurirana na svim označenim mjestima." : "Nova objava je uspješno dodata na označena mjesta.");
      resetForm();
      await loadPosts();
    } catch (submitError) {
      await deleteAdminFiles(uploaded.map((item) => item.path));
      setError(friendlyFirebaseError(submitError));
    } finally {
      setBusy(false);
    }
  };

  const removePost = async (post) => {
    const title = post.title || post.naslov || "Bez naslova";
    if (!window.confirm(`Obrisati objavu „${title}“ sa svih označenih mjesta?`)) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await deleteDoc(doc(db, "objave", post.id));
      await deleteAdminFiles([
        ...normalizeMedia(post.images).map((item) => item.path),
        ...normalizeMedia(post.videos).map((item) => item.path),
      ]);
      if (selected?.id === post.id) resetForm();
      setMessage(`Objava „${title}“ je obrisana.`);
      await loadPosts();
    } catch (deleteError) {
      setError(friendlyFirebaseError(deleteError));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-8 2xl:grid-cols-[minmax(0,1.35fr)_minmax(390px,0.65fr)]">
      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-lightBlue-600">Aktivnosti i projekti</p>
            <h2 className="text-2xl font-bold text-blueGray-800">{selected ? `Uredi: ${selected.title || selected.naslov}` : "Dodaj novu objavu"}</h2>
          </div>
          {selected && <button type="button" onClick={resetForm} className="rounded-lg border border-blueGray-300 px-4 py-2 text-sm font-semibold text-blueGray-600">Odustani od uređivanja</button>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-5 md:grid-cols-[1fr_190px]">
            <label className="block text-sm font-semibold text-blueGray-700">Naslov objave
              <input className={`${fieldClass} mt-2`} value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required />
            </label>
            <label className="block text-sm font-semibold text-blueGray-700">Datum objave
              <input className={`${fieldClass} mt-2`} type="date" value={form.publishDate} onChange={(event) => setForm({ ...form, publishDate: event.target.value })} required />
            </label>
          </div>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-blueGray-700">Kvačicom označite gdje se tačno dodaje</legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <label key={location.value} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${form.targets.includes(location.value) ? "border-lightBlue-500 bg-lightBlue-50" : "border-blueGray-200 bg-white"}`}>
                  <input type="checkbox" className="mt-1 h-4 w-4" checked={form.targets.includes(location.value)} onChange={() => toggleTarget(location.value)} />
                  <span><strong className="block text-sm text-blueGray-800">{location.label}</strong><span className="text-xs text-blueGray-500">{location.detail}</span></span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label className="mb-2 block text-sm font-semibold text-blueGray-700">Tekst objave</label>
            <RichTextEditor
              resetKey={editorKey}
              initialHtml={form.initialHtml}
              onChange={({ blocks }) => setForm((current) => ({ ...current, contentBlocks: blocks }))}
            />
          </div>

          <label className="block text-sm font-semibold text-blueGray-700">Dodatni link <span className="font-normal text-blueGray-500">(nije obavezan)</span>
            <input className={`${fieldClass} mt-2`} type="url" placeholder="https://..." value={form.link} onChange={(event) => setForm({ ...form, link: event.target.value })} />
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-blueGray-700">Dodaj fotografije
              <input key={`images-${fileKey}`} className={`${fieldClass} mt-2`} type="file" accept="image/*" multiple onChange={chooseImages} />
              <span className="mt-1 block text-xs font-normal text-blueGray-500">Više fotografija je dozvoljeno, najviše 10 MB po fotografiji.</span>
            </label>
            <label className="block text-sm font-semibold text-blueGray-700">Dodaj videozapise
              <input key={`videos-${fileKey}`} className={`${fieldClass} mt-2`} type="file" accept="video/*" multiple onChange={chooseVideos} />
              <span className="mt-1 block text-xs font-normal text-blueGray-500">Najviše 250 MB po videozapisu.</span>
            </label>
          </div>

          {(imageFiles.length > 0 || videoFiles.length > 0) && (
            <div className="rounded-xl bg-blueGray-50 p-4 text-sm text-blueGray-600">
              {imageFiles.map((file) => <p key={`${file.name}-${file.lastModified}`}>Nova fotografija: {file.name}</p>)}
              {videoFiles.map((file) => <p key={`${file.name}-${file.lastModified}`}>Novi video: {file.name}</p>)}
            </div>
          )}

          {(form.images.length > 0 || form.videos.length > 0) && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-blueGray-700">Postojeći mediji u objavi</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {form.images.map((image, index) => (
                  <div key={image.path || image.url || index} className="rounded-xl border border-blueGray-200 p-3">
                    <img src={image.url} alt={`Fotografija ${index + 1}`} className="h-32 w-full rounded-lg object-cover" />
                    <button type="button" onClick={() => removeExistingMedia("images", index)} className="mt-2 w-full rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">Ukloni fotografiju</button>
                  </div>
                ))}
                {form.videos.map((video, index) => (
                  <div key={video.path || video.url || index} className="rounded-xl border border-blueGray-200 p-3">
                    <video src={video.url} controls preload="metadata" className="h-32 w-full rounded-lg bg-black object-contain" />
                    <button type="button" onClick={() => removeExistingMedia("videos", index)} className="mt-2 w-full rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">Ukloni video</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <label className="flex items-start gap-3 rounded-xl border border-blueGray-200 bg-blueGray-50 p-4 text-sm text-blueGray-700">
            <input type="checkbox" className="mt-1 h-4 w-4" checked={form.pinToTop} onChange={(event) => setForm({ ...form, pinToTop: event.target.checked })} />
            <span>
              <strong className="block">Odmah postavi objavu na prvo mjesto</strong>
              <span className="mt-1 block text-xs font-normal text-blueGray-500">Ako isključite kvačicu, objava će se prikazati na mjestu koje odgovara odabranom datumu.</span>
            </span>
          </label>

          {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}
          {message && <p role="status" className="rounded-lg bg-green-50 p-3 text-green-700">{message}</p>}
          <button disabled={busy} type="submit" className="w-full rounded-xl bg-lightBlue-600 px-5 py-3 font-bold text-white shadow transition hover:bg-lightBlue-700 disabled:cursor-wait disabled:opacity-60">
            {busy ? "Slanje u Firebase i spremanje..." : selected ? "Sačuvaj objavu i sve medije" : "Dodaj objavu i pošalji medije"}
          </button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Pronađi po naslovu</p>
        <h2 className="mb-4 text-2xl font-bold text-blueGray-800">Firebase objave</h2>
        <input className={`${fieldClass} mb-5`} type="search" placeholder="Upišite dio naslova..." value={search} onChange={(event) => setSearch(event.target.value)} />
        <div className="max-h-[900px] space-y-3 overflow-y-auto pr-1">
          {filteredPosts.map((post) => (
            <article key={post.id} className="rounded-xl border border-blueGray-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-blueGray-800">{post.title || post.naslov || "Bez naslova"}</h3>
                  <p className="mt-1 text-xs text-blueGray-500">{post.publishDate || "Bez datuma"}</p>
                </div>
                <div className="flex flex-wrap justify-end gap-1">
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${post.published === false ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>{post.published === false ? "Skica" : "Objavljeno"}</span>
                  <span className="rounded-full bg-blueGray-100 px-2 py-1 text-xs font-semibold text-blueGray-600">{post.pinToTop === true ? "Na vrhu" : "Po datumu"}</span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {(post.targets || []).map((target) => <span key={target} className="rounded-full bg-blueGray-100 px-2 py-1 text-xs text-blueGray-600">{locations.find((item) => item.value === target)?.label || target}</span>)}
              </div>
              <div className="mt-4 flex gap-2">
                <button type="button" onClick={() => selectPost(post)} className="flex-1 rounded-lg bg-blueGray-800 px-3 py-2 text-sm font-semibold text-white">Uredi sve</button>
                <button type="button" disabled={busy} onClick={() => removePost(post)} className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50">Obriši po naslovu</button>
              </div>
            </article>
          ))}
          {!filteredPosts.length && <p className="rounded-lg bg-blueGray-50 p-4 text-center text-blueGray-500">Još nema Firebase objava ili nema rezultata za uneseni naslov.</p>}
        </div>
      </section>
    </div>
  );
}
