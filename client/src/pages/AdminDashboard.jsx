import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#fff6fa] flex flex-col items-center py-16 px-4 font-['Poppins'] text-[#a85e7c]">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <Link
          to="/admin/manage-menu"
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-[#ffe4ec] transition"
        >
          <span className="text-2xl font-semibold mb-2">Manage Menu</span>
          <span className="text-sm text-gray-500">
            Add, edit, or remove menu items
          </span>
        </Link>
        <Link
          to="/admin/manage-users"
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-[#ffe4ec] transition"
        >
          <span className="text-2xl font-semibold mb-2">Manage Users</span>
          <span className="text-sm text-gray-500">
            View or edit user accounts
          </span>
        </Link>
        <Link
          to="/admin/upload-dish-photo"
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:bg-[#ffe4ec] transition"
        >
          <span className="text-2xl font-semibold mb-2">Upload Dish Photo</span>
          <span className="text-sm text-gray-500">Add new dish images</span>
        </Link>
      </div>
    </div>
  );
}