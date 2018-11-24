import React from "react";

const Header = () => {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Bit People</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">About</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    );
}

export { Header };