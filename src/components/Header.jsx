import "./Header.css";
import "./Header.css"
import weddingBg from "../assets/Anjusree/HeroBg.jpeg";
import weddingBgMob from "../assets/Anjusree/img2.jpeg"
import leaf from "../assets/leaf.png"
import ganesh from "../assets/ganeshw.png"
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Header = ({showConfetti}) => {
  const {t} = useTranslation();
  const { width, height } = useWindowSize();
  const [bgImage, setBgImage] = useState(null); // Start with placeholder
  const [bgImageMob, setBgImageMob] = useState(null); // Start with placeholder

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = weddingBg;
    img.onload = () => setBgImage(weddingBg); // Set actual image once loaded
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = weddingBgMob;
    img.onload = () => setBgImageMob(weddingBgMob); // Set actual image once loaded
  }, []);

  
  return (
    <>
    {bgImage || bgImageMob?
    <header className="hero-section"
    style={{backgroundImage:isMobile ? `url(${bgImageMob})`:`url(${bgImage})`}}>
      <div className="overlay">
      {showConfetti && (
                <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={500}
                gravity={0.2}
                friction={1}
                tweenDuration={6000} 
        />
            )}

        <div className="ganesh">
          <img loading="lazy" src={ganesh} alt="ganesh" />
        </div>
        <h5>{t("first_line")}</h5>
          <h5>{t("sec_line")}</h5>
        <h2>{t("head")}</h2>
        <h1 className="cssanimation leScaleYIn sequence">
          <img loading="lazy" className="leaf-l" src={leaf} alt="" />
          {` `}{t("male")}
          {isMobile && <br />}
           & 
           {isMobile && <br />}
           {t("female")}{` `} 
          <img loading="lazy" className="leaf-r" src={leaf} alt="" />
          </h1>
        <p>
          <span className="dot">·</span>
          {`   `}{t("date")}{` `}
          <span className="dot">·</span>
          </p>
      </div>
    </header>
  :null}
  </>
  );
};

export default Header;
