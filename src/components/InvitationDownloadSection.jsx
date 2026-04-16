// WeddingInvitationDownloadSection.jsx
import React from "react";
import "./InvitationDownloadSection.css";
import border from "../assets/up-border.png";

function WeddingInvitationDownloadSection({
  pdfUrl = "/wedding-invitation.pdf",
  coupleNames = "Manoj & Anjushree",
  weddingDate = "12 December 2026",
}) {
  return (
    <>
    <section className="invitation-section">
      <div className="invitation-container">
        <h2 className="invitation-title">
          Download Our Wedding Invitation
        </h2>

        <div className="couple-names">
          {coupleNames}
          <span className="heart">❤</span>
        </div>


        <div className="invitation-card">
          <div className="download-icon">⬇</div>

          <h3 className="card-title">Get Your Invitation Card</h3>

          <p className="card-text">
            We warmly invite you to celebrate this beautiful journey with us.
            Download the official wedding invitation and join us on our
            special day filled with love, joy, and blessings.
          </p>

          <a href={pdfUrl} download className="download-button">
            Download Invitation
          </a>

          <div className="decorative-line">
            <span></span>
            <span className="small-heart">❤</span>
            <span></span>
          </div>
        </div>
      </div>
      
           
    </section>
     <div>
              <img className="border-map" src={border} alt="" />
            </div>
            </>
  );
}

export default WeddingInvitationDownloadSection;


