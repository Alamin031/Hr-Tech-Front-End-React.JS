// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                <a className="dropdown-item" href="/services/web">Web Development</a>
                <a className="dropdown-item" href="/services/mobile">Mobile App Development</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item dropdown-toggle" href="#" id="designDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Design Services
                </a>
                <div className="dropdown-menu" aria-labelledby="designDropdown">
                  <a className="dropdown-item" href="/services/design/logo">Logo Design</a>
                  <a className="dropdown-item" href="/services/design/graphics">Graphic Design</a>
                  <a className="dropdown-item" href="/services/design/ui">UI/UX Design</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
