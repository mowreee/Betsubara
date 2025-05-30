import React, { useEffect, useState } from "react";
import betsubaraOur from "../assets/betsubara-our.jpg";
import betsubaraPhilosophy from "../assets/betsubara-philosophy.jpg";
import betsubaraWidth from "../assets/betsubara-width.jpg";
import betsuPhilo from "../assets/betsubara-philo.jpg";
import betsubaraAbout from "../assets/betsubara-aboutus.jpg"; 

export default function About() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <div className={`min-h-screen bg-[#fff6fa] flex flex-col font-['Poppins'] text-[#a85e7c] transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ minHeight: '100vh' }}>
      <div className="flex-1 w-full flex flex-col items-center py-12 px-4 transition-all duration-700">
        <div className="w-full flex flex-col md:flex-row gap-10 items-center mb-12 max-w-none transition-all duration-700">
          <img src={betsubaraAbout} alt="Betsubara Our Story" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg mb-6 md:mb-0" />
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-4xl font-normal mb-4 text-left">About Betsubara</h1>
            <p className="text-lg md:text-xl mb-4 text-left">
              Betsubara Café is a Japanese-inspired restaurant dedicated to bringing the warmth and comfort of Japanese home-cooked meals to the heart of Nueva Vizcaya. Our name, "Betsubara," comes from the Japanese word for "second stomach"—the delightful feeling that there's always room for something delicious!
            </p>
            <p className="text-base md:text-lg text-left">
              Founded by a team passionate about authentic flavors and heartfelt hospitality, Betsubara offers a menu of classic favorites and creative specials, all made with fresh ingredients and a touch of love. Whether you're craving ramen, takoyaki, or a sweet treat, we invite you to relax, enjoy, and make every meal a new beginning.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 items-center max-w-none transition-all duration-700">
          <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl font-normal mb-2 text-left">Our Philosophy</h2>
            <p className="text-base md:text-lg text-left">
              At Betsubara, we believe food is more than just nourishment—it's a way to connect, celebrate, and create memories. We strive to provide a welcoming space where everyone feels at home, and every dish is crafted to delight your senses and your spirit.
            </p>
          </div>
          <img src={betsuPhilo} alt="Betsubara Philosophy" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg order-1 md:order-2 mb-6 md:mb-0" />
        </div>
        <div className="w-full flex flex-col items-center mt-12 transition-all duration-700">
          <div
            className="w-full rounded-xl shadow-lg overflow-hidden mb-12 flex flex-col md:flex-row items-center justify-between px-8 py-6 transition-all duration-700"
            style={{
              backgroundImage: `url(${betsubaraWidth})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              border: '2px solid #ffe4ec',
              maxWidth: '100vw',
            }}
          >
            <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#a85e7c] mb-2">Connect with Us</h2>
              <div className="flex gap-4 mb-2">
                <a href="https://www.facebook.com/betsubaracafe" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#fff6fa]/80 rounded-full p-3 shadow hover:bg-[#ffb6d5]/80 transition">
                  <svg className="w-6 h-6 text-[#a85e7c]" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
                </a>
                <a href="https://www.instagram.com/betsubaracafe/?fbclid=IwY2xjawKmUKdleHRuA2FlbQIxMABicmlkETEwUm1kT3ZQcElzc29nb0Y0AR49vDNJ3o6piaFp1fj-aynA8UbP5x5DNSnrEyUVPk5Lhki73_yon2X1Z3Il6A_aem_StHimb5B8m99KoTVYNRrzg#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#fff6fa]/80 rounded-full p-3 shadow hover:bg-[#ffb6d5]/80 transition">
                  <svg className="w-6 h-6 text-[#a85e7c]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25 6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75 4.75 4.75 0 0 0-4.75-4.75zm6.25 1.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
                </a>
              </div>
              <div className="mt-4">
                <div className="font-semibold text-lg">Opening Hours</div>
                <div>Mon-Fri: 11:00 AM - 8:00 PM</div>
                <div>Sat-Sun: 11:00 AM - 8:00 PM</div>
                <div className="mt-2 text-sm">Solano, Nueva Vizcaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full bg-black text-white text-center py-6 text-base tracking-wide bg-opacity-90 mt-auto transition-all duration-700">
        © {new Date().getFullYear()} Betsubara | Crafted with{" "}
        <span className="text-pink-300">❀</span> in Nueva Vizcaya || IPT Final Project Delos Santos
      </footer>
    </div>
  );
}
