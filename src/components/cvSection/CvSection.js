import React from "react";
import usePortfolio from "../../i18n/usePortfolio";
import "./CvSection.scss";

export default function CvSection({sectionKey, id}) {
  const section = usePortfolio()[sectionKey];
  if (!section) return null;
  return (
    <section
      className="main cv-section"
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`} className="cv-heading">
        {section.title}
      </h2>
      {section.description && <p>{section.description}</p>}
      {section.items && (
        <div className="cv-grid">
          {section.items.map(item => (
            <article className="cv-card" key={item.title}>
              <div className="cv-card-heading">
                {item.logo && (
                  <div className="cv-logo-frame">
                    <img
                      className="cv-logo"
                      src={item.logo}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="cv-heading-copy">
                  <h3>{item.title}</h3>
                  {item.subtitle && <p className="cv-meta">{item.subtitle}</p>}
                </div>
              </div>
              {item.description && <p>{item.description}</p>}
              {item.bullets && (
                <ul>
                  {item.bullets.map(line => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
