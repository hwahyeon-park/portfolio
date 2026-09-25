import React from "react";
import {useLanguage} from "../../contexts/LanguageContext";
import "./ToggleSwitch.scss";

export default function LanguageToggle() {
  const {language, setLanguage} = useLanguage();
  return (
    <div
      className="language-selector"
      role="group"
      aria-labelledby="language-title"
    >
      <span id="language-title" className="language-title">
        Language / 언어
      </span>
      <div className="language-options">
        <button
          type="button"
          lang="en"
          aria-pressed={language === "en"}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          type="button"
          lang="ko"
          aria-pressed={language === "ko"}
          onClick={() => setLanguage("ko")}
        >
          한국어
        </button>
      </div>
    </div>
  );
}
