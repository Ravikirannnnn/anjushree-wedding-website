// src/components/LanguageModal.jsx
import React from "react";
import "./LanguageModal.css";

function LanguageModal({ onSelect }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Select Your Language</h2>

        <button onClick={() => onSelect("en")}>
          English
        </button>

        <button onClick={() => onSelect("kn")}>
          ಕನ್ನಡ (Kannada)
        </button>
      </div>
    </div>
  );
}

export default LanguageModal;