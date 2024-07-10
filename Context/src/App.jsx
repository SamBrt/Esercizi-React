import React from "react";
import { Clock } from "./components/Clock";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";

function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="it">Italian</option>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
  );
}

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Clock />
    </LanguageProvider>
  );
}

export default App;
