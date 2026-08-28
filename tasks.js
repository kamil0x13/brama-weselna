export const tasks = [
 {
  title: "IDENTYFIKACJA MASZYNISTY",
  short: "Weryfikacja danych",
  subtitle: "System wymaga potwierdzenia tożsamości maszynisty.",
  icon: "🪪",
  visualTitle: "WERYFIKACJA MASZYNISTY",
  visualText: "Operator sprawdza dane i wydaje zgodę na przejście dalej.",
  instructions: [
    "Jak ma na imię panna młoda?",
    "Jaka jest data urodzenia panny młodej?",
    "Jaki jest cel podróży?"
  ]
},
  {
    title: "TEST WIEDZY O KATARZYNIE",
    short: "3 pytania kontrolne",
    subtitle: "Wymagane potwierdzenie zgodności relacji.",
    icon: "❤️",
    visualTitle: "TEST ZGODNOŚCI RELACJI",
    visualText: "Minimum 2 z 3 odpowiedzi uznane przez komisję.",
    instructions: [
      "Operator zadaje 3 krótkie pytania o Katarzynę.",
      "Minimum 2 poprawne odpowiedzi = test zaliczony."
    ]
  },
  {
    title: "BŁĄD RCS-24V: ROGATKA NIE WSTAJE",
    short: "Awaria obwodu sterowania rogatką",
    subtitle: "System wykrył brak zasilania w układzie wykonawczym.",
    icon: "⚡",
    visualTitle: "ROGATKA — BRAK GOTOWOŚCI",
    visualText: "24V DC: 0.0 V • OBWÓD STERUJĄCY: PRZERWA",
    instructions: [
      "Mechanizm rogatki nie odpowiada.",
      "Wykryto brak zasilania w obwodzie sterującym.",
      "Sprawdź połączenia w szafie sterowniczej.",
      "Przywróć prawidłowe połączenie przewodów i uruchom układ."
    ]
  },
  {
    title: "TEST SYSTEMU ŁĄCZNOŚCI",
    short: "Meldunek do dyżurnego ruchu",
    subtitle: "Maszynista musi nawiązać prawidłową łączność.",
    icon: "📻",
    visualTitle: "KANAŁ RCS-01",
    visualText: "Oczekiwanie na meldunek maszynisty.",
    instructions: [
      "Stań przed dyżurnym ruchu.",
      "Powiedz: „Tu maszynista Marcin. Proszę o zgodę na przejazd w kierunku Wspólne Życie.”",
      "Operator potwierdza poprawność meldunku."
    ]
  },
  {
    title: "OPŁATA ZA PRZEJAZD",
    short: "Pakiet serwisowy",
    subtitle: "System oczekuje wymaganej opłaty za przejazd.",
    icon: "🍾",
    visualTitle: "PAKIET SERWISOWY",
    visualText: "Oczekiwanie na odbiór i kontrolę jakości.",
    instructions: [
      "Przekaż ekipie wymagany pakiet serwisowy.",
      "Inspektor dokonuje oględzin jakości.",
      "Po akceptacji operator zatwierdza płatność."
    ]
  },
  {
    title: "AUTORYZACJA KOŃCOWA",
    short: "Zwolnienie blokady przejazdu",
    subtitle: "Wszystkie testy muszą mieć status OK.",
    icon: "🚦",
    visualTitle: "GOTOWOŚĆ DO ODBLOKOWANIA",
    visualText: "",
    instructions: [
      "Poczekaj na potwierdzenie wszystkich podsystemów.",
      "Gdy przycisk zmieni kolor na zielony, przytrzymaj AUTORYZUJ przez 3 sekundy.",
      "Po zwolnieniu blokady można ruszać."
    ]
  }
];

export const initialState = {
  currentStep: 0,
  completed: [false, false, false, false, false, false],
  failed: [false, false, false, false, false, false],
  payment: false,
  authorized: false,
  lastAction: "SYSTEM GOTOWY",
  updatedAt: Date.now()
};
