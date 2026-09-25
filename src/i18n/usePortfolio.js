import korean from "../portfolio";
import english from "./portfolio.en";
import {useLanguage} from "../contexts/LanguageContext";

const labels = {
  en: {
    experience: "Experience",
    projects: "Projects",
    viewProjects: "View Projects",
    scholarships: "Scholarships",
    skills: "Skills",
    openSource: "Open Source",
    research: "Research",
    blogs: "Blogs",
    talks: "Talks",
    resume: "CV",
    contact: "Contact Me",
    education: "Education",
    proficiency: "Proficiency",
    download: "Download CV",
    menu: "Open navigation menu",
    top: "Go to top",
    reachOut: "Get in Touch",
    opportunities: "Open for opportunities",
    yes: "Yes",
    no: "No",
    madeBy: "Made with ❤️ by DeveloperFolio Team",
    themeBy: "Theme by",
    openProjects: "Open Source Projects",
    moreProjects: "More Projects"
  },
  ko: {
    experience: "경력",
    projects: "프로젝트",
    viewProjects: "프로젝트 보기",
    scholarships: "장학금",
    skills: "기술",
    openSource: "오픈소스",
    research: "연구",
    blogs: "블로그",
    talks: "발표",
    resume: "이력서",
    contact: "연락하기",
    education: "학력",
    proficiency: "숙련도",
    download: "CV 다운로드",
    menu: "메뉴 열기",
    top: "맨 위로",
    reachOut: "연락하기",
    opportunities: "새로운 기회에 열려 있습니다",
    yes: "예",
    no: "아니요",
    madeBy: "DeveloperFolio 팀이 ❤️로 만들었습니다",
    themeBy: "테마 제작:",
    openProjects: "오픈소스 프로젝트",
    moreProjects: "프로젝트 더 보기"
  }
};

export default function usePortfolio() {
  const {language} = useLanguage();
  return {...(language === "ko" ? korean : english), ui: labels[language]};
}
