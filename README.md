# Brama weselna RCS — Katarzyna & Marcin

Gotowy układ:
- `display.html` — ekran dla Marcina na iPadzie.
- `operator.html` — panel sterowania na telefonie.
- `tasks.js` — treść wszystkich zadań.
- `config.js` — konfiguracja Firebase.
- `firebase-rules.json` — tymczasowe reguły Realtime Database.

## 1. Firebase

1. Wejdź na https://console.firebase.google.com/
2. Utwórz nowy projekt.
3. Dodaj aplikację Web (`</>`).
4. Skopiuj `firebaseConfig` i wklej wartości do `config.js`.
5. Firebase Console -> Build / Realtime Database -> Create Database.
6. Skopiuj dokładny `databaseURL` do `config.js`.
7. W Realtime Database -> Rules wklej zawartość `firebase-rules.json` i kliknij Publish.

UWAGA:
Reguły są celowo proste na jednorazową bramę weselną. Każdy, kto pozna ścieżkę projektu i roomId,
może odczytać / zmodyfikować ten jeden stan. Nie zapisuj tam żadnych prywatnych danych.
Po weselu wyłącz bazę albo ustaw reguły z powrotem na brak dostępu.

## 2. GitHub Pages

1. Utwórz repozytorium, np. `brama-weselna`.
2. Wrzuć do głównego katalogu:
   `display.html`, `operator.html`, `tasks.js`, `config.js`.
3. Repo -> Settings -> Pages.
4. Source: `Deploy from a branch`.
5. Branch: `main`, folder `/ (root)`.
6. Po chwili dostaniesz adres GitHub Pages.

Adresy będą mniej więcej takie:
- iPad: `https://TWOJ_LOGIN.github.io/brama-weselna/display.html`
- telefon: `https://TWOJ_LOGIN.github.io/brama-weselna/operator.html`

## 3. Start przed przyjazdem

1. Otwórz najpierw `operator.html`.
2. Jeżeli baza jest pusta, panel automatycznie utworzy początkowy stan JSON.
3. Otwórz `display.html` na iPadzie.
4. Na obu urządzeniach powinno być `ONLINE`.
5. Kliknij testowo `ZALICZ I DALEJ` — iPad powinien zmienić krok praktycznie od razu.
6. Kliknij `RESET CAŁOŚCI`.
7. Na iPadzie: Safari -> Udostępnij -> Dodaj do ekranu początkowego.

## Stan JSON

W bazie będzie mniej więcej:

```json
{
  "currentStep": 2,
  "completed": [true, true, false, false, false, false],
  "failed": [false, false, false, false, false, false],
  "payment": false,
  "authorized": false,
  "lastAction": "KROK 2 ZALICZONY",
  "updatedAt": 1787860000000
}
```

Operator zmienia JSON, a ekran iPada nasłuchuje tych zmian w Realtime Database.

## Ważne

GitHub Pages sam nie potrafi zapisywać zmian do zwykłego `state.json` w repozytorium.
Do zapisu przez GitHub API trzeba byłoby wystawić token w przeglądarce, czego nie należy robić.
Firebase pełni tutaj rolę małego, synchronizowanego pliku JSON.
