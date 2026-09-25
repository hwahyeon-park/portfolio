import {LanguageProvider} from "./contexts/LanguageContext";
import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import "./Typography.scss";

function App() {
  return (
    <div className="portfolio-typography">
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </div>
  );
}

export default App;
