import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);

  const links = {
    tiktok: "https://www.tiktok.com/@foodbridge.ng.lim?_t=ZS-9A5NZ6zEsQG&_r=1",
    youtube: "https://www.youtube.com/@foodbridgeNigeria",
    facebook: "https://www.facebook.com/profile.php?id=61594798832703&mibextid=rS40aB7S9Ucbxw6v",
    whatsapp: "https://wa.me/2348163831822",
    gmail: "mailto:foodbridge.ng.limited@gmail.com"
  };

  return (
    <div className="min-h-screen bg-[#FFFEFB] text-slate-900 font-sans" style={{fontFamily:'Inter, sans-serif'}}>
      {/* NAV - WHITE + GREEN */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#EADFCB]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0A7A42] rounded-full flex items-center justify-center text-white font-black text-lg">F</div>
            <span className="font-black text-xl text-[#0A7A42]">FoodBridge</span>
            <span className="text-[10px] bg-[#F7F3E8] border border-[#EADFCB] px-2 py-1 rounded-full ml-1">NG LTD</span>
          </div>
          <div className="hidden md:flex gap-7 items-center">
            <span className="text-sm font-medium cursor-pointer">Solutions ▾</span>
            <a href="#about" className="text-sm font-medium">About</a>
            <a href="#blog" className="text-sm font-medium">Blog</a>
            <a href="#support" className="text-sm font-medium">Support</a>
            <a href={links.whatsapp} target="_blank" className="bg-[#0A7A42] hover:bg-[#065E32] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow">Contact us</a>
          </div>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-2xl">☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#FFFEFB] border-t border-[#EADFCB] px-6 py-4 space-y-3">
            <div className="text-sm py-2">Industry • Farm Produce</div>
            <div className="text-sm py-2">Operations • Storage</div>
            <a href="#about" className="block text-sm py-2">About</a>
            <a href="#support" className="block text-sm py-2">Support</a>
          </div>
        )}
      </header>

      {/* HERO - SAND GRADIENT */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-[#F7F3E8] via-[#FFFEFB] to-white">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-white border border-[#EADFCB] text-[#0A7A42] text-xs font-bold px-4 py-1.5 rounded-full">🌾 FOUNDED 2026 • BUILT FOR AFRICA</span>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mt-6 text-[#102A18]">
            ONE PLATFORM<br/>
            <span className="text-[#0A7A42]">TOTAL FOOD</span><br/>
            CONTROL
          </h1>
          <p className="mt-6 text-[#5B6B5F] max-w-2xl mx-auto text-lg">
            FoodBridge connects your farm buying, storage, inventory and sales into one powerful green system for families & food businesses.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href={links.whatsapp} target="_blank" className="bg-[#0A7A42] text-white px-8 py-3.5 rounded-full font-bold shadow-lg">Get Started</a>
            <a href="#about" className="bg-white border border-[#EADFCB] px-8 py-3.5 rounded-full font-bold">How it Works</a>
          </div>
          <div className="mt-14 bg-white rounded-[24px] p-3 shadow-2xl border border-[#EADFCB]">
            <img src="/founder.jpg" alt="Storage" className="w-full h-[340px] object-cover rounded-[16px] bg-[#F7F3E8]"
            onError={(e)=>e.target.src='https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200'} />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {n:"01", t:"Connect Your Farm", d:"We source yam, beans, tomatoes in bulk at harvest when cheap."},
            {n:"02", t:"Sync Your Storage", d:"Professionally preserve in our dry & cold chain for months."},
            {n:"03", t:"Gain Supply", d:"Get food anytime, stable price. Families save 40%."},
          ].map((s,i)=>(
            <div key={i} className="bg-white border border-[#EADFCB] p-7 rounded-[20px]">
              <span className="text-[#0A7A42] font-black text-4xl">{s.n}</span>
              <h3 className="font-bold text-lg mt-3 text-[#102A18]">{s.t}</h3>
              <p className="text-sm text-[#5B6B5F] mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES - SAND BG */}
      <section className="py-20 px-6 bg-[#F7F3E8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center text-[#102A18]">Everything you need to preserve food</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {t:"Multi-Location Support", d:"Manage Abuja, Lafia, Jos from one dashboard."},
              {t:"Sales & Inventory Sync", d:"Automatic stock sync. Know what remains instantly."},
              {t:"Reports & Analytics", d:"See price trends, best sellers, profit per season."},
              {t:"AI-Powered Insights", d:"Forecast when tomato will spike."},
              {t:"Flexible & Scalable", d:"From 1 bag for family to 100 bags for restaurants."},
              {t:"Uptime & Support", d:"Real WhatsApp support Mon-Sat."},
            ].map((f,i)=>(
              <div key={i} className="bg-white p-7 rounded-[20px] border border-[#EADFCB] shadow-sm">
                <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center mb-4 text-[#0A7A42] font-black">✓</div>
                <h4 className="font-bold text-[#102A18]">{f.t}</h4>
                <p className="text-sm text-[#5B6B5F] mt-2">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT FOUNDER WITH YOUR SOCIALS */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-xl border border-[#EADFCB] flex flex-col md:flex-row gap-10 items-center">
          <img src="/founder.jpg" className="w-72 h-72 object-cover rounded-[24px] border-4 border-[#F7F3E8]" onError={(e)=>e.target.src='https://via.placeholder.com/400?text=Francis+Yakubu'}/>
          <div className="flex-1">
            <span className="text-xs bg-[#E8F5E9] text-[#0A7A42] px-4 py-1.5 rounded-full font-bold">OUR STORY • FOODBRIDGE NG LTD</span>
            <h3 className="text-4xl font-black mt-4 text-[#102A18]">Who is FoodBridge?</h3>
            <p className="text-sm text-[#5B6B5F] mt-4 leading-relaxed">Founded by Francis Yakubu. We solve 40% post-harvest loss with professional storage infrastructure. RC in progress, Built for Africa.</p>
            <div className="flex gap-3 mt-7">
              <a href={links.facebook} target="_blank" className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white font-black shadow hover:scale-110 transition">f</a>
              <a href={links.tiktok} target="_blank" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow hover:scale-110 transition">♫</a>
              <a href={links.youtube} target="_blank" className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center text-white font-bold shadow hover:scale-110 transition">▶</a>
              <a href={links.whatsapp} target="_blank" className="w-12 h-12 bg-[#0A7A42] rounded-full flex items-center justify-center text-white font-bold shadow hover:scale-110 transition">W</a>
              <a href={links.gmail} className="w-12 h-12 bg-[#F7F3E8] border border-[#EADFCB] rounded-full flex items-center justify-center text-[#102A18] font-bold shadow hover:scale-110 transition">@</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING - GREEN ACCENT */}
      <section className="py-20 px-6 bg-white border-y border-[#EADFCB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center text-[#102A18]">Simple, transparent pricing</h2>
          <p className="text-center text-sm text-[#5B6B5F] mt-3">All plans include 14-day free trial. Pay in Naira.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border border-[#EADFCB] bg-[#FFFEFB] rounded-[24px] p-7">
              <h4 className="font-black text-lg">Starter</h4>
              <p className="text-4xl font-black mt-3 text-[#102A18]">₦5,000<span className="text-base font-normal text-[#5B6B5F]">/mo</span></p>
              <ul className="mt-6 space-y-3 text-sm text-[#5B6B5F]"><li>✓ 1 bag storage</li><li>✓ Monthly supply</li><li>✓ WhatsApp support</li><li>✓ Price lock</li></ul>
              <a href={links.whatsapp} target="_blank" className="block mt-8 border border-[#0A7A42] text-[#0A7A42] text-center py-3 rounded-full font-bold">Get Started</a>
            </div>
            <div className="border-2 border-[#0A7A42] bg-white rounded-[24px] p-7 relative shadow-xl">
              <span className="absolute -top-3 left-7 bg-[#0A7A42] text-white text-xs px-4 py-1 rounded-full font-bold">MOST POPULAR</span>
              <h4 className="font-black text-lg">Growth</h4>
              <p className="text-4xl font-black mt-3 text-[#102A18]">₦20,000<span className="text-base font-normal text-[#5B6B5F]">/mo</span></p>
              <ul className="mt-6 space-y-3 text-sm text-[#5B6B5F]"><li>✓ Everything in Starter</li><li>✓ Multi-Store Sync</li><li>✓ Staff Access</li><li>✓ Advanced Reports</li><li>✓ AI Demand Forecast</li></ul>
              <a href={links.whatsapp} target="_blank" className="block mt-8 bg-[#0A7A42] text-white text-center py-3 rounded-full font-bold shadow">Start Free Trial</a>
            </div>
            <div className="border border-[#EADFCB] bg-[#F7F3E8] rounded-[24px] p-7">
              <h4 className="font-black text-lg">Custom</h4>
              <p className="text-2xl font-black mt-3 text-[#102A18]">Contact Us</p>
              <ul className="mt-6 space-y-3 text-sm text-[#5B6B5F]"><li>✓ Everything in Growth</li><li>✓ Competitor Intel</li><li>✓ Cybersecurity Suite</li><li>✓ Dedicated Manager</li></ul>
              <a href={links.whatsapp} target="_blank" className="block mt-8 bg-[#102A18] text-white text-center py-3 rounded-full font-bold">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section id="support" className="py-20 px-6 bg-[#F7F3E8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-black text-[#102A18]">Get in touch</h3>
            <p className="text-sm text-[#5B6B5F] mt-3">Questions? Send us a message.</p>
            <div className="mt-8 bg-white border border-[#EADFCB] p-6 rounded-[20px] space-y-2 text-sm">
              <p><b>Email:</b> foodbridge.ng.limited@gmail.com</p>
              <p><b>Phone:</b> +234 816 383 1822</p>
              <p><b>Address:</b> 123 Donald St, Gwagwalada, Abuja</p>
              <div className="pt-4"><a href={links.whatsapp} target="_blank" className="bg-[#0A7A42] text-white px-5 py-2.5 rounded-full text-sm font-bold">Schedule a call on WhatsApp</a></div>
            </div>
          </div>
          <div className="bg-white p-7 rounded-[24px] border border-[#EADFCB] shadow-sm">
            <input placeholder="Your name" className="w-full border border-[#EADFCB] bg-[#FFFEFB] p-3.5 rounded-xl mb-3" />
            <input placeholder="your@mail.com" className="w-full border border-[#EADFCB] bg-[#FFFEFB] p-3.5 rounded-xl mb-3" />
            <textarea placeholder="Tell us about your needs..." className="w-full border border-[#EADFCB] bg-[#FFFEFB] p-3.5 rounded-xl mb-3 h-28"></textarea>
            <button className="w-full bg-[#0A7A42] text-white py-3.5 rounded-full font-bold">Send Message</button>
          </div>
        </div>
      </section>

      <footer className="bg-[#102A18] text-[#EADFCB] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div><p className="font-black text-white text-lg">FoodBridge Nigeria Limited</p><p className="mt-2 text-[#A8C5B0]">Farm to Family, Preserved.</p></div>
          <div className="text-[#A8C5B0]">© 2026 FoodBridge • Privacy • Terms</div>
        </div>
      </footer>
    </div>
  )
}
