import React, { useEffect, useState } from "react";
import "./Hero.css";
import play_btn from "../../assets/play_icon.png";
import pause_btn from "../../assets/pause_icon.png";

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus, totalSlides }) => {
  const [animate, setAnimate] = useState(true);

  // ✅ Auto slide remove kar diya, sirf animation trigger rakha
  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 50); // restart animation
    return () => clearTimeout(timeout);
  }, [heroData]);

  return (
    <div className="hero">
      <div className="text">
        <div className={`hero-text ${animate ? "show" : ""}`}>
          <h3>{heroData.text1}</h3>
          <h2>{heroData.text2}</h2>
          <div className="text-animation">
            <h2>{heroData.text3}</h2>
          </div>
          <p>{heroData.text4}</p>
        </div>
      </div>

      <div className="hero-explore">
        <a href="mailto:usmanawan2124@gmail.com" className="btn">
          Contact us <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>

      <div className="hero-dot-play">
        <div className="dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              onClick={() => setHeroCount(index)}
              className={`dot ${heroCount === index ? "active" : ""}`}
            ></span>
          ))}
        </div>

        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_btn : play_btn}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
