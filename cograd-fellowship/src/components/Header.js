import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/cograd-blue-logo.webp";
import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>

      <div className="logo">
        <a href="/">
          <img src={logo} alt="Cograd Logo" />
        </a>
      </div>
      <div className="button-container">
        <a href="/contact-us" className="contact-button">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;