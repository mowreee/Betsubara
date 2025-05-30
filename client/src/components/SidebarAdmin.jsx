import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const adminLinks = [
  { to: "/admin", label: "Admin Dashboard" },
  { to: "/admin/manage-menu", label: "Manage Menu"},
  { to: "/admin/manage-users", label: "Manage Users"},
];

export default function SidebarAdmin() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar toggle button */}
      <button
        className="fixed top-6 left-3 z-50 md:hidden bg-[#ffb6d5] text-white p-2 rounded-full shadow-lg focus:outline-none hover:bg-[#a85e7c] transition-colors duration-200"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {/* Sidebar */}
      <aside
        className={`bg-white dark:bg-[#3a2230] shadow-lg h-full w-64 md:w-64 flex flex-col py-8 px-4 fixed md:static top-0 left-0 z-40 transition-transform duration-300 transform
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 w-4/5 max-w-xs md:max-w-none md:h-screen min-h-screen md:min-h-0`}
        style={{ boxShadow: open ? '2px 0 16px #ffb6d5' : undefined }}
      >
        <div className="mb-8 text-center">
          <span className="text-2xl font-bold text-[#a85e7c] dark:text-[#ffe4ec]">Admin Panel</span>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          {adminLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200
                ${location.pathname === link.to
                  ? "bg-[#ffb6d5] text-white dark:bg-[#a85e7c] dark:text-[#ffe4ec]"
                  : "text-[#a85e7c] hover:bg-[#ffe4ec] dark:text-[#ffe4ec] dark:hover:bg-[#a85e7c]"}
                text-base md:text-lg`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="mt-8 w-full px-4 py-2 rounded bg-[#ffb6d5] text-white font-semibold shadow hover:bg-[#a85e7c] transition-colors duration-200 text-base md:text-lg"
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </aside>
    </>
  );
}
