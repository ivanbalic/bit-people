import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = ({ onViewModeClick, isGrid, handleRefresh }) => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <div className="row">
          <Link to="/" className="brand-logo col s6 right">
            <i className="material-icons">people</i>Bit People
          </Link>
          <div className="col s6 right">
            <ul className="right">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li onClick={handleRefresh}>
                <a href="#!">
                  <i className="material-icons">refresh</i>
                </a>
              </li>
              <li onClick={onViewModeClick}>
                <a href="#!">
                  <i className="material-icons">
                    {isGrid ? "view_list" : "view_module"}
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { HomeHeader };
