import React, { Fragment } from "react";

import { AboutFooter } from "../../components/Footer/AboutFooter";
import { AboutHeader } from "../../components/Headers/AboutHeader";

const About = () => {
  return (
    <Fragment>
      <AboutHeader />
      <main className="container">
        <h1>About BIT People</h1>
        <p>
          User is able to see a LIST/GRID of users when App is started and have
          possibility to switch users view between LIST and GRID using view
          change button in the header.
        </p>
        <p>
          Each list and grid item displays:
          <ul>
            <li>Avatar in circle</li>
            <li>Full name</li>
            <li>Email icon and hidden email address</li>
            <li>Birth date in DD.MM.YYYY format</li>
          </ul>
        </p>
        <p>
          When App is closed it saves previous state, users that are displayed
          last, view mode (GRID/LIST), and when it opens again the same state is
          shown as before.
        </p>
        <p>
          User have possibility to refresh users by clicking refresh button in
          header. App also keeps track of the time when laste user refresh is
          done and displays that info in the footer, as well as gender
          statistics wichi are displayed under the search bar.
        </p>
        <p>
          Source code on{" "}
          <a href="https://github.com/ivanbalic/bit-people" target="blank">
            GitHub
          </a>
        </p>
        <h2>Stack</h2>
        <p>
          <ul>
            <li>Language: HTML5, CSS3, JS(ES6+)</li>
            <li>Library: React, MaterializeCSS</li>
            <li>Package Manager: Yarn</li>
            <li>Deployment: GitHub Pages</li>
          </ul>
        </p>
      </main>
      <AboutFooter />
    </Fragment>
  );
};

export { About };
