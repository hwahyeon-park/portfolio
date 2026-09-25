import React from "react";
import "./SoftwareSkillCategory.scss";
export default function SoftwareSkillCategory({category}) {
  return (
    <section className="software-skill-category">
      <h2 className="category-title">{category.title}</h2>
      <ul className="skill-tags">
        {category.skills.map(skill => (
          <li key={skill.skillName}>{skill.skillName}</li>
        ))}
      </ul>
    </section>
  );
}
