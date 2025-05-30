import React from "react";

export default function MenuCard({ item }) {
  const handleOrder = () => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const idx = items.findIndex((i) => i._id === item._id);
    if (idx > -1) {
      items[idx].qty += 1;
    } else {
      items.push({ ...item, qty: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(items));
    const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
    localStorage.setItem("cartCount", cartCount);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="bg-white dark:bg-[#3a2230] rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-6 transition-colors duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={item.image} alt={item.name} className="w-full aspect-square object-cover rounded-xl mb-4 shadow-md" />
      <h3 className="text-2xl font-bold mb-2 text-[#a85e7c] dark:text-[#ffe4ec] text-center tracking-wide drop-shadow-sm">{item.name}</h3>
      <p className="text-base text-gray-700 dark:text-gray-200 mb-3 text-center px-2">{item.description}</p>
      <div className="text-xl font-extrabold text-[#ffb6d5] dark:text-[#ffe4ec] text-center mb-4">₱{item.price}</div>
      <button
        className="mt-auto bg-[#ffb6d5] hover:bg-[#ffe4ec] text-[#a85e7c] font-semibold px-6 py-2 rounded-full shadow transition-all duration-200 border border-[#a85e7c] focus:outline-none focus:ring-2 focus:ring-[#a85e7c] focus:ring-opacity-50"
        onClick={handleOrder}
      >
        Order
      </button>
    </div>
  );
}
