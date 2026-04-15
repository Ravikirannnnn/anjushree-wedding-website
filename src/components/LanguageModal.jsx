// src/components/LanguageModal.jsx
import React from "react";
import "./LanguageModal.css";
import title from "../assets/landing.png"

function LanguageModal({ onSelect }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
      <img loading="lazy" src={title} alt="title" style={{  marginBottom: "1rem" }} />
        <h2>Select Your Language</h2>
        <button onClick={() => onSelect("en")}>English</button>
        <button onClick={() => onSelect("kn")}>ಕನ್ನಡ (Kannada)</button>
      </div>
    </div>
  );
}

export default LanguageModal;
