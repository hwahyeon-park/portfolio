import React from "react";
import ReactDOM from "react-dom";
import {act, Simulate} from "react-dom/test-utils";
import App from "./App";
import en from "./i18n/content.en.json";
import ko from "./i18n/content.ko.json";

jest.mock("react-reveal", () => ({
  Fade: ({children}) => children,
  Slide: ({children}) => children
}));
jest.mock("./components/displayLottie/DisplayLottie", () => () => null);
let container;
beforeEach(() => {
  jest.useFakeTimers();
  localStorage.clear();
  window.history.replaceState({}, "", "/portfolio/");
  window.matchMedia = jest.fn(() => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }));
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<App />, container);
  });
  act(() => {
    jest.advanceTimersByTime(2100);
  });
});
afterEach(() => {
  act(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  container.remove();
  jest.useRealTimers();
});
it("renders all CV additions and switches the complete page into Korean", () => {
  for (const [id, count] of [
    ["additional-experience", 2],
    ["research-experience", 1],
    ["scholarships", 2]
  ]) {
    expect(container.querySelectorAll(`#${id} .cv-logo`)).toHaveLength(count);
  }
  expect(container.querySelectorAll("#skills .skill-image").length).toBe(0);

  expect(container.querySelector("#education").textContent).toContain(
    "Newcastle University"
  );
  expect(
    container.querySelector("#additional-experience").textContent
  ).toContain("Life Engine");
  expect(container.querySelector("#achievements").textContent).toContain(
    "Three-Tier Validation of Indoor Environmental Sensor Relationships"
  );
  expect(container.querySelector("#scholarships").textContent).toContain(
    "£7,000"
  );
  expect(container.querySelector("#languages").textContent).toContain(
    "Chinese: Advanced"
  );
  expect(container.querySelector("#experience").textContent).toContain(
    "from Azure to AWS"
  );
  expect(container.querySelector("#achievements").textContent).toContain(
    "System Entity Structure"
  );
  expect(container.querySelector("#contact").textContent).toContain(
    "hwahyeonp25@gmail.com"
  );
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(container.querySelector(link.getAttribute("href"))).not.toBeNull();
  }
  expect(container.querySelector("a[download]")).toBeNull();
  expect(
    container.querySelector(
      'a[href="https://www.linkedin.com/in/hwahyeon-park-aa5036342/"]'
    )
  ).not.toBeNull();
  act(() => {
    Simulate.click(container.querySelector('button[lang="ko"]'));
  });
  expect(container.querySelector("#achievements").textContent).toContain(
    "실내 환경 센서 간 관계의 3단계 검증"
  );
  expect(container.querySelector("#scholarships").textContent).toContain(
    "장학금"
  );
  expect(container.querySelector("#languages").textContent).toContain(
    "중국어: 고급"
  );
  expect(container.querySelector("#experience").textContent).toContain(
    "Azure에서 AWS로"
  );
  expect(container.querySelector("#education").textContent).toContain(
    "졸업 예정"
  );
  expect(container.querySelector("#skills").textContent).toContain("STM32");
  expect(container.querySelectorAll("#skills .skill-image").length).toBe(0);
  expect(container.querySelectorAll("#scholarships .cv-logo")).toHaveLength(2);
  act(() => {
    Simulate.click(container.querySelector('button[lang="en"]'));
  });
  expect(container.querySelector("#achievements").textContent).toContain(
    "Three-Tier Validation of Indoor Environmental Sensor Relationships"
  );
});
it("keeps both languages complete and preserves the CV's qualification of device capacity", () => {
  expect(en.workExperiences.experience.map(x => x.id)).toEqual(
    ko.workExperiences.experience.map(x => x.id)
  );
  expect(en.bigProjects.projects.map(x => x.id)).toEqual(
    ko.bigProjects.projects.map(x => x.id)
  );
  expect(en.educationInfo.schools).toHaveLength(2);
  expect(en.bigProjects.projects).toHaveLength(3);
  expect(en.workExperiences.experience[0].descBullets[0]).toContain(
    "designed to support"
  );
  expect(ko.workExperiences.experience[0].descBullets[0]).toContain(
    "지원하도록"
  );
  expect(en.achievementSection.achievementsCards).toHaveLength(4);
  expect(JSON.stringify(en)).not.toMatch(/[가-힣]/);
});
it("allows keyboard-operable mobile menu expansion and closes it after navigation", () => {
  const toggle = container.querySelector(".navigation-toggle");
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  act(() => {
    Simulate.click(toggle);
  });
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  act(() => {
    Simulate.click(container.querySelector('nav a[href="#projects"]'));
  });
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
});
