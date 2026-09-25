import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import usePortfolio from "../../i18n/usePortfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {illustration, greeting, ui} = usePortfolio();
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
            {" "}
            {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
          </h1>
          <div className="greeting-text-div">
            <div>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
                <br />
                {greeting.subTitle2}
                <br />
                {greeting.subTitle3}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={ui.viewProjects} href="#projects" />
                <Button text={ui.contact} href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    download
                    className="main-button"
                  >
                    {ui.download}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
