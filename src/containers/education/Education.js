import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import usePortfolio from "../../i18n/usePortfolio";

export default function Education() {
  const {educationInfo, ui} = usePortfolio();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{ui.education}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
