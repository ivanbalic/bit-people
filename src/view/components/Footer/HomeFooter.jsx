import React from "react";
import "./Footer.css";

const HomeFooter = () => {
  const lastRefresh = localStorage.getItem("relodeDate");
  const timeSince = date => {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };

  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          ©{new Date().getFullYear()} Copyright BitStudent
          <a className="grey-text text-lighten-4 right" href="#!">
            Last update: {timeSince(new Date(lastRefresh))} ago
          </a>
        </div>
      </div>
    </footer>
  );
};

export { HomeFooter };
