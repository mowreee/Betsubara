import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/90 shadow flex items-center justify-between px-6 py-3 font-['Noto Sans JP'] border-b border-pink-200">
      {/* Left: Logo/Brand */}
      <div className="flex items-center gap-2">
        <span className="text-2xl md:text-3xl font-extrabold text-pink-500 tracking-widest select-none">❀</span>
        <span className="text-xl md:text-2xl font-bold text-black tracking-widest select-none">Betsubara</span>
      </div>
      {/* Center: Nav Links */}
      <div className="flex-1 flex justify-center">
        <ul className="flex gap-8 text-lg md:text-xl font-medium">
          <li>
            <Link to="/" className="hover:text-pink-500 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-500 transition-colors duration-200">About Us</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-pink-500 transition-colors duration-200">Menu</Link>
          </li>
        </ul>
      </div>
      {/* Right: Login */}
      <div>
        <Link to="/login" className="px-4 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition-colors duration-200">
          Login
        </Link>
      </div>
    </nav>
  );
}
