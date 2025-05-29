import React from "react";

export default function MenuCard({ item }) {
  return (
    <div className="bg-white dark:bg-[#3a2230] rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-colors duration-300">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-[#a85e7c] dark:text-[#ffe4ec] text-center">{item.name}</h3>
      <p className="text-base text-gray-700 dark:text-gray-200 mb-2 text-center">{item.description}</p>
      <div className="text-lg font-bold text-[#ffb6d5] dark:text-[#ffe4ec] text-center">{item.price}</div>
    </div>
  );
}
