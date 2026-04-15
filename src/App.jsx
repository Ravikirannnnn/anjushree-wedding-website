import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageModal from "./components/LanguageModal";
import Header from "./components/Header";
import CoupleSection from "./components/CoupleSection";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Quickball from "./components/Quickball";
import Footer2 from "./components/Footer2";
import GiftWrapper from "./components/GiftWrapper";
import audio from "../src/assets/audio.mp3";
import "./App.css";
import ImageSlide from "./components/ImageSlide";
import WeddingGallery from "./components/WeddingGallery";

function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const fadeInMusic = (targetVolume = 0.3, duration = 3000) => {
    const steps = 30;
    const interval = duration / steps;
    let currentStep = 0;
    const stepVolume = targetVolume / steps;

    audioRef.current.volume = 0;
    const fadeInterval = setInterval(() => {
      if (audioRef.current.volume < targetVolume && !isMuted) {
        audioRef.current.volume += stepVolume;
        currentStep++;
      } else {
        clearInterval(fadeInterval);
        audioRef.current.volume = isMuted ? 0 : targetVolume;
      }
    }, interval);
  };

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
      fadeInMusic();
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      audioRef.current.volume = newMuteState ? 0 : 0.3;
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { i18n } = useTranslation();
  const [isUnwrapped, setIsUnwrapped] = useState(
    localStorage.getItem("giftOpened") === "true"
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      setShowModal(true);
    } else {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setShowModal(false);
    setShowConfetti(true);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (!savedLang) {
      setShowModal(true);
    } else {
      i18n.changeLanguage(savedLang);
    }
  
    // 🔊 Try to play music if gift already unwrapped
    if (localStorage.getItem("giftOpened") === "true") {
      // Defer music until user interacts
      const tryStartMusic = () => {
        startMusic();
        window.removeEventListener("click", tryStartMusic);
      };
  
      // Wait for user interaction before starting music
      window.addEventListener("click", tryStartMusic);
    }
  }, [i18n]);
  
  const handleGiftUnwrap = () => {
    setIsUnwrapped(true);
    localStorage.setItem("giftOpened", "true");
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div>
      <audio ref={audioRef} src={audio} loop />

      {/* 🔇 Mute Button */}
      <button onClick={toggleMute} className="mute-button">
        {isMuted ? "🔊" : "🔇"}
      </button>

      {showModal && <LanguageModal onSelect={handleLanguageSelect} />}

      {!showModal && !isUnwrapped && (
        <GiftWrapper onUnwrap={handleGiftUnwrap} startMusic={startMusic} />
      )}

      {!showModal && isUnwrapped && (
        <>
          <Header showConfetti={showConfetti} />
          <CoupleSection />
          <Quickball />
          <CountdownTimer />
          <EventDetails />
          {/* <Gallery /> */}
          <WeddingGallery/>
          <MapSection />
          {/* <ImageSlide/> */}
          <Footer2 />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
