import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/betsubara-icon-squared.jpg";

function CartModal({ open, onClose, cartItems, onCheckout }) {
  const [items, setItems] = useState(cartItems);
  useEffect(() => { setItems(cartItems); }, [cartItems]);

  const handleMinus = (idx) => {
    const updated = items.map((item, i) =>
      i === idx ? { ...item, qty: Math.max(1, item.qty - 1) } : item
    );
    setItems(updated);
    // Update localStorage
    const cartCount = updated.reduce((sum, i) => sum + i.qty, 0);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    localStorage.setItem("cartCount", cartCount);
    window.dispatchEvent(new Event("storage"));
  };

  const subtotal = items.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
  return (
    open ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white dark:bg-[#3a2230] rounded-2xl shadow-2xl p-8 w-full max-w-md relative border-2 border-[#ffb6d5] animate-fade-in">
          <button
            className="absolute top-3 right-4 text-[#a85e7c] text-3xl font-bold hover:text-[#ffb6d5] focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-6 text-[#a85e7c] dark:text-[#ffe4ec] text-center drop-shadow">Your Cart</h2>
          {items.length === 0 ? (
            <div className="text-center text-[#a85e7c] mb-6">Your cart is empty.</div>
          ) : (
            <ul className="mb-6 divide-y divide-[#ffe4ec]">
              {items.map((item, idx) => (
                <li key={idx} className="py-3 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#a85e7c]">{item.name}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <button
                        className="bg-[#ffe4ec] text-[#a85e7c] rounded-full w-6 h-6 flex items-center justify-center font-bold border border-[#ffb6d5] hover:bg-[#ffb6d5] hover:text-white transition"
                        onClick={() => handleMinus(idx)}
                        aria-label="Decrease quantity"
                        disabled={item.qty <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">₱{item.price} x {item.qty}</span>
                    </div>
                  </div>
                  <div className="font-bold text-[#ffb6d5]">₱{item.price * item.qty}</div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between items-center mb-6 text-lg font-semibold">
            <span className="text-[#a85e7c]">Subtotal</span>
            <span className="text-[#ffb6d5]">₱{subtotal}</span>
          </div>
          <button
            className="w-full bg-[#ffb6d5] hover:bg-[#ffe4ec] text-[#a85e7c] font-semibold px-6 py-3 rounded-full shadow transition-all duration-200 border border-[#a85e7c] focus:outline-none focus:ring-2 focus:ring-[#a85e7c] focus:ring-opacity-50 text-lg mb-3"
            onClick={onCheckout}
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </button>
          <button
            className="w-full bg-red-200 hover:bg-red-300 text-[#a85e7c] font-semibold px-6 py-3 rounded-full shadow transition-all duration-200 border border-[#a85e7c] focus:outline-none focus:ring-2 focus:ring-[#a85e7c] focus:ring-opacity-50 text-lg"
            onClick={() => {
              localStorage.setItem("cartItems", JSON.stringify([]));
              localStorage.setItem("cartCount", "0");
              setItems([]);
              window.dispatchEvent(new Event("storage"));
            }}
            disabled={items.length === 0}
          >
            Reset Cart
          </button>
        </div>
      </div>
    ) : null
  );
}

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // burger menu state

  useEffect(() => {
    // Listen for cart updates from localStorage
    const handleStorage = () => {
      const count = parseInt(localStorage.getItem("cartCount")) || 0;
      setCartCount(count);
      const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setCartItems(items);
    };
    window.addEventListener("storage", handleStorage);
    handleStorage();
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleCartClick = (e) => {
    e.preventDefault();
    setCartModalOpen(true);
  };

  // Close mobile menu on route change or modal open
  useEffect(() => {
    if (cartModalOpen) setMobileMenuOpen(false);
  }, [cartModalOpen]);

  return (
    <>
      <nav className="w-full bg-[#ffe4ec]/80 shadow flex items-center justify-between px-4 sm:px-6 py-3 font-['Poppins'] border-b border-pink-200 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Betsubara Icon" className="w-10 h-10 md:w-12 md:h-12 select-none" />
        </div>
        {/* Burger icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span className={`block w-7 h-1 rounded bg-[#a85e7c] mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 rounded bg-[#a85e7c] mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 rounded bg-[#a85e7c] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
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
            <li className="relative">
              <a href="#cart" onClick={handleCartClick} className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a85e7c" className="w-6 h-6 inline-block align-middle">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.683 18h4.634a2.25 2.25 0 002.183-2.25V6.75a2.25 2.25 0 00-2.183-2.25H6.75m0 0L5.106 4.273A1.125 1.125 0 004.5 3.75H2.25" />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-[#ffb6d5] text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg animate-bounce z-10">
                    {cartCount}
                  </span>
                )}
              </a>
            </li>
          </ul>
          <Link to="/login" className="px-4 py-2 rounded-full bg-[#ffb6d5] text-white font-semibold shadow hover:bg-[#f7a8c7] transition-colors duration-200">
            Login
          </Link>
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[60px] z-40 bg-white/95 dark:bg-[#3a2230] flex flex-col items-center gap-6 py-8 px-4 sm:px-6 md:hidden animate-fade-in border-t border-pink-200 shadow-lg min-h-[calc(100vh-60px)] w-full left-0">
            <ul className="flex flex-col gap-6 text-lg font-medium w-full items-center">
              <li>
                <Link to="/" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
              </li>
              <li className="relative w-full flex justify-center">
                <a href="#cart" onClick={(e) => { handleCartClick(e); setMobileMenuOpen(false); }} className="hover:text-[#ffb6d5] text-[#a85e7c] transition-colors duration-200 flex items-center gap-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a85e7c" className="w-6 h-6 inline-block align-middle">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.683 18h4.634a2.25 2.25 0 002.183-2.25V6.75a2.25 2.25 0 00-2.183-2.25H6.75m0 0L5.106 4.273A1.125 1.125 0 004.5 3.75H2.25" />
                  </svg>
                  Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-[#ffb6d5] text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg animate-bounce z-10">
                      {cartCount}
                    </span>
                  )}
                </a>
              </li>
              <li>
              </li>
            </ul>
            <Link to="/login" className="w-full text-center px-4 py-2 rounded-full bg-[#ffb6d5] text-white font-semibold shadow hover:bg-[#f7a8c7] transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
              Login
            </Link>
          </div>
        )}
      </nav>
      <CartModal open={cartModalOpen} onClose={() => setCartModalOpen(false)} cartItems={cartItems} />
    </>
  );
}
