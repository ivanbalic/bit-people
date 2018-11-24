import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
            ©{new Date().getFullYear} Copyright BitStudent
            </div>
          </div>
        </footer>
    );
}

export { Footer };