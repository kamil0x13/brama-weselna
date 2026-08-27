export const tasks = [
 {
  title: "IDENTYFIKACJA MASZYNISTY",
  short: "Weryfikacja danych Marcina",
  subtitle: "System wymaga potwierdzenia tożsamości maszynisty.",
  icon: "🪪",
  visualTitle: "WERYFIKACJA MASZYNISTY",
  visualText: "Operator sprawdza dane i wydaje zgodę na przejście dalej.",
  instructions: [
    "Jak ma na imię panna młoda?",
    "Jaka jest data urodzenia Katarzyny?",
    "Jaki jest cel podróży?",
    "Odpowiedz na jedno pytanie kontrolne od operatora."
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
      "Np. ulubione jedzenie, miejsce poznania, pierwszy wspólny wyjazd.",
      "Minimum 2 poprawne odpowiedzi = test zaliczony."
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
    title: "TEST SYGNALIZACJI",
    short: "Próba sygnału dźwiękowego",
    subtitle: "Wymagana próba sygnału pojazdu.",
    icon: "📣",
    visualTitle: "SEKWENCJA TESTOWA",
    visualText: "KRÓTKI  •  KRÓTKI  •  DŁUGI",
    instructions: [
      "Podejdź do samochodu.",
      "Wykonaj klaksonem: KRÓTKI → KRÓTKI → DŁUGI.",
      "Inspektor sygnalizacji potwierdza wykonanie."
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
    visualText: "Po zatwierdzeniu przez operatora Marcin uruchamia przejazd.",
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
