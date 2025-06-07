import React, { useState, useEffect, useRef } from "react";
import betsubara1st from "../assets/betsubara-1st.jpg";
import betsubara2nd from "../assets/betsubara-2nd.jpg";
import betsubara3rd from "../assets/betsubara-3rd.jpg";
import takoyakiImg from "../assets/takoyaki.jpg";
import torigaraRamenImg from "../assets/torigara-shoyu-ramen.jpg";
import hakataRamenImg from "../assets/hakata-ramen.jpg";
import betsubaraOur from "../assets/betsubara-our.jpg";
import betsubaraPhilosophy from "../assets/betsubara-philosophy.jpg";
import taiyaki from "../assets/taiyaki.jpg";
import yakisoba from "../assets/betsubara-yakisoba.jpg";
import spicyMisoRamen from "../assets/spicy-miso-ramen.jpg";
import { Link } from "react-router-dom";

const featuredMenu = [
	{
		name: "Takoyaki",
		description:
			"A beloved Japanese street food, takoyaki are golden, crispy batter balls filled with tender octopus, green onions, and pickled ginger, then topped with savory sauce, creamy mayo, bonito flakes, and seaweed powder.",
		price: "₱850",
		image: takoyakiImg,
	},
	{
		name: "Hakata Ramen",
		description:
			"A rich and flavorful dish from Fukuoka, Hakata Ramen features creamy tonkotsu (pork bone) broth, thin straight noodles, tender chashu pork, and classic toppings like green onions, pickled ginger, and sesame seeds.",
		price: "₱295",
		image: hakataRamenImg,
	},
	{
		name: "Torigara Shoyu Ramen",
		description: "A comforting classic, Torigara Shoyu Ramen features a clear chicken bone broth seasoned with soy sauce, served with curly noodles, tender slices of chicken, bamboo shoots, nori, and a soft-boiled egg.",
		price: "₱320",
		image: torigaraRamenImg,
	},
	{
		name: "Taiyaki",
		description: "A delightful Japanese treat, Taiyaki is a fish-shaped cake with a crispy outer shell and a warm, fluffy interior, traditionally filled with sweet red bean paste, custard, chocolate, or cheese.",
		price: "₱45 each",
		image: taiyaki,
	},
	{
		name: "Spicy Miso Ramen",
		description: "A bold and savory favorite, Spicy Miso Ramen features a rich miso-based broth infused with chili oil and spices, served with chewy noodles, ground pork, corn, green onions, and a soft-boiled egg.",
		price: "₱275",
		image: spicyMisoRamen,
	},
	{
		name: "Yakisoba",
		description: "A savory stir-fried noodle dish, Yakisoba features chewy wheat noodles cooked with a medley of vegetables and your choice of protein, all tossed in a tangy sauce.",
		price: "₱199",
		image: yakisoba,
	},
	{
		name: "Tantanmen",
		description: "A spicy noodle dish, Tantanmen features a rich sesame and chili oil broth, served with chewy noodles, ground pork, bok choy, and a soft-boiled egg.",
		price: "₱295",
		image: yakisoba,
	},
	{
		name: "Mayu Ramen",
		description: "Mayu Ramen is a flavorful ramen dish made with rich tonkotsu broth and topped with mayu—aromatic black garlic oil—adding a deep, smoky flavor, along with tender pork, noodles, green onions, and a soft-boiled egg.",
		price: "₱275",
		image: yakisoba,
	},
	{
		name: "Salmon Aburi Roll",
		description: "Mouthwatering salmon belly is lightly seared and served on a bed of sushi rice, topped with a drizzle of spicy mayo and a sprinkle of sesame seeds.",
		price: "₱350(/8 pcs)",
		image: yakisoba,
	},
	{
		name: "Bento Box",
		description: "Bento is a traditional Japanese single-portion meal box, artfully arranged with a balanced variety of dishes such as rice, grilled meat or fish, pickled vegetables, and side items, perfect for a convenient and satisfying meal.",
		price: "₱800",
		image: yakisoba,
	},
];

const ratings = [
	{
		stars: 5,
		food: "Takoyaki",
		foodImage: takoyakiImg,
		comment: "Crispy outside, creamy inside! The best takoyaki I've had outside Japan.",
	},
	{
		stars: 4,
		food: "Hakata Ramen",
		foodImage: hakataRamenImg,
		comment: "Rich, flavorful broth and perfectly cooked noodles. A must-try for ramen lovers.",
	},
	{
		stars: 5,
		food: "Torigara Shoyu Ramen",
		foodImage: torigaraRamenImg,
		comment: "Light yet deeply satisfying. The chicken is so tender!",
	},
	{
		stars: 4,
		food: "Taiyaki",
		foodImage: taiyaki,
		comment: "Warm, sweet, and comforting. The red bean filling is delicious.",
	},
	{
		stars: 5,
		food: "Spicy Miso Ramen",
		foodImage: spicyMisoRamen,
		comment: "Perfect level of spice and umami. Warms you up instantly!",
	},
	{
		stars: 4,
		food: "Yakisoba",
		foodImage: yakisoba,
		comment: "Savory, saucy, and packed with veggies. Great comfort food.",
	},
];

