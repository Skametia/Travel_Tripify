import React from "react";
import "./Hero_section.css";
import { CustomButton } from "../Button/CustomButton";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="http://localhost:3001/Video/video-1.mp4"
        autoPlay
        loop
        muted
        className="hero-video"
      />
      <div className="hero-content">
        <h1 className="sana-h1">ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <CustomButton
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </CustomButton>
          <CustomButton
            className="btns "
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={() => console.log("hey")}
          >
            WATCH TRAILER
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
