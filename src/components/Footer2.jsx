// src/components/Footer.jsx
import React from 'react';
import './Footer2.css'; // Custom CSS file
import bgImage from '../assets/Anjusree/img2.jpeg'; // Replace with your background image
import border from "../assets/down-border.png"
import { useTranslation } from "react-i18next";

const Footer2 = () => {
  const {t} = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className="footer2-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay-22" />

      <div className="footer-content">
        <div className="names-box">
          <span className="name left">{t("male")}</span>
          <div className="chain">
            <span className="bracket left-bracket">⎯</span>
            <span className="knot">⚭</span>
            <span className="bracket right-bracket">⎯</span>
          </div>
          <span className="name right">{t("female")}</span>
        </div>

             
      </div>
      <div>
                      <img loading="lazy" className="border-map22" style={{ transform: 'scaleY(1)'}} src={border} alt="" />
              </div>
      <div className="scroll-up-btn"  onClick={scrollToTop}>↑</div>
    </div>
  );
};

export default Footer2;
