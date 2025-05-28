import React from "react";

const featuredMenu = [
	{
		name: "Sakura Sushi Platter",
		description:
			"A delightful assortment of fresh nigiri and maki, garnished with edible sakura petals.",
		price: "₱850",
		image:
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Wagyu Donburi",
		description:
			"Premium wagyu beef slices over fluffy Japanese rice, topped with a soft-boiled egg.",
		price: "₱1200",
		image:
			"https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Matcha Blossom Parfait",
		description: "Layers of matcha ice cream, mochi, and pink sakura jelly.",
		price: "₱350",
		image:
			"https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
	},
];

const ratings = [
	{ name: "Anna", comment: "A beautiful and authentic Japanese experience!", stars: 5, food: "Sakura Sushi Platter", foodImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
	{ name: "Kenji", comment: "The sushi platter is a must-try. Will come back!", stars: 4, food: "Wagyu Donburi", foodImage: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80" },
	{ name: "Mika", comment: "Loved the ambiance and the sakura decor.", stars: 5, food: "Matcha Blossom Parfait", foodImage: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" }
];

function AnimatedBetsubara() {
	const [showJP, setShowJP] = React.useState(false);
	React.useEffect(() => {
		const interval = setInterval(() => setShowJP((v) => !v), 2000);
		return () => clearInterval(interval);
	}, []);
	return (
		<h1 className="text-5xl md:text-6xl font-bold tracking-wider text-black mb-2 drop-shadow transition-all duration-700 min-h-[1.2em]">
			{showJP ? <span className="transition-opacity duration-700">べつばら</span> : <span className="transition-opacity duration-700">Betsubara</span>}
		</h1>
	);
}

export default function LandingPage() {
	return (
		<div className="font-[\'Noto Sans JP\'], font-serif bg-white text-black w-screen min-h-screen overflow-x-hidden">

			<section className="w-screen min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-white relative overflow-hidden px-4 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
				<div className="hidden md:flex flex-row gap-8 h-[320px] justify-center items-center relative w-1/2 pr-10">
					<img
						src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
						alt="Sakura Sushi Platter"
						className="w-[200px] h-[450px] object-cover shadow-lg animate-slide-down1"
						style={{ animation: 'slideDown1 1s cubic-bezier(.68,-0.55,.27,1.55) 0.2s both' }}
						width={140} height={320}
					/>
					<img
						src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80"
						alt="Wagyu Donburi"
						className="w-[200px] h-[450px] object-cover shadow-lg animate-slide-up"
						style={{ animation: 'slideUp 1s cubic-bezier(.68,-0.55,.27,1.55) 0.4s both' }}
						width={140} height={320}
					/>
					<img
						src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
						alt="Matcha Blossom Parfait"
						className="w-[200px] h-[450px] object-cover shadow-lg animate-slide-down2"
						style={{ animation: 'slideDown2 1s cubic-bezier(.68,-0.55,.27,1.55) 0.6s both' }}
						width={140} height={320}
					/>
				</div>

				<div className="flex-1 flex flex-col items-center md:items-start justify-center z-10 md:pl-16">
					<AnimatedBetsubara />
					<p className="text-xl md:text-2xl text-gray-700 mb-6">
					"Where Every Meal is a New Beginning"
					</p>
				</div>
			</section>

			<section className="w-screen py-16 px-4 bg-white flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Our Favorite Menu</h2>
				<p className="text-lg text-gray-600 mb-10 max-w-2xl text-center">
					Discover the dishes our guests and chefs love the most. Each plate is crafted with passion and the finest ingredients, bringing a taste of Japan to your table.
				</p>
				<div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center items-stretch">
					{featuredMenu.map((item) => (
						<div key={item.name} className="flex-1 flex flex-col items-center bg-white shadow-lg">
							<img
								src={item.image}
								alt={item.name}
								className="w-full h-80 md:h-80 object-cover mb-4"
								style={{ minWidth: '450px', maxWidth: '150%' }}
							/>
							<div className="px-4 pb-6 w-full">
								<h3 className="text-2xl font-bold text-pink-600 mb-2 text-center">{item.name}</h3>
								<p className="text-gray-700 text-base text-center">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
			
			<section className="w-screen py-25 px-4 bg-white/90 flex flex-col md:flex-row items-center md:items-start min-h-[500px]" id="story">
  <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0 md:mr-8 items-center">
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className="border-l-4 border-black pl-2 text-2xl font-normal mb-4 text-center w-full">
        Our Philosophy
      </h2>
      <h3 className="text-xl font-bold mb-2 text-center w-full">Beyond The Boundaries of Taste</h3>
      <p className="max-w-2xl text-lg text-center mx-auto">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
    </div>
  </div>
  <div className="flex-1 flex flex-col md:flex-row gap-6 justify-center items-center w-full md:w-auto">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
      alt="Japanese Restaurant Interior 1"
      className="w-[100vw] md:w-[420px] h-96 md:h-[600px] object-cover shadow-xl"
      style={{ borderRadius: 0 }}
    />
    <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80"
      alt="Japanese Restaurant Interior 2"
      className="w-[100vw] md:w-[300px] h-106 md:h-[600px] object-cover shadow-xl"
      style={{ borderRadius: 0 }}
    />
  </div>
</section>

			{/* Featured Menu Items */}
			<section className="w-screen bg-black/5 text-black py-12 px-4 flex flex-col items-center" id="menu">
  <h2 className="border-l-4 border-black-300 pl-2 text-2xl font-normal mb-10 text-center w-full">
    Featured Menu
  </h2>
  <div className="flex flex-col md:flex-row justify-center items-start gap-12 w-full max-w-6xl mx-auto">
    {/* Left column */}
    <div className="flex-1 flex flex-col gap-10 items-end">
      {featuredMenu.slice(0, 5).map((item, idx) => (
        <div key={item.name} className="w-full max-w-md">
          <div className="flex items-center justify-between w-full">
            <span className="text-3xl md:text-4xl font-bold text-black text-right w-2/3">{item.name}</span>
            <span className="flex-1 border-b border-gray-300 mx-4"></span>
            <span className="text-2xl md:text-3xl font-bold text-pink-600 whitespace-nowrap">{item.price}</span>
          </div>
          <p className="text-lg text-gray-700 mt-2 text-right w-full">{item.description}</p>
        </div>
      ))}
    </div>
    {/* Right column */}
    <div className="flex-1 flex flex-col gap-10 items-start">
      {featuredMenu.slice(5, 10).map((item, idx) => (
        <div key={item.name} className="w-full max-w-md">
          <div className="flex items-center justify-between w-full">
            <span className="text-3xl md:text-4xl font-bold text-black w-2/3">{item.name}</span>
            <span className="flex-1 border-b border-gray-300 mx-4"></span>
            <span className="text-2xl md:text-3xl font-bold text-pink-600 whitespace-nowrap">{item.price}</span>
          </div>
          <p className="text-lg text-gray-700 mt-2 w-full">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

			<section className="w-screen py-30 px-4 bg-white/90 flex justify-center items-center" id="location">
  <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden scale-105 md:scale-110">
    <div className="flex-1 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">Visit Our Location
      </h2>
      <p className="text-lg text-gray-700 mb-4">Come experience the cozy ambiance and delicious offerings at Felisa's.</p>
      <div className="mb-4">
        <div className="font-bold text-gray-900 mb-1">Address:</div>
        <div className="text-gray-700">Bintawan Road, Poblacion South, Solano, Nueva Vizcaya, 3700</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-gray-900 mb-1">Hours:</div>
        <div className="text-gray-700">Always Open from 11 am to 8 pm</div>
      </div>
      <div>
        <div className="font-bold text-gray-900 mb-1">Contact:</div>
        <div className="text-gray-700">Phone: (+63)912345678</div>
      </div>
    </div>

    <div className="flex-1 min-h-[300px] flex items-center justify-center bg-gray-50">
      <iframe
        title="Betsubara Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1582960192236!2d121.17645127329365!3d16.51810422726861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339041fc16284dad%3A0x7c61943a2e131fb0!2sBetsubara%20Cafe!5e0!3m2!1sen!2sph!4v1748448673553!5m2!1sen!2sph"
        width="100%"
        height="320"
        className="border-0 w-full h-full min-h-[250px] max-w-xl rounded-none"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

			{/* Ratings */}
			<section className="w-screen bg-pink-50 text-black py-12 px-4" id="ratings">
				<h2 className="border-l-4 border-black pl-2 text-2xl font-semibold mb-8 flex items-center gap-2">
				 Customer Ratings
				</h2>
				<div className="flex flex-wrap justify-center gap-8 mt-4">
					{ratings.map((r, idx) => (
						<div key={idx} className="bg-white/90 text-black rounded-xl shadow-lg w-56 p-5 flex flex-col items-center">
							<img src={r.foodImage} alt={r.food + ' review'} className="w-20 h-20 rounded-xl object-cover mb-3 border-2 border-pink-300 shadow" />
							<div className="font-bold mb-1 text-pink-600 flex items-center gap-2">🍱 {r.food}</div>
							<div className="font-bold mb-1 flex items-center gap-2"><span className="text-gray-400">👤</span>{r.name}</div>
							<div className="mb-2 text-pink-500 text-lg flex">
								{Array.from({ length: 5 }).map((_, i) =>
									<span key={i}>{i < r.stars ? '★' : '☆'}</span>
								)}
							</div>
							<div className="italic text-base text-center">{r.comment}</div>
						</div>
					))}
				</div>
			</section>

			{/* About Us */}
			<section className="w-screen py-12 px-4 bg-white/90" id="about">
				<h2 className="border-l-4 border-black pl-2 text-2xl font-semibold mb-4">
					About Us
				</h2>
				<p className="max-w-2xl mx-auto text-lg">
					At Betsubara, we blend tradition and creativity to bring you the best of
					Japanese cuisine. Our chefs use only the freshest ingredients, and our
					team is dedicated to making every visit special. Whether you're here for
					a quick lunch or a celebratory dinner, we welcome you with open arms and
					a touch of sakura magic.
				</p>
			</section>

			{/* Footer */}
			<footer className="w-screen bg-black text-white text-center py-6 text-base tracking-wide bg-opacity-90">
				© {new Date().getFullYear()} Betsubara | Crafted with{" "}
				<span className="text-pink-300">❀</span> in Nueva Vizcaya
			</footer>
		</div>
	);
}

