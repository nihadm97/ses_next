"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import StaffManager from "@/components/Admin/StaffManager";
import InformationManager from "@/components/Admin/InformationManager";
import PostManager from "@/components/Admin/PostManager";
import { friendlyFirebaseError } from "@/components/Admin/admin-utils";

const tabs = [
  { id: "posts", label: "Aktivnosti i projekti" },
  { id: "information", label: "Početne informacije" },
  { id: "staff", label: "Radnici" },
];

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default function AdminDashboard() {
  const [authState, setAuthState] = useState({ loading: true, user: null, isAdmin: false });
  const [activeTab, setActiveTab] = useState("posts");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => onAuthStateChanged(auth, async (user) => {
    if (!user) {
      setAuthState({ loading: false, user: null, isAdmin: false });
      return;
    }
    try {
      const token = await user.getIdTokenResult();
      let hasAdminDocument = false;
      try {
        hasAdminDocument = (await getDoc(doc(db, "admins", user.uid))).exists();
      } catch {
        hasAdminDocument = false;
      }
      setAuthState({
        loading: false,
        user,
        isAdmin: token.claims.admin === true || hasAdminDocument,
      });
    } catch {
      setAuthState({ loading: false, user, isAdmin: false });
    }
  }), []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      setPassword("");
    } catch (loginError) {
      setError(friendlyFirebaseError(loginError));
    } finally {
      setBusy(false);
    }
  };

  const handleReset = async () => {
    if (!email.trim()) {
      setError("Prvo unesite email adresu administratora.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMessage("Firebase je poslao poruku za promjenu lozinke.");
    } catch (resetError) {
      setError(friendlyFirebaseError(resetError));
    } finally {
      setBusy(false);
    }
  };

  const handleGoogleLogin = async () => {
    setBusy(true);
    setError("");
    setMessage("");
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (loginError) {
      setError(friendlyFirebaseError(loginError));
    } finally {
      setBusy(false);
    }
  };

  if (authState.loading) {
    return <main className="flex min-h-screen items-center justify-center bg-blueGray-100"><p className="rounded-xl bg-white px-6 py-4 font-semibold text-blueGray-600 shadow">Provjera Firebase prijave...</p></main>;
  }

  if (!authState.user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blueGray-900 via-blueGray-800 to-lightBlue-900 px-4 py-12">
        <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-lightBlue-600 text-2xl text-white shadow-lg"><i className="fas fa-lock" aria-hidden="true"></i></div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">JU Srednja ekonomska škola</p>
            <h1 className="mt-2 text-3xl font-bold text-blueGray-800">Admin prijava</h1>
            <p className="mt-2 text-sm text-blueGray-500">Pristup je moguć samo Firebase računu s admin ovlastima.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block text-sm font-semibold text-blueGray-700">Email
              <input className="mt-2 w-full rounded-xl border border-blueGray-300 px-4 py-3 outline-none focus:border-lightBlue-500 focus:ring-2 focus:ring-lightBlue-100" type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <label className="block text-sm font-semibold text-blueGray-700">Lozinka
              <input className="mt-2 w-full rounded-xl border border-blueGray-300 px-4 py-3 outline-none focus:border-lightBlue-500 focus:ring-2 focus:ring-lightBlue-100" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </label>
            {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
            {message && <p role="status" className="rounded-lg bg-green-50 p-3 text-sm text-green-700">{message}</p>}
            <button disabled={busy} type="submit" className="w-full rounded-xl bg-lightBlue-600 px-5 py-3 font-bold text-white shadow transition hover:bg-lightBlue-700 disabled:cursor-wait disabled:opacity-60">{busy ? "Provjera..." : "Prijavi se preko Firebasea"}</button>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase text-blueGray-400" aria-hidden="true">
              <span className="h-px flex-1 bg-blueGray-200"></span>
              <span>ili</span>
              <span className="h-px flex-1 bg-blueGray-200"></span>
            </div>
            <button disabled={busy} type="button" onClick={handleGoogleLogin} className="flex w-full items-center justify-center gap-3 rounded-xl border border-blueGray-300 bg-white px-5 py-3 font-bold text-blueGray-700 shadow transition hover:bg-blueGray-100 disabled:cursor-wait disabled:opacity-60">
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4Z" />
                <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1a5.8 5.8 0 0 1-5.5-4H3.2v2.6A10 10 0 0 0 12 22Z" />
                <path fill="#FBBC05" d="M6.5 14.1a6 6 0 0 1 0-4.2V7.3H3.2a10 10 0 0 0 0 9.4l3.3-2.6Z" />
                <path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 3.2 7.3l3.3 2.6A5.8 5.8 0 0 1 12 5.9Z" />
              </svg>
              Prijavi se Google računom
            </button>
            <button disabled={busy} type="button" onClick={handleReset} className="w-full px-4 py-2 text-sm font-semibold text-blueGray-500 hover:text-lightBlue-600">Zaboravljena lozinka</button>
          </form>
        </section>
      </main>
    );
  }

  if (!authState.isAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-blueGray-100 px-4">
        <section className="max-w-xl rounded-2xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-2xl font-bold text-red-700">Račun nema admin ovlasti</h1>
          <p className="mt-3 text-blueGray-600">Firebase je potvrdio prijavu za <strong>{authState.user.email}</strong>, ali račun nije označen kao administrator.</p>
          <p className="mt-4 break-all rounded-lg bg-blueGray-50 p-3 text-left text-xs text-blueGray-500">UID za jednokratno dodavanje u kolekciju admins: {authState.user.uid}</p>
          <button type="button" onClick={() => signOut(auth)} className="mt-6 rounded-xl bg-blueGray-800 px-6 py-3 font-bold text-white">Odjavi se</button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-blueGray-100 pb-16">
      <header className="bg-lightBlue-200 px-4 py-8 text-blueGray-800 shadow-xl">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blueGray-700">Sigurna Firebase administracija</p>
            <h1 className="mt-1 text-3xl font-bold text-blueGray-800">Upravljanje sadržajem stranice</h1>
            <p className="mt-2 text-sm text-blueGray-700">Prijavljen: {authState.user.email}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="rounded-xl border border-blueGray-500 px-5 py-3 text-sm font-bold text-blueGray-800 hover:bg-white">Otvori stranicu</Link>
            <button type="button" onClick={() => signOut(auth)} className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow hover:bg-orange-600">Odjavi se</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <nav className="mb-8 flex flex-wrap gap-3 rounded-2xl bg-white p-3 shadow-lg" aria-label="Admin sekcije">
          {tabs.map((tab) => (
            <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`flex-1 rounded-xl px-5 py-3 text-sm font-bold transition ${activeTab === tab.id ? "bg-lightBlue-600 text-white shadow" : "text-blueGray-600 hover:bg-blueGray-100"}`}>
              {tab.label}
            </button>
          ))}
        </nav>
        {activeTab === "staff" && <StaffManager />}
        {activeTab === "information" && <InformationManager />}
        {activeTab === "posts" && <PostManager />}
      </div>
    </main>
  );
}