function useSectionReveal() {
	const ref = useRef();
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new window.IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ threshold: 0.15 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return [ref, visible];
}

function AnimatedBetsubara() {
	const [showJP, setShowJP] = React.useState(false);
	React.useEffect(() => {
		const interval = setInterval(() => setShowJP((v) => !v), 2000);
		return () => clearInterval(interval);
	}, []);
	return (
		<h1 className="text-5xl md:text-6xl font-bold tracking-wider text-black mb-2 drop-shadow transition-all duration-700 min-h-[1.2em] flex flex-col md:flex-row md:items-end gap-1 md:gap-3">
			{showJP ? (
				<span className="transition-opacity duration-700 flex flex-col md:flex-row md:items-end gap-1 md:gap-3">
					<span>べつばら</span>
					<span className="text-2xl md:text-3xl text-[#a85e7c] ml-1 md:ml-2">カフェ</span>
				</span>
			) : (
				<span className="transition-opacity duration-700 flex flex-col md:flex-row md:items-end gap-1 md:gap-3">
					<span>Betsubara</span>
					<span className="text-2xl md:text-3xl text-[#a85e7c] ml-1 md:ml-2">Café</span>
				</span>
			)}
		</h1>
	);
}

export default function LandingPage() {
	const [currentRating, setCurrentRating] = useState(0);
	React.useEffect(() => {
		const timer = setInterval(
			() => setCurrentRating((r) => (r + 1) % ratings.length),
			3500
		);
		return () => clearInterval(timer);
	}, []);

	const [welcomeRef, welcomeVisible] = useSectionReveal();
	const [favMenuRef, favMenuVisible] = useSectionReveal();
	const [storyRef, storyVisible] = useSectionReveal();
	const [menuRef, menuVisible] = useSectionReveal();
	const [locationRef, locationVisible] = useSectionReveal();
	const [ratingsRef, ratingsVisible] = useSectionReveal();
	const [aboutRef, aboutVisible] = useSectionReveal();

	return (
		<div className="font-['Poppins'], font-sans bg-white text-black w-screen min-h-screen overflow-x-hidden">
			<section
				ref={welcomeRef}
				className={`w-screen min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-white relative overflow-hidden px-4 md:px-24 lg:px-32 xl:px-48 2xl:px-64 transition-all duration-700 ${welcomeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
			>
				<div className="hidden md:flex flex-row gap-8 h-[320px] justify-center items-center relative w-1/2 pr-10">
					<img
						src={betsubara1st}
						alt="Sakura Sushi Platter"
						className="w-[200px] h-[450px] object-cover shadow-lg animate-slide-down1"
						style={{
							animation:
								"slideDown1 1s cubic-bezier(.68,-0.55,.27,1.55) 0.2s both",
						}}
						width={140}
						height={320}
					/>
					<img
						src={betsubara2nd}
						alt="Wagyu Donburi"
						className="w-[200px] h-[450px] object-cover shadow-lg animate-slide-up"
						style={{
							animation:
								"slideUp 1s cubic-bezier(.68,-0.55,.27,1.55) 0.4s both",
						}}
						width={140}
						height={320}
					/>
					<img
						src={betsubara3rd}
						alt="Matcha Blossom Parfait"
						className="w-[200px] h-[450px] object-cover shadow-lg animate-slide-down2"
						style={{
							animation:
								"slideDown2 1s cubic-bezier(.68,-0.55,.27,1.55) 0.6s both",
						}}
						width={140}
						height={320}
					/>
				</div>

				<div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 md:pl-16">
					<AnimatedBetsubara />
					<p className="text-xl md:text-2xl text-gray-700 mb-6">
						"We bring Japan closer to your hearts "
					</p>
					<Link
						to="/menu"
						className="inline-block mt-2 px-8 py-3 rounded-full bg-[#ffb6d5] text-white font-semibold text-lg shadow-md hover:bg-[#ff8fcf] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ffb6d5] focus:ring-offset-2"
					>
						View Our Menu
					</Link>
				</div>
			</section>
			<section
				ref={favMenuRef}
				className={`w-screen py-16 px-2 sm:px-4 bg-white flex flex-col items-center transition-all duration-700 ${favMenuVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
			>
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
					Our Favorite Menu
				</h2>
				<p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
					Discover the dishes our guests and chefs love the most. Each plate is
					crafted with passion and the finest ingredients, bringing a taste of Japan
					to your table.
				</p>
				<div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch">
					{featuredMenu.slice(0, 3).map((item) => (
						<div
							key={item.name}
							className="flex-1 flex flex-col items-center bg-white shadow-lg"
						>
							<img
								src={item.image}
								alt={item.name}
								className="w-full h-80 md:h-80 object-cover mb-4"
								style={{ minWidth: "450px", maxWidth: "150%" }}
							/>
							<div className="px-4 pb-6 w-full">
								<h3 className="text-2xl font-bold text-[#ffb6d5] mb-2 text-center">
									{item.name}
								</h3>
								<p className="text-gray-700 text-base text-center">
									{item.description}
								</p>
								<div className="text-lg font-bold text-[#ffb6d5] text-center mt-2">
									{item.price}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section
				ref={storyRef}
				className={`w-screen py-25 px-2 sm:px-4 bg-white/90 flex flex-col md:flex-row items-center md:items-start min-h-[500px] transition-all duration-700 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
				id="story"
			>
				<div className="flex-1 flex flex-col justify-center mb-8 md:mb-0 md:mr-8 items-center md:items-start">
					<h2 className="border-l-4 border-black pl-2 text-3xl sm:text-4xl font-normal mb-4 w-full text-left md:text-left">
						Our Philosophy
					</h2>
					<h3 className="text-lg sm:text-xl font-bold mb-2 w-full text-left md:text-left">
						Beyond The Boundaries of Taste
					</h3>
					<p className="max-w-2xl text-base sm:text-xl md:text-2xl mx-auto md:mx-0 text-left">
						At Betsubara Café, we believe that every meal is a moment to nourish not only the body but also the soul. Inspired by the Japanese concept of "betsubara"—the idea of always having room for something sweet—we strive to create an experience where comfort, tradition, and creativity come together. From thoughtfully prepared dishes to warm, welcoming service, our philosophy is rooted in sharing joy through authentic flavors, mindful presentation, and a space where everyone feels at home.
					</p>
				</div>
				<div className="flex-1 flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center w-full md:w-auto">
					<img
						src={betsubaraPhilosophy}
						alt="Japanese Restaurant Philosophy"
						className="w-full max-w-xs sm:max-w-sm md:w-[420px] h-60 sm:h-80 md:h-[600px] object-cover shadow-xl"
						style={{ borderRadius: 0 }}
					/>
					<img
						src={betsubaraOur}
						alt="Japanese Restaurant Our Story"
						className="w-full max-w-xs sm:max-w-xs md:w-[300px] h-60 sm:h-80 md:h-[600px] object-cover shadow-xl"
						style={{ borderRadius: 0 }}
					/>
				</div>
			</section>

			{/* Featured Menu Items */}
			<section
				ref={menuRef}
				className={`w-screen bg-black/5 text-black py-12 px-4 flex flex-col items-center transition-all duration-700 ${menuVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
				id="menu"
			>
				<h2 className="border-l-4 border-black-300 pl-2 text-3xl md:text-4xl font-normal mb-8 md:mb-10 w-full text-left">
					Featured Menu
				</h2>
				<div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-12 w-full max-w-6xl mx-auto">
					{/* Left column */}
					<div className="flex-1 flex flex-col gap-6 md:gap-10 items-end md:items-end">
						{featuredMenu.slice(0, 5).map((item, idx) => (
							<div key={item.name} className="w-full max-w-md bg-white/80 rounded-xl shadow-md p-4 md:p-6 mb-2 md:mb-0">
								<div className="flex flex-col sm:flex-row items-end sm:items-center justify-between w-full gap-2">
									<span className="text-2xl md:text-3xl font-bold text-black text-right w-full sm:w-2/3">
										{item.name}
									</span>
									<span className="hidden sm:block flex-1 border-b border-gray-300 mx-4"></span>
									<span className="text-xl md:text-2xl font-bold text-[#ffb6d5] whitespace-nowrap">
										{item.price}
									</span>
								</div>
								<p className="text-base md:text-lg text-gray-700 mt-2 text-right w-full">
									{item.description}
								</p>
							</div>
						))}
					</div>
					{/* Right column */}
					<div className="flex-1 flex flex-col gap-6 md:gap-10 items-start md:items-start">
						{featuredMenu.slice(5, 10).map((item, idx) => (
							<div key={item.name} className="w-full max-w-md bg-white/80 rounded-xl shadow-md p-4 md:p-6 mb-2 md:mb-0">
								<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2">
									<span className="text-2xl md:text-3xl font-bold text-black w-full sm:w-2/3">
										{item.name}
									</span>
									<span className="hidden sm:block flex-1 border-b border-gray-300 mx-4"></span>
									<span className="text-xl md:text-2xl font-bold text-[#ffb6d5] whitespace-nowrap">
										{item.price}
									</span>
								</div>
								<p className="text-base md:text-lg text-gray-700 mt-2 w-full">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				ref={locationRef}
				className={`w-screen py-16 sm:py-30 px-2 sm:px-4 bg-white/90 flex justify-center items-center transition-all duration-700 ${locationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
				id="location"
			>
				<div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden scale-100 md:scale-105">
					<div className="flex-1 p-4 sm:p-8 flex flex-col justify-center">
						<h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
							Visit Our Location
						</h2>
						<p className="text-base sm:text-lg text-gray-700 mb-4">
							Betusbara is a Japanese-themed restaurant offering an authentic dining
							experience with traditional flavors, elegant décor, and a serene ambiance
							inspired by Japan’s rich culinary heritage.
						</p>
						<div className="mb-4">
							<div className="font-bold text-gray-900 mb-1">Address:</div>
							<div className="text-gray-700 text-sm sm:text-base">
								Bintawan Road, Poblacion South, Solano, Nueva Vizcaya, 3700
							</div>
						</div>
						<div className="mb-4">
							<div className="font-bold text-gray-900 mb-1">Hours:</div>
							<div className="text-gray-700 text-sm sm:text-base">Always Open from 11 am to 8 pm</div>
						</div>
					</div>

					<div className="flex-1 min-h-[200px] sm:min-h-[300px] flex items-center justify-center bg-gray-50">
						<iframe
							title="Betsubara Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1582960192236!2d121.17645127329365!3d16.51810422726861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339041fc16284dad%3A0x7c61943a2e131fb0!2sBetsubara%20Cafe!5e0!3m2!1sen!2sph!4v1748448673553!5m2!1sen!2sph"
							width="100%"
							height="220"
							className="border-0 w-full h-full min-h-[180px] sm:min-h-[250px] max-w-full rounded-none"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</section>

			{/* Ratings */}
			<section
				ref={ratingsRef}
				className={`w-screen bg-[#ffe4ec] text-black py-12 px-2 sm:px-4 flex flex-col items-center transition-all duration-700 ${ratingsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
					}`}
				id="ratings"
			>
				<div className="w-full max-w-5xl mx-auto">
					<h2 className="border-l-4 border-black pl-2 text-3xl sm:text-4xl font-normal mb-4 w-full text-left md:text-left">
						Customer Ratings
					</h2>
					<p className="text-base sm:text-lg text-gray-600 mb-8 w-full max-w-3xl text-left md:text-left">
						See what our customers are saying about their favorite dishes! Honest reviews and real experiences help you choose your next meal with confidence.
					</p>
				</div>
				<div className="flex justify-center w-full">
					<div
						key={currentRating}
						className="bg-white/90 rounded-2xl shadow-2xl w-full max-w-5xl h-auto min-h-[320px] sm:h-[420px] flex flex-col md:flex-row items-center overflow-hidden mx-2 sm:mx-4 transition-opacity duration-700"
						style={{ opacity: 1 }}
					>
						<img
							src={ratings[currentRating].foodImage}
							alt={ratings[currentRating].food}
							className="w-full md:w-1/2 h-48 sm:h-60 md:h-full object-cover"
							style={{ minHeight: 160, maxHeight: 420 }}
						/>
						<div className="flex flex-col justify-center flex-1 w-full p-4 sm:p-8">
							<div className="font-bold mb-2 text-[#ffb6d5] text-xl sm:text-2xl md:text-3xl">
								{ratings[currentRating].food}
							</div>
							<div className="mb-2 text-[#ffb6d5] text-lg sm:text-xl flex">
								{Array.from({ length: 5 }).map((_, i) => (
									<span key={i}>
										{i < ratings[currentRating].stars ? (
											<span className="text-[#ffb6d5]">★</span>
										) : (
											<span className="text-gray-300">☆</span>
										)}
									</span>
								))}
							</div>
							<div className="italic text-base sm:text-lg text-gray-700">
								{ratings[currentRating].comment}
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center gap-2 mt-4">
					{ratings.map((_, idx) => (
						<button
							key={idx}
							onClick={() => setCurrentRating(idx)}
							className={`w-3 h-3 rounded-full ${idx === currentRating ? "bg-[#ffb6d5]" : "bg-gray-300"
								}`}
							aria-label={`Go to rating ${idx + 1}`}
						/>
					))}
				</div>
			</section>

			<footer className="w-screen bg-black text-white text-center py-6 text-sm sm:text-base tracking-wide bg-opacity-90 overflow-x-hidden">
				© {new Date().getFullYear()} Betsubara | Crafted with{" "}
				<span className="text-pink-300">❀</span> in Nueva Vizcaya || IPT Final Project Delos Santos
			</footer>
		</div>
	);
}

