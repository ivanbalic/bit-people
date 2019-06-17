import React from "react";
import "./Footer.css";

const AboutFooter = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          ©{new Date().getFullYear()} Copyright BitStudent
        </div>
      </div>
    </footer>
  );
};

export { AboutFooter };
