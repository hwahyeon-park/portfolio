// Add each project's Korean and English detail-page URLs here.
// Empty en: keep the Korean link and label it "(Korean)" on the English site.
// Both empty: hide the detail button until a page is available.
export const projectLinks = {
  dissertation: {ko: "", en: ""},
  firmware: {
    ko: "https://therapeutic-act-3bf.notion.site/AWS-IoT-ESP32-13a8c834785381b492ecfabfadc46d2e?pvs=4",
    en: "https://therapeutic-act-3bf.notion.site/ESP32-Firmware-Development-and-AWS-IoT-Integration-3e58c83478538053a626c6560de788f0?pvs=73"
  },
  aws: {
    ko: "https://therapeutic-act-3bf.notion.site/AWS-MSA-13a8c834785381f396e1cb0b3beb615c?pvs=4",
    en: "https://therapeutic-act-3bf.notion.site/AWS-Based-IoT-Backend-Development-with-Microservices-3e58c8347853801eaf4fd747a704ebc5?pvs=74"
  },
  automation: {ko: "", en: ""}
};

export function getProjectLinks(projectId, language) {
  const links = projectLinks[projectId];
  if (!links) return [];
  const requested = language === "ko" ? "ko" : "en";
  const other = requested === "ko" ? "en" : "ko";
  const targetLanguage = links[requested].trim() ? requested : other;
  const url = links[targetLanguage].trim();
  if (!url) return [];
  const translated = targetLanguage !== requested;
  const name =
    requested === "ko"
      ? `프로젝트 상세 보기${translated ? " (영문)" : ""}`
      : `View Project Details${translated ? " (Korean)" : ""}`;
  return [{name, url, language: targetLanguage}];
}
