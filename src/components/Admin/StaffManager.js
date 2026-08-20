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
import {
  deleteAdminFiles,
  friendlyFirebaseError,
  normalizeSearch,
  uploadAdminFile,
} from "@/components/Admin/admin-utils";

const emptyForm = {
  collectionName: "uposlenici",
  Ime: "",
  Pozicija: "",
  Titula: "",
  Broj: "",
  Slika: "",
  storagePath: "",
};

const fieldClass = "w-full rounded-lg border border-blueGray-300 bg-white px-3 py-2 text-blueGray-700 outline-none focus:border-lightBlue-500 focus:ring-2 focus:ring-lightBlue-100";

export default function StaffManager() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [selected, setSelected] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [fileKey, setFileKey] = useState(0);
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadItems = useCallback(async () => {
    try {
      const [employees, associates] = await Promise.all([
        getDocs(collection(db, "uposlenici")),
        getDocs(collection(db, "saradnici")),
      ]);
      const mapped = [
        ...employees.docs.map((item) => ({ id: item.id, collectionName: "uposlenici", ...item.data() })),
        ...associates.docs.map((item) => ({ id: item.id, collectionName: "saradnici", ...item.data() })),
      ].sort((left, right) => (Number(left.Broj) || 9999) - (Number(right.Broj) || 9999) || String(left.Ime || "").localeCompare(String(right.Ime || ""), "bs"));
      setItems(mapped);
    } catch (loadError) {
      setError(friendlyFirebaseError(loadError));
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(loadItems, 0);
    return () => window.clearTimeout(timer);
  }, [loadItems]);

  const filteredItems = useMemo(() => {
    const term = normalizeSearch(search);
    return term ? items.filter((item) => normalizeSearch(item.Ime).includes(term)) : items;
  }, [items, search]);

  const resetForm = () => {
    setSelected(null);
    setForm(emptyForm);
    setPhoto(null);
    setFileKey((value) => value + 1);
    setError("");
  };

  const selectItem = (item) => {
    setSelected(item);
    setForm({
      collectionName: item.collectionName,
      Ime: item.Ime || "",
      Pozicija: item.Pozicija || "",
      Titula: item.Titula || "",
      Broj: item.Broj ?? "",
      Slika: item.Slika || "",
      storagePath: item.storagePath || "",
    });
    setPhoto(null);
    setFileKey((value) => value + 1);
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    let uploadedPhoto = null;

    try {
      if (photo) uploadedPhoto = await uploadAdminFile(photo, "staff");
      const payload = {
        Ime: form.Ime.trim(),
        Pozicija: form.Pozicija.trim(),
        Titula: form.Titula.trim(),
        Broj: Number(form.Broj) || 0,
        Slika: uploadedPhoto?.url || form.Slika || "",
        storagePath: uploadedPhoto?.path || form.storagePath || "",
        updatedAt: serverTimestamp(),
      };

      if (selected && selected.collectionName === form.collectionName) {
        await updateDoc(doc(db, form.collectionName, selected.id), payload);
      } else if (selected) {
        await addDoc(collection(db, form.collectionName), { ...payload, createdAt: serverTimestamp() });
        await deleteDoc(doc(db, selected.collectionName, selected.id));
      } else {
        await addDoc(collection(db, form.collectionName), { ...payload, createdAt: serverTimestamp() });
      }

      if (uploadedPhoto && selected?.storagePath && selected.storagePath !== uploadedPhoto.path) {
        await deleteAdminFiles([selected.storagePath]);
      }
      setMessage(selected ? "Podaci o radniku su uspješno ažurirani." : "Novi radnik je uspješno dodat.");
      resetForm();
      await loadItems();
    } catch (submitError) {
      if (uploadedPhoto?.path) await deleteAdminFiles([uploadedPhoto.path]);
      setError(friendlyFirebaseError(submitError));
    } finally {
      setBusy(false);
    }
  };

  const removeItem = async (item) => {
    if (!window.confirm(`Obrisati radnika „${item.Ime}“? Ova radnja se ne može poništiti.`)) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await deleteDoc(doc(db, item.collectionName, item.id));
      if (item.storagePath) await deleteAdminFiles([item.storagePath]);
      if (selected?.id === item.id && selected.collectionName === item.collectionName) resetForm();
      setMessage(`Radnik „${item.Ime}“ je obrisan.`);
      await loadItems();
    } catch (deleteError) {
      setError(friendlyFirebaseError(deleteError));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(380px,0.8fr)]">
      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-lightBlue-600">Radnici</p>
            <h2 className="text-2xl font-bold text-blueGray-800">{selected ? `Uredi: ${selected.Ime}` : "Dodaj novog radnika"}</h2>
          </div>
          {selected && <button type="button" onClick={resetForm} className="rounded-lg border border-blueGray-300 px-4 py-2 text-sm font-semibold text-blueGray-600">Odustani od uređivanja</button>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-blueGray-700">Vrsta
              <select className={`${fieldClass} mt-2`} value={form.collectionName} onChange={(event) => setForm({ ...form, collectionName: event.target.value })}>
                <option value="uposlenici">Uposlenik</option>
                <option value="saradnici">Saradnik</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-blueGray-700">Redni broj
              <input className={`${fieldClass} mt-2`} type="number" min="0" value={form.Broj} onChange={(event) => setForm({ ...form, Broj: event.target.value })} required />
            </label>
          </div>
          <label className="block text-sm font-semibold text-blueGray-700">Ime i prezime
            <input className={`${fieldClass} mt-2`} value={form.Ime} onChange={(event) => setForm({ ...form, Ime: event.target.value })} required />
          </label>
          <label className="block text-sm font-semibold text-blueGray-700">Pozicija
            <input className={`${fieldClass} mt-2`} value={form.Pozicija} onChange={(event) => setForm({ ...form, Pozicija: event.target.value })} required />
          </label>
          <label className="block text-sm font-semibold text-blueGray-700">Titula / stručno zvanje
            <input className={`${fieldClass} mt-2`} value={form.Titula} onChange={(event) => setForm({ ...form, Titula: event.target.value })} />
          </label>
          <label className="block text-sm font-semibold text-blueGray-700">Fotografija {selected && <span className="font-normal text-blueGray-500">(odaberite samo ako je mijenjate)</span>}
            <input key={fileKey} className={`${fieldClass} mt-2`} type="file" accept="image/*" onChange={(event) => setPhoto(event.target.files?.[0] || null)} required={!selected && !form.Slika} />
          </label>
          {(photo || form.Slika) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo ? URL.createObjectURL(photo) : form.Slika} alt="Pregled fotografije radnika" className="h-44 w-44 rounded-xl object-cover shadow" />
          )}
          {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}
          {message && <p role="status" className="rounded-lg bg-green-50 p-3 text-green-700">{message}</p>}
          <button disabled={busy} className="w-full rounded-xl bg-lightBlue-600 px-5 py-3 font-bold text-white shadow transition hover:bg-lightBlue-700 disabled:cursor-wait disabled:opacity-60" type="submit">
            {busy ? "Spremanje..." : selected ? "Sačuvaj sve izmjene" : "Dodaj radnika"}
          </button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Pronađi po imenu</p>
        <h2 className="mb-4 text-2xl font-bold text-blueGray-800">Postojeći radnici</h2>
        <input className={`${fieldClass} mb-5`} type="search" placeholder="Upišite ime ili prezime..." value={search} onChange={(event) => setSearch(event.target.value)} />
        <div className="max-h-[720px] space-y-3 overflow-y-auto pr-1">
          {filteredItems.map((item) => (
            <article key={`${item.collectionName}-${item.id}`} className="rounded-xl border border-blueGray-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-blueGray-800">{item.Ime}</h3>
                  <p className="text-sm text-blueGray-500">{item.Pozicija || "Bez navedene pozicije"}</p>
                  <span className="mt-2 inline-block rounded-full bg-blueGray-100 px-2 py-1 text-xs text-blueGray-600">{item.collectionName === "saradnici" ? "Saradnik" : "Uposlenik"}</span>
                </div>
                <span className="text-sm font-semibold text-blueGray-400">#{item.Broj ?? "–"}</span>
              </div>
              <div className="mt-4 flex gap-2">
                <button type="button" onClick={() => selectItem(item)} className="flex-1 rounded-lg bg-blueGray-800 px-3 py-2 text-sm font-semibold text-white">Uredi</button>
                <button type="button" disabled={busy} onClick={() => removeItem(item)} className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50">Obriši po imenu</button>
              </div>
            </article>
          ))}
          {!filteredItems.length && <p className="rounded-lg bg-blueGray-50 p-4 text-center text-blueGray-500">Nema rezultata za uneseno ime.</p>}
        </div>
      </section>
    </div>
  );
}
