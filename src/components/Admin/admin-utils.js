import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";

const safeFileName = (name) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();

export const uploadAdminFile = async (file, folder) => {
  const uniquePart = typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const path = `${folder}/${uniquePart}-${safeFileName(file.name)}`;
  const storageReference = ref(storage, path);
  await uploadBytes(storageReference, file, { contentType: file.type });
  return {
    url: await getDownloadURL(storageReference),
    path,
    name: file.name,
    type: file.type,
  };
};

export const deleteAdminFiles = async (paths = []) => {
  const uniquePaths = [...new Set(paths.filter(Boolean))];
  await Promise.allSettled(uniquePaths.map((path) => deleteObject(ref(storage, path))));
};

export const normalizeSearch = (value = "") =>
  String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

export const friendlyFirebaseError = (error) => {
  const messages = {
    "auth/invalid-credential": "Pogrešan email ili lozinka.",
    "auth/invalid-email": "Email adresa nije ispravna.",
    "auth/too-many-requests": "Previše pokušaja. Sačekajte pa pokušajte ponovo.",
    "auth/user-disabled": "Ovaj korisnički račun je onemogućen.",
    "auth/network-request-failed": "Nema veze s Firebase servisom.",
    "auth/operation-not-allowed": "Google prijava još nije uključena u Firebase konzoli.",
    "auth/popup-blocked": "Browser je blokirao prozor za Google prijavu. Dozvolite popup prozore i pokušajte ponovo.",
    "auth/popup-closed-by-user": "Google prijava je zatvorena prije završetka.",
    "auth/cancelled-popup-request": "Prethodni prozor za Google prijavu je zatvoren. Pokušajte ponovo.",
    "auth/account-exists-with-different-credential": "Za ovaj email već postoji račun s drugim načinom prijave.",
    "permission-denied": "Firebase pravila trenutno ne dozvoljavaju ovu radnju.",
    "storage/unauthorized": "Nemate dozvolu za slanje ili brisanje ove datoteke.",
    "storage/quota-exceeded": "Firebase Storage kvota je potrošena.",
  };
  return messages[error?.code] || error?.message || "Došlo je do neočekivane greške.";
};
