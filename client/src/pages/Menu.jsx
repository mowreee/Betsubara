import React from "react";
import MenuCard from "../components/MenuCard";
import takoyakiImg from "../assets/takoyaki.jpg";
import hakataRamenImg from "../assets/hakata-ramen.jpg";
import torigaraRamenImg from "../assets/torigara-shoyu-ramen.jpg";
import spicyMisoRamen from "../assets/spicy-miso-ramen.jpg";
import yakisoba from "../assets/betsubara-yakisoba.jpg";
import taiyaki from "../assets/taiyaki.jpg";

const menuItems = [
  {
    name: "Takoyaki",
    description: "Golden, crispy batter balls filled with octopus, green onions, and pickled ginger, topped with savory sauce, mayo, bonito flakes, and seaweed powder.",
    price: "₱850",
    image: takoyakiImg,
  },
  {
    name: "Hakata Ramen",
    description: "Creamy tonkotsu broth, thin noodles, chashu pork, green onions, pickled ginger, and sesame seeds.",
    price: "₱295",
    image: hakataRamenImg,
  },
  {
    name: "Torigara Shoyu Ramen",
    description: "Clear chicken bone broth with soy sauce, curly noodles, chicken, bamboo shoots, nori, and soft-boiled egg.",
    price: "₱320",
    image: torigaraRamenImg,
  },
  {
    name: "Spicy Miso Ramen",
    description: "Rich miso-based broth with chili oil, chewy noodles, ground pork, corn, green onions, and soft-boiled egg.",
    price: "₱275",
    image: spicyMisoRamen,
  },
  {
    name: "Yakisoba",
    description: "Stir-fried wheat noodles with vegetables and your choice of protein, tossed in a tangy sauce.",
    price: "₱199",
    image: yakisoba,
  },
  {
    name: "Taiyaki",
    description: "Fish-shaped cake with a crispy shell and fluffy interior, filled with sweet red bean paste, custard, chocolate, or cheese.",
    price: "₱45 each",
    image: taiyaki,
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#fff6fa] dark:bg-[#2a1a1f] py-12 px-4 font-['Poppins'] text-[#a85e7c] dark:text-[#ffe4ec] flex flex-col items-center">
      <h1 className="text-4xl font-normal mb-8 text-center">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {menuItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
        
      </div>
    </div>
    
  );
}
