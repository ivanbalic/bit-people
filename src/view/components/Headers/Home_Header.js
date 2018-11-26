import React from 'react';
import { Link } from 'react-router-dom';

const Home_Header = ({ loadUsers, onViewModeClick, isGrid }) => {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to='/' className="brand-logo center">Bit People</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/about'>About</Link></li>
            <li onClick={loadUsers} ><a><i className="material-icons">refresh</i></a></li>
            <li onClick={onViewModeClick} >
              <a>
                <i className="material-icons">{
                  isGrid ? 
                  "view_list" :
                  "view_module"
                } 
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export { Home_Header };