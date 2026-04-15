import React from "react";
import "./DeveloperInfo.css";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { FaPage4 } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const DeveloperInfo = ({ onClose }) => {
  return (
    <motion.div 
      className="developer-info-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="developer-info">
        {/* <img src="/assets/gal1.jpg" alt="Developer" className="developer-img" /> */}
        <h2 className="developer-title">Meet the Developer</h2>
        {/* <p className="developer-name">Ravikiran</p> */}
        <p className="developer-bio">A passionate Web Developer specializing in ReactJS, crafting immersive and beautiful UI experiences.</p>
        <p className="developer-contact">
        📩 <a href="mailto:ravikiranrcta@gmail.com" className="email-link">Want a site like this? Let's make it happen.</a>
        </p>
        <div className="social-links">
        <MdEmail className="social-icon" onClick={()=>
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ravikiranrcta@gmail.com&su=Let's%20Build%20a%20Website&body=Hi%20Ravi%2C%0AI%20like%20your%20work!")
          }/>
          <FaInstagram className="social-icon" onClick={()=>window.open("https://www.instagram.com/____mr_____nayaka______/")}/>
          <FaPhone className="social-icon" onClick={() => window.open("tel:+918296996668")}/>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default DeveloperInfo;
