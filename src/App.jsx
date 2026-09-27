import { useState } from 'react';

export default function App() {
  const links = {
    tiktok: "https://www.tiktok.com/@foodbridge.ng.lim?_t=ZS-9A5NZ6zEsQG&_r=1",
    youtube: "https://www.youtube.com/@foodbridgeNigeria",
    facebook: "https://www.facebook.com/profile.php?id=61594798832703&mibextid=rS40aB7S9Ucbxw6v",
    whatsapp: "https://wa.me/2348163831822",
    gmail: "mailto:foodbridge.ng.limited@gmail.com"
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <nav className="p-4 flex justify-between items-center shadow sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-black text-green-700">FoodBridge NG LTD</h1>
        <a href={links.whatsapp} target="_blank" className="bg-green-600 text-white px-4 py-2 rounded-full font-bold">WhatsApp</a>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-5xl font-black mb-4">Farm to Family,<br/>Preserved.</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">We buy yam, beans, tomatoes in bulk, store them professionally for months, and supply families & businesses - no more hunger season price.</p>
        <a href={links.whatsapp} target="_blank" className="inline-block mt-8 bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg">Order Now</a>
      </section>

      {/* ABOUT US WITH CLICKABLE LOGOS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-3xl shadow-xl">
          <img src="/founder.jpg" alt="Francis Yakubu" className="w-72 h-72 object-cover rounded-3xl shadow-lg" 
               onError={(e)=>e.target.src='https://via.placeholder.com/400x400?text=Francis+Yakubu+Founder'} />
          <div className="flex-1">
            <h3 className="text-4xl font-black mb-2">About Us</h3>
            <h4 className="text-green-700 font-bold text-xl">Francis Yakubu - Founder & CEO</h4>
            <p className="text-sm text-gray-500">FoodBridge Nigeria Limited</p>
            <p className="mt-4 text-gray-700 leading-relaxed">We are building Nigeria's cold-chain & dry storage infrastructure to stop 40% post-harvest loss. Registered company with mission to make food affordable year-round.</p>
            
            <p className="font-bold mt-6 mb-3">Follow Our Company:</p>
            <div className="flex gap-4">
              <a href={links.facebook} target="_blank" title="Facebook" className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl shadow hover:scale-110 transition">f</a>
              <a href={links.tiktok} target="_blank" title="TikTok" className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold shadow hover:scale-110 transition">♫</a>
              <a href={links.youtube} target="_blank" title="YouTube" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow hover:scale-110 transition">▶</a>
              <a href={links.whatsapp} target="_blank" title="WhatsApp" className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-black shadow hover:scale-110 transition">W</a>
              <a href={links.gmail} title="Email Us" className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold shadow hover:scale-110 transition">@</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-black text-center mb-10">Blog & Food Storage Tips</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow"><h4 className="font-bold text-lg">How to Store Yam for 6 Months</h4><p className="text-sm text-gray-600 mt-2">Traditional barns vs modern ventilation that keeps yam fresh without spoilage...</p></div>
            <div className="bg-white p-6 rounded-2xl shadow"><h4 className="font-bold text-lg">Why Tomato Price Spikes in March</h4><p className="text-sm text-gray-600 mt-2">Dry season scarcity explained and how FoodBridge solves it with cold storage...</p></div>
            <div className="bg-white p-6 rounded-2xl shadow"><h4 className="font-bold text-lg">Beans Without Chemicals</h4><p className="text-sm text-gray-600 mt-2">Our airtight drum method preserves beans for 12 months safely...</p></div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-black mb-4">Support & Contact</h3>
        <div className="bg-green-700 text-white p-8 rounded-3xl shadow-xl mt-6">
          <p className="text-lg">📧 foodbridge.ng.limited@gmail.com</p>
          <p className="text-lg mt-2">📱 WhatsApp: 08163831822</p>
          <p className="mt-2">📍 Abuja | Lafia | Jos | Supplying Nationwide</p>
        </div>
      </section>

      <footer className="bg-black text-white py-10 text-center">
        <p className="font-black text-xl">FoodBridge Nigeria Limited</p>
        <p className="text-sm text-gray-400 mt-1">RC Number: (Add when CAC completes)</p>
        <p className="text-sm text-gray-500 mt-4">© 2026 FoodBridge. Farm to Family, Preserved.</p>
      </footer>
    </div>
  )
}
