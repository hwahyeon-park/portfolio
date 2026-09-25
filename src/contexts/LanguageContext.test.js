import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils";
import {LanguageProvider} from "./LanguageContext";
import LanguageToggle from "../components/ToggleSwitch/ToggleSwitch";
import usePortfolio from "../i18n/usePortfolio";

function Content() {
  const {greeting, workExperiences, bigProjects, achievementSection} =
    usePortfolio();
  return (
    <>
      <LanguageToggle />
      <main>
        {greeting.title}
        {workExperiences.experience[0].role}
        {bigProjects.projects[0].projectName}
        {achievementSection.achievementsCards[0].title}
      </main>
    </>
  );
}
let container;
const mount = () =>
  act(() => {
    ReactDOM.render(
      <LanguageProvider>
        <Content />
      </LanguageProvider>,
      container
    );
  });
beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, "", "/portfolio/");
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
  jest.restoreAllMocks();
});
it("defaults to English and updates all content, metadata and persistence together", () => {
  mount();
  expect(document.documentElement.lang).toBe("en");
  expect(container.querySelector("main").textContent).toContain(
    "Hi, I’m Hwahyeon Park."
  );
  expect(container.querySelector("main").textContent).not.toMatch(/[가-힣]/);
  act(() => Simulate.click(container.querySelector('button[lang="ko"]')));
  expect(document.documentElement.lang).toBe("ko");
  expect(container.querySelector("main").textContent).toContain(
    "박화현입니다."
  );
  expect(container.querySelector("main").textContent).toContain(
    "소프트웨어 엔지니어"
  );
  expect(
    container.querySelector('button[lang="ko"]').getAttribute("aria-pressed")
  ).toBe("true");
  expect(localStorage.getItem("portfolio-language")).toBe("ko");
  expect(window.location.search).toBe("?lang=ko");
  act(() => Simulate.click(container.querySelector('button[lang="en"]')));
  expect(container.querySelector("main").textContent).not.toMatch(/[가-힣]/);
});
it("restores the saved language on a fresh mount", () => {
  localStorage.setItem("portfolio-language", "ko");
  mount();
  expect(document.documentElement.lang).toBe("ko");
});
it("lets an explicit English link override a saved Korean preference", () => {
  localStorage.setItem("portfolio-language", "ko");
  window.history.replaceState({}, "", "/portfolio/?lang=en#experience");
  mount();
  expect(document.documentElement.lang).toBe("en");
  act(() => Simulate.click(container.querySelector('button[lang="ko"]')));
  expect(window.location.hash).toBe("#experience");
});
it("ignores invalid stored and URL values", () => {
  localStorage.setItem("portfolio-language", "invalid");
  window.history.replaceState({}, "", "/portfolio/?lang=invalid");
  mount();
  expect(document.documentElement.lang).toBe("en");
});
it("still switches languages when browser storage is blocked", () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
    throw new Error("blocked");
  });
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("blocked");
  });
  mount();
  act(() => Simulate.click(container.querySelector('button[lang="ko"]')));
  expect(document.documentElement.lang).toBe("ko");
});
