import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://betsubara-backend.vercel.app/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load menu items.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#fff6fa] dark:bg-[#2a1a1f] py-12 px-4 font-['Poppins'] text-[#a85e7c] dark:text-[#ffe4ec] flex flex-col items-center">
      <h1 className="text-4xl font-normal mb-4 text-center">Our Menu</h1>
      <p className="text-4x1 text-[#fff6fa] mb-10 text-center max-w-2xl mx-auto">
        Explore our delicious Japanese-inspired dishes, crafted with fresh
        ingredients and a touch of love. There’s something for every craving—enjoy!
      </p>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mx-auto">
          {menuItems.map((item) => (
            <MenuCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
