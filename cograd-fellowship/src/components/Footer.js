import React from "react";
import '../styles/Footer.scss';
import logo from "../assets/logo-white.webp"; // Replace with the path to your logo
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import playstore from "../assets/svg/gplay.svg";

const Footer = () => {

  const handleButtonClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.learn.Cograd&pcampaignid=web_share",
      "_blank"
    );
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <img src={logo} alt="Cograd Logo" className="footer-logo" />
          <h3>Get In Touch</h3>
          <p>Phone: <a href="tel:+919220253001,">+91 9220253001</a></p>
          <p>Email: <a href="mailto:cograd.office@gmail.com">cograd.office@gmail.com</a></p>
          <p>Address: Cograd Tech Village, Sector-101, Noida Extension,<br/> Uttar Pradesh 201306</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <p><a href="/about-us">About us</a></p>
          <p><a href="https://teach.cograd.in/login">Medha AI</a></p>
          <p><a href="/services">Services</a></p>
          {/* <p><a href="/">Resources</a></p> */}
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><a href="/">Home</a></p>
          <p><a href="/privacy-policy" >Privacy policy</a></p> 
          <p><a href="/terms-conditions">Terms & conditions</a></p>
        </div>
        <div className="footer-section app-promotion">
          <p>
            Learn more about Cograd and learn seamlessly through our mobile app.
            Download Now!
          </p>
          <img src={playstore} className="app-download" alt="Download on Google Play" onClick={handleButtonClick} />
          <div className="social-media">
            <a href="https://www.facebook.com/cograd.in/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/cograd_in" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://in.linkedin.com/company/cograd" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/cograd.in" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/c/cograd" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div> 
        <p className="copyrightArea">© {new Date().getFullYear()} Supervision Educare Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;