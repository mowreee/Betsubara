import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/menu")
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
      <h1 className="text-4xl font-normal mb-8 text-center">Our Menu</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {menuItems.map((item) => (
            <MenuCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
