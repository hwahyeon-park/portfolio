import React from "react";
import "./Skills.scss";
import SoftwareSkillCategory from "../../components/SoftwareSkillCategory/SoftwareSkillCategory";
import usePortfolio from "../../i18n/usePortfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  const {skillsSection, ui} = usePortfolio();
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container" id="skills">
        <div className="skills-bar">
          {/* 직접 설정한 타이틀과 부제목 */}
          <h1 className="skills-heading">{ui.skills}</h1>
          {/* 기술 카테고리 렌더링 */}
          {skillsSection.softwareSkills.map((category, i) => (
            <SoftwareSkillCategory key={i} category={category} />
          ))}
        </div>
      </div>
    </Fade>
  );
}
