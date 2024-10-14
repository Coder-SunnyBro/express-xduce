// eslint-disable-next-line no-unused-vars
import React from 'react';
import logoUrl from '../assets/XduceLogo.png'

const Navbar = () => {
    let logoImage = logoUrl

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-full h-full">
      <div className="container-fluid d-flex justify-content-between align-items-center mx-3">
        <div className="navbar-brand">
        <img src={logoImage} alt="Logo" style={{ height: '3.75rem' }} />
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto fs-3">
            <li className="nav-item">
              <a className="nav-link text-primary fw-bolder" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary fw-bolder" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary fw-bolder" href="#">My Sites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary fw-bolder" href="#">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;