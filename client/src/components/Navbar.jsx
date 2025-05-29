import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/betsubara-icon-squared.jpg";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#ffe4ec]/80 shadow flex items-center justify-between px-6 py-3 font-['Noto Sans JP'] border-b border-pink-200 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Betsubara Icon" className="w-10 h-10 md:w-12 md:h-12 select-none" />
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4 md:gap-8 text-lg md:text-xl font-medium">
          <li>
            <Link to="/" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200">Menu</Link>
          </li>
          <li className="mx-2" /> {/* Spacer */}
          <li>
            <Link to="/cart" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a85e7c" className="w-6 h-6 inline-block align-middle">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.683 18h4.634a2.25 2.25 0 002.183-2.25V6.75a2.25 2.25 0 00-2.183-2.25H6.75m0 0L5.106 4.273A1.125 1.125 0 004.5 3.75H2.25" />
              </svg>
              Cart
            </Link>
          </li>
        </ul>
        <Link to="/login" className="px-4 py-2 rounded-full bg-[#ffb6d5] text-white font-semibold shadow hover:bg-[#f7a8c7] transition-colors duration-200">
          Login
        </Link>
      </div>
    </nav>
  );
}
