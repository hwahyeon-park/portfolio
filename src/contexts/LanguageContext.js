import React, {createContext, useContext, useEffect, useState} from "react";

const LanguageContext = createContext({language: "en", setLanguage: () => {}});
const validLanguage = value => value === "en" || value === "ko";

export function getInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (validLanguage(requested)) return requested;
  try {
    const saved = localStorage.getItem("portfolio-language");
    if (validLanguage(saved)) return saved;
  } catch (_) {
    // Language switching also works when browser storage is unavailable.
  }
  return "en";
}

export function LanguageProvider({children}) {
  const [language, updateLanguage] = useState(getInitialLanguage);
  const setLanguage = value => {
    if (!validLanguage(value)) return;
    updateLanguage(value);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", value);
    window.history.replaceState(window.history.state, "", url.toString());
  };

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (_) {}
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
