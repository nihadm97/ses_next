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
import { friendlyFirebaseError, normalizeSearch } from "@/components/Admin/admin-utils";

const emptyForm = { collectionName: "1", Naslov: "", Link: "", Broj: "" };
const fieldClass = "w-full rounded-lg border border-blueGray-300 bg-white px-3 py-2 text-blueGray-700 outline-none focus:border-lightBlue-500 focus:ring-2 focus:ring-lightBlue-100";

const categoryLabel = (collectionName) => collectionName === "1"
  ? "Informacije za učenike (lijevo)"
  : "Javne nabavke (desno)";

export default function InformationManager() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadItems = useCallback(async () => {
    try {
      const [studentInfo, procurementInfo] = await Promise.all([
        getDocs(collection(db, "1")),
        getDocs(collection(db, "2")),
      ]);
      setItems([
        ...studentInfo.docs.map((item) => ({ id: item.id, collectionName: "1", ...item.data() })),
        ...procurementInfo.docs.map((item) => ({ id: item.id, collectionName: "2", ...item.data() })),
      ].sort((left, right) => (Number(right.Broj) || 0) - (Number(left.Broj) || 0)));
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
    return term ? items.filter((item) => normalizeSearch(item.Naslov).includes(term)) : items;
  }, [items, search]);

  const resetForm = () => {
    setSelected(null);
    setForm(emptyForm);
    setError("");
  };

  const selectItem = (item) => {
    setSelected(item);
    setForm({
      collectionName: item.collectionName,
      Naslov: item.Naslov || "",
      Link: item.Link || "",
      Broj: item.Broj ?? "",
    });
    setMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");
    try {
      const payload = {
        Naslov: form.Naslov.trim(),
        Link: form.Link.trim(),
        Broj: Number(form.Broj) || 0,
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
      setMessage(selected ? "Informacija je uspješno ažurirana." : "Nova informacija je uspješno dodata.");
      resetForm();
      await loadItems();
    } catch (submitError) {
      setError(friendlyFirebaseError(submitError));
    } finally {
      setBusy(false);
    }
  };

  const removeItem = async (item) => {
    const title = item.Naslov || "Bez naslova";
    if (!window.confirm(`Obrisati informaciju „${title}“? Ova radnja se ne može poništiti.`)) return;
    setBusy(true);
    setMessage("");
    setError("");
    try {
      await deleteDoc(doc(db, item.collectionName, item.id));
      if (selected?.id === item.id && selected.collectionName === item.collectionName) resetForm();
      setMessage(`Informacija „${title}“ je obrisana.`);
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
            <p className="text-sm font-semibold uppercase tracking-wider text-lightBlue-600">Početna stranica</p>
            <h2 className="text-2xl font-bold text-blueGray-800">{selected ? "Uredi informaciju" : "Dodaj novu informaciju"}</h2>
          </div>
          {selected && <button type="button" onClick={resetForm} className="rounded-lg border border-blueGray-300 px-4 py-2 text-sm font-semibold text-blueGray-600">Odustani od uređivanja</button>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm font-semibold text-blueGray-700">Gdje se prikazuje
            <select className={`${fieldClass} mt-2`} value={form.collectionName} onChange={(event) => setForm({ ...form, collectionName: event.target.value })}>
              <option value="1">Informacije za učenike – lijeva kolona</option>
              <option value="2">Javne nabavke – desna kolona</option>
            </select>
          </label>
          <label className="block text-sm font-semibold text-blueGray-700">Naslov
            <input className={`${fieldClass} mt-2`} value={form.Naslov} onChange={(event) => setForm({ ...form, Naslov: event.target.value })} required />
          </label>
          <label className="block text-sm font-semibold text-blueGray-700">Link
            <input className={`${fieldClass} mt-2`} type="url" placeholder="https://..." value={form.Link} onChange={(event) => setForm({ ...form, Link: event.target.value })} required />
          </label>
          <label className="block text-sm font-semibold text-blueGray-700">Redni broj / prioritet
            <input className={`${fieldClass} mt-2`} type="number" min="0" value={form.Broj} onChange={(event) => setForm({ ...form, Broj: event.target.value })} required />
          </label>
          {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-700">{error}</p>}
          {message && <p role="status" className="rounded-lg bg-green-50 p-3 text-green-700">{message}</p>}
          <button disabled={busy} type="submit" className="w-full rounded-xl bg-lightBlue-600 px-5 py-3 font-bold text-white shadow transition hover:bg-lightBlue-700 disabled:cursor-wait disabled:opacity-60">
            {busy ? "Spremanje..." : selected ? "Sačuvaj izmjene" : "Dodaj informaciju"}
          </button>
        </form>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">Pronađi po naslovu</p>
        <h2 className="mb-4 text-2xl font-bold text-blueGray-800">Postojeće informacije</h2>
        <input className={`${fieldClass} mb-5`} type="search" placeholder="Upišite dio naslova..." value={search} onChange={(event) => setSearch(event.target.value)} />
        <div className="max-h-[720px] space-y-3 overflow-y-auto pr-1">
          {filteredItems.map((item) => (
            <article key={`${item.collectionName}-${item.id}`} className="rounded-xl border border-blueGray-200 p-4">
              <h3 className="font-bold text-blueGray-800">{item.Naslov || "Bez naslova"}</h3>
              <p className="mt-1 break-all text-xs text-blueGray-500">{item.Link || "Bez linka"}</p>
              <span className="mt-2 inline-block rounded-full bg-blueGray-100 px-2 py-1 text-xs text-blueGray-600">{categoryLabel(item.collectionName)}</span>
              <div className="mt-4 flex gap-2">
                <button type="button" onClick={() => selectItem(item)} className="flex-1 rounded-lg bg-blueGray-800 px-3 py-2 text-sm font-semibold text-white">Uredi</button>
                <button type="button" disabled={busy} onClick={() => removeItem(item)} className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50">Obriši po naslovu</button>
              </div>
            </article>
          ))}
          {!filteredItems.length && <p className="rounded-lg bg-blueGray-50 p-4 text-center text-blueGray-500">Nema rezultata za uneseni naslov.</p>}
        </div>
      </section>
    </div>
  );
}
