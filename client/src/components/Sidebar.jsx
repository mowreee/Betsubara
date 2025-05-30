import React from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarLinks = [
  { to: "/admin", label: "Dashboard", icon: "🏠" },
  { to: "/admin/manage-menu", label: "Manage Menu", icon: "📋" },
  { to: "/admin/manage-users", label: "Manage Users", icon: "👥" },
  { to: "/admin/upload-dish-photo", label: "Upload Dish Photo", icon: "📷" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="bg-white dark:bg-[#3a2230] shadow-lg h-full w-64 md:w-64 flex flex-col py-8 px-4 fixed md:static top-0 left-0 z-40 transition-transform duration-300 transform md:translate-x-0 w-4/5 max-w-xs md:max-w-none md:h-screen min-h-screen md:min-h-0">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-[#a85e7c] dark:text-[#ffe4ec]">Admin Panel</h2>
      </div>
      <nav className="flex flex-col gap-2 flex-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200
              ${location.pathname === link.to
                ? "bg-[#ffb6d5] text-white dark:bg-[#a85e7c] dark:text-[#ffe4ec]"
                : "text-[#a85e7c] hover:bg-[#ffe4ec] dark:text-[#ffe4ec] dark:hover:bg-[#a85e7c]"}
              text-base md:text-lg`}
          >
            <span className="text-xl">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
