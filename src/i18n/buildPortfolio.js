import {getProjectLinks} from "./projectLinks";
import splashAnimation from "../assets/lottie/splashAnimation";

export const siteSettings = {
  // Set this to `${process.env.PUBLIC_URL}/cv.pdf` after adding your public CV to public/cv.pdf.
  resumeLink: "",
  socialMediaLinks: {
    github: "https://github.com/hwahyeon-park",
    linkedin: "https://www.linkedin.com/in/hwahyeon-park-aa5036342/",
    gmail: "hwahyeonp25@gmail.com",
    display: true
  }
};
const images = {
  newcastle: require("../assets/images/newcastle-university.png"),
  lifeengine: require("../assets/images/life-engine.png"),
  lenif: require("../assets/images/lenif-logo.png"),
  swu: require("../assets/images/swuLogo.jpg"),
  brframe: require("../assets/images/brframe_logo.png"),
  firmware: require("../assets/images/esp-iot.png"),
  aws: require("../assets/images/server.png"),
  ses: require("../assets/images/AsiaSim.png"),
  seed: require("../assets/images/AndroidThings.jpg"),
  iss: require("../assets/images/iss.png"),
  dissertation: require("../assets/images/dissertation.png"),
  automation: require("../assets/images/automation.png")
};
const paperLinks = {
  ses: "https://doi.org/10.1007/978-981-19-6857-0_7",
  seed: "https://doi.org/10.9709/JKSS.2019.28.4.067",
  iss: "http://iacst.org/iacst/Conferences/ICCT2018/sessions/Session%20ST-P4/890.htm"
};
export default function buildPortfolio(content, language) {
  const ko = language === "ko";
  const withLogos = section => ({
    ...section,
    items: section.items.map(item => ({...item, logo: images[item.logoId]}))
  });
  return {
    ...content,
    extraExperience: withLogos(content.extraExperience),
    researchExperience: withLogos(content.researchExperience),
    scholarships: withLogos(content.scholarships),
    illustration: {animated: true},
    splashScreen: {enabled: true, animation: splashAnimation, duration: 2000},
    socialMediaLinks: siteSettings.socialMediaLinks,
    greeting: {...content.greeting, resumeLink: siteSettings.resumeLink},
    workExperiences: {
      ...content.workExperiences,
      experience: content.workExperiences.experience.map(item => ({
        ...item,
        companylogo: images[item.id]
      }))
    },
    educationInfo: {
      ...content.educationInfo,
      schools: content.educationInfo.schools.map(item => ({
        ...item,
        logo: images[item.id]
      }))
    },
    bigProjects: {
      ...content.bigProjects,
      projects: content.bigProjects.projects.map(item => ({
        ...item,
        image: images[item.id],
        footerLink: getProjectLinks(item.id, language)
      }))
    },
    achievementSection: {
      ...content.achievementSection,
      achievementsCards: content.achievementSection.achievementsCards.map(
        item => ({
          ...item,
          image: images[item.id],
          imageAlt: item.title,
          footerLink: paperLinks[item.id]
            ? [
                {
                  name:
                    item.id === "iss"
                      ? ko
                        ? "발표 정보 보기"
                        : "View Presentation"
                      : ko
                      ? "논문 보기"
                      : "View Paper",
                  url: paperLinks[item.id]
                }
              ]
            : []
        })
      )
    },
    techStack: {viewSkillBars: false, experience: [], displayCodersrank: false},
    openSource: {display: false, showGithubProfile: "false"},
    blogSection: {display: false},
    talkSection: {display: false},
    podcastSection: {display: false},
    twitterDetails: {display: false},
    resumeSection: {display: Boolean(siteSettings.resumeLink)},
    isHireable: false
  };
}
