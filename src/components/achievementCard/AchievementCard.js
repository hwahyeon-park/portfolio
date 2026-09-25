import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p
          className={
            isDark
              ? "dark-mode card-subtitle publication-copy"
              : "card-subtitle publication-copy"
          }
        >
          {cardInfo.description}
          <br />
          {cardInfo.description2}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
            >
              {v.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
