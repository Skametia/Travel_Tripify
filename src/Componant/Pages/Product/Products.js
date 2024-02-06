import React from "react";
import { CustomButton } from "../../Button/CustomButton";
function Products() {
  return (
    <div className="hero-container">
      <video
        src="http://localhost:3001/Video/video-3.mp4"
        autoPlay
        loop
        muted
        className="hero-video"
      />
      <div className="hero-content">
        <h1 className="sana-h1">ADOPT THE PACE OF NATURE </h1>
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

export default Products;
