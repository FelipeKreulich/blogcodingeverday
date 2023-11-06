import React from "react";
import logo from "../img/logoCE.png";

const Footer = () => {
  return (
    <footer className="animate__animated animate__backInUp">
      <img src={logo} alt="Coding Everday" />
      <span>Made with 💜 and <b>React.JS</b> - 2023</span>
    </footer>
  );
};

export default Footer;
