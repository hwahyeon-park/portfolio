// Korean content: src/i18n/content.ko.json
// Shared links and CV download: src/i18n/buildPortfolio.js
import content from "./i18n/content.ko.json";
import buildPortfolio from "./i18n/buildPortfolio";
const portfolio = buildPortfolio(content, "ko");
export const {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  workExperiences,
  bigProjects,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  extraExperience,
  researchExperience,
  scholarships,
  languages
} = portfolio;
export default portfolio;
