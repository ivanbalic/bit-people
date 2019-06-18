import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomeHeader = ({ onViewModeClick, isGrid, handleRefresh }) => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo left">
            <i className="material-icons">people</i>Bit People
          </Link>
          <a
            href="#!"
            data-target="mobile-demo"
            className="sidenav-trigger right"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
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
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/" className="brand-logo">
            <i className="material-icons">people</i>Bit People
          </Link>
        </li>
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
    </Fragment>
  );
};

export { HomeHeader };
