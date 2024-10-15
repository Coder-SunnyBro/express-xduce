// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css'
import logoUrl from '../assets/XduceLogo.png'

const Navbar = () => {
    let logoImage = logoUrl

  return (
    <>
    <nav className="navigation shadow-sm mb-1 p-2 bg-light-100">
      <div className="flex justify-between items-center">
        <div className=" w-[50%]">
        <img src={logoImage} alt="Logo" style={{ height: '3.75rem' }} />
        </div>
        <div className="w-[20%] mr-3 header3">
          <ul className="flex justify-between items-center  text-[#112f5c] text-blue-500 menuItem">
            <li className="">
              <a className="" href="#">HOME</a>
            </li>
            <li className="">
              <a className="" href="#">TEAM</a>
            </li>
            <li className="">
              <a className="" href="#">MY SITES</a>
            </li>
            <li className="">
              <a className="" href="#">EVENTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;