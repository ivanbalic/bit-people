import React from "react";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo center">
          Bit People
        </Link>
      </div>
    </nav>
  );
};

export { AboutHeader };
