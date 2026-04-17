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
// import ImageSlide from "./components/ImageSlide";
import WeddingGallery from "./components/WeddingGallery";
import WeddingInvitationDownloadSection from "./components/InvitationDownloadSection";
import Galaxy from "./components/Backround/Gallaxy";

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
            <div style={{ position: "relative", minHeight: "100vh" }}>
      
      {/* Background Galaxy */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <Galaxy
  density={0.9}
  glowIntensity={0.35}
  saturation={0.6}
  hueShift={280}
  speed={0.6}
  twinkleIntensity={0.4}
  rotationSpeed={0.05}
  mouseRepulsion={false}
  transparent={true}
/>
      </div>

      {/* Your existing website content */}
      <div style={{ position: "relative", zIndex: 1 }}>
          <Header showConfetti={showConfetti} />
          <CoupleSection />
          <Quickball />
          <CountdownTimer />
          <EventDetails />
          <WeddingGallery/>
          {/* <Gallery /> */}
          <WeddingInvitationDownloadSection
  pdfUrl="/inviatation.jpeg"
  coupleNames="Manoj & Anjushree"
  weddingDate="12 December 2026"
/>
          <MapSection />
          {/* <ImageSlide/> */}
          <Footer2 />
          <Footer />
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
