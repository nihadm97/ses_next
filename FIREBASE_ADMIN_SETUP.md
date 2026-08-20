# Jednokratno Firebase podešavanje administratora

Admin stranica koristi Firebase Authentication, Firestore i Storage. Prije prve prijave potrebno je jednom podesiti administratorski račun i objaviti sigurnosna pravila.

## 1. Uključiti prijavu emailom, lozinkom i Google računom

1. Otvoriti Firebase Console za projekat `obavijesti-b3310`.
2. Otvoriti **Authentication → Sign-in method**.
3. Uključiti **Email/Password**.
4. Uključiti **Google**, odabrati email za podršku projekta i sačuvati postavke.

## 2. Kreirati administratorski račun

1. U **Authentication → Users** odabrati **Add user**.
2. Unijeti administratorski email i sigurnu lozinku.
3. Kopirati UID novog korisnika.

Ako se administrator prvi put prijavljuje Google računom, njegov UID se može kopirati iz **Authentication → Users** nakon te prijave.

## 3. Dodijeliti admin ovlasti

1. U Firestoreu kreirati kolekciju `admins` ako ne postoji.
2. Kreirati dokument čiji je ID potpuno isti kao kopirani UID.
3. Dokument može sadržavati polje `enabled` tipa boolean s vrijednošću `true`. Za provjeru ovlasti presudno je postojanje dokumenta s odgovarajućim UID-em.

## 4. Objaviti sigurnosna pravila

Iz korijena projekta pokrenuti:

```powershell
npx firebase-tools login
npx firebase-tools deploy --only firestore:rules,storage
```

Pri prvom objavljivanju Storage pravila Firebase može zatražiti dozvolu da Storage pravila čitaju dokument `admins` iz Firestorea. Tu dozvolu treba potvrditi.

## 5. Prijava

Pokrenuti projekat i otvoriti:

```text
http://localhost:3000/admin
```

Admin putanja nije dodata u javnu navigaciju i označena je da je pretraživači ne indeksiraju.
