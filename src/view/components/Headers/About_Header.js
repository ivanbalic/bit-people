import React from 'react';
import { Link } from 'react-router-dom';

const About_Header = () => {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to='/' className="brand-logo center">Bit People</Link>
        </div>
      </nav>
    );
}

export { About_Header };