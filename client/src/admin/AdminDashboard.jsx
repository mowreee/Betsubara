import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [userCount, setUserCount] = useState(null);
  const [menuCount, setMenuCount] = useState(null);

  useEffect(() => {
    // Fetch users
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUserCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setUserCount(0));
    // Fetch menu items
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuCount(Array.isArray(data) ? data.length : 0))
      .catch(() => setMenuCount(0));
  }, []);

  return (
    <div className="min-h-screen bg-[#fff6fa] flex flex-col items-center py-16 px-4 font-['Poppins'] text-[#a85e7c]">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full mb-12">
          <Link
            to="/admin/manage-menu"
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-[#ffe4ec] transition w-80"
          >
            <span className="text-2xl font-semibold mb-2">Manage Menu</span>
            <span className="text-sm text-gray-500">
              Add, edit, or remove menu items
            </span>
          </Link>
          <Link
            to="/admin/manage-users"
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-[#ffe4ec] transition w-80"
          >
            <span className="text-2xl font-semibold mb-2">Manage Users</span>
            <span className="text-sm text-gray-500">
              View or edit user accounts
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-stretch mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center w-full md:w-1/2 hover:bg-[#ffe4ec] transition border-2 border-[#ffe4ec]">
            <span className="text-2xl font-semibold mb-2">Analytics</span>
            <span className="text-sm text-gray-500 mb-6">
              Overview of orders and users
            </span>
            <div className="flex flex-row gap-12 w-full justify-center mb-4">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#ffb6d5] mb-1">
                  {menuCount === null ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    menuCount
                  )}
                </span>
                <span className="text-base text-[#a85e7c]">
                  Total Menu Items
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#ffb6d5] mb-1">
                  {userCount === null ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    userCount
                  )}
                </span>
                <span className="text-base text-[#a85e7c]">Total Users</span>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              (Live analytics from database)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}