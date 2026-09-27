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
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* NAV LIKE SELLSYNC */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-black">F</div>
            <span className="font-black text-xl">FoodBridge</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <span className="text-sm">Solutions ▾</span>
            <a href="#about" className="text-sm">About</a>
            <a href="#blog" className="text-sm">Blog</a>
            <a href="#support" className="text-sm">Support</a>
            <span className="text-sm">Sign In</span>
            <a href={links.whatsapp} target="_blank" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold">Contact us</a>
          </div>
          <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-2xl">☰</button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            <div className="text-sm py-2">Industry</div>
            <div className="text-sm py-2">Operations</div>
            <div className="text-sm py-2">Communication</div>
            <div className="text-sm py-2">Legal</div>
            <a href="#about" className="block text-sm py-2">About</a>
            <a href="#blog" className="block text-sm py-2">Blog</a>
            <a href="#support" className="block text-sm py-2">Support</a>
          </div>
        )}
      </header>

      {/* HERO LIKE SELLSYNC - ONE PLATFORM */}
      <section className="text-center py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black leading-tight">
          ONE PLATFORM<br/>
          <span className="text-blue-600">TOTAL FOOD CONTROL</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          FoodBridge connects your farm buying, storage, inventory, sales and analytics into one powerful system for families and food businesses. No more seasonal scarcity.
        </p>
        <a href={links.whatsapp} target="_blank" className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg font-bold">Get Started</a>
        
        <div className="mt-12 bg-gray-100 rounded-2xl p-2">
          <img src="/founder.jpg" alt="Storage" className="w-full h-64 object-cover rounded-xl bg-white"
          onError={(e)=>e.target.src='https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000'} />
        </div>
      </section>

      {/* HOW IT WORKS 1-2-3 */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t">
        <div className="grid md:grid-cols-3 gap-8">
          <div><span className="text-blue-600 font-black text-3xl">1</span><h3 className="font-bold mt-2">Connect Your Farm</h3><p className="text-sm text-gray-600 mt-2">We source yam, beans, tomatoes in bulk at harvest when cheap.</p></div>
          <div><span className="text-blue-600 font-black text-3xl">2</span><h3 className="font-bold mt-2">Sync Your Storage</h3><p className="text-sm text-gray-600 mt-2">Professionally preserve in our dry & cold chain for months.</p></div>
          <div><span className="text-blue-600 font-black text-3xl">3</span><h3 className="font-bold mt-2">Gain Supply</h3><p className="text-sm text-gray-600 mt-2">Get food anytime, stable price. Families save 40% off market spike.</p></div>
        </div>
      </section>

      {/* FEATURES LIKE SELLSYNC */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center">Everything you need to run your food business</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              {t:"Multi-Location Support", d:"Manage Abuja, Lafia, Jos stores from one dashboard."},
              {t:"Sales & Inventory Sync", d:"Automatic sync of stock. Know what remains in storage instantly."},
              {t:"Reports & Analytics", d:"See price trends, best selling foods, profit per season."},
              {t:"AI-Powered Insights", d:"Forecast when tomato will spike, get buying advice."},
              {t:"Flexible & Scalable", d:"From family bag to 100 bags for restaurants."},
              {t:"Uptime & Support SLA", d:"Real people support on WhatsApp Mon-Sat."},
            ].map((f,i)=>(
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">✓</div>
                <h4 className="font-bold">{f.t}</h4>
                <p className="text-sm text-gray-600 mt-1">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT FOUNDER */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 items-center">
          <img src="/founder.jpg" className="w-64 h-64 object-cover rounded-2xl" onError={(e)=>e.target.src='https://via.placeholder.com/300?text=Francis+Yakubu'}/>
          <div className="flex-1">
            <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">OUR STORY</span>
            <h3 className="text-3xl font-black mt-3">Who is FoodBridge?</h3>
            <p className="text-sm text-gray-600 mt-3">FoodBridge Nigeria Limited is founded by Francis Yakubu. We solve 40% post-harvest loss with storage infrastructure. Founded in 2026, Built for Africa.</p>
            <div className="flex gap-2 mt-6">
              <a href={links.facebook} target="_blank" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black">f</a>
              <a href={links.tiktok} target="_blank" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">♫</a>
              <a href={links.youtube} target="_blank" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white">▶</a>
              <a href={links.whatsapp} target="_blank" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">W</a>
              <a href={links.gmail} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">@</a>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING LIKE SELLSYNC N2,000 */}
      <section className="py-16 px-6 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center">Simple, transparent pricing</h2>
          <p className="text-center text-sm text-gray-500 mt-2">Choose the plan that's right for your business. All plans include 14-day free trial.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border rounded-2xl p-6">
              <h4 className="font-black">Starter</h4>
              <p className="text-3xl font-black mt-2">₦5,000<span className="text-sm font-normal">/month</span></p>
              <p className="text-xs text-gray-500 mt-2">Perfect for families</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✓ 1 bag storage (yam/beans)</li>
                <li>✓ Monthly supply</li>
                <li>✓ WhatsApp support</li>
                <li>✓ Price lock</li>
              </ul>
              <a href={links.whatsapp} target="_blank" className="block mt-6 border text-center py-2 rounded-lg font-bold">Get Started</a>
            </div>
            <div className="border-2 border-blue-600 rounded-2xl p-6 relative">
              <span className="absolute -top-3 left-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">POPULAR</span>
              <h4 className="font-black">Growth</h4>
              <p className="text-3xl font-black mt-2">₦20,000<span className="text-sm font-normal">/month</span></p>
              <p className="text-xs text-gray-500 mt-2">For small businesses</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✓ Everything in Starter, plus:</li>
                <li>✓ Automatic Multi-Store Sync</li>
                <li>✓ Staff Access & Role</li>
                <li>✓ Advanced Reports/Multi-Device</li>
                <li>✓ AI Demand Forecasting</li>
              </ul>
              <a href={links.whatsapp} target="_blank" className="block mt-6 bg-black text-white text-center py-2 rounded-lg font-bold">Start Free Trial</a>
            </div>
            <div className="border rounded-2xl p-6 bg-slate-50">
              <h4 className="font-black">Custom</h4>
              <p className="text-xl font-black mt-2">Contact Us</p>
              <p className="text-xs text-gray-500 mt-2">Tailored for large enterprises</p>
              <ul className="mt-6 space-y-2 text-sm">
                <li>✓ Everything in Growth, plus:</li>
                <li>✓ Competitor Intel & Community</li>
                <li>✓ Full Cybersecurity Suite</li>
                <li>✓ Dedicated Support Manager</li>
              </ul>
              <a href={links.whatsapp} target="_blank" className="block mt-6 border text-center py-2 rounded-lg font-bold">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-black text-center">Your questions, clearly answered</h3>
        {[
          {q:"How does food storage work?", a:"We buy at harvest, store professionally, you collect monthly."},
          {q:"Can I store multiple locations?", a:"Yes, Abuja, Lafia, Jos synced."},
          {q:"Do I need technical skills?", a:"No, just WhatsApp us."},
          {q:"What analytics are available?", a:"Price trends, stock level, profit saved."},
        ].map((f,i)=>(
          <div key={i} className="border-b py-4">
            <button onClick={()=>setFaqOpen(faqOpen===i?null:i)} className="flex justify-between w-full text-left font-bold">{f.q}<span>{faqOpen===i?'-':'+'}</span></button>
            {faqOpen===i && <p className="text-sm text-gray-600 mt-2">{f.a}</p>}
          </div>
        ))}
      </section>

      {/* GET IN TOUCH FORM LIKE SELLSYNC */}
      <section id="support" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-black">Get in touch</h3>
            <p className="text-sm text-gray-600 mt-2">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="mt-8 space-y-3 text-sm">
              <p><b>Email:</b> foodbridge.ng.limited@gmail.com</p>
              <p><b>Phone:</b> +234 816 383 1822</p>
              <p><b>Address:</b> 123 Donald Street, Hajj Camp Gwagwalada, Abuja</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl mt-6">
              <p className="font-bold text-sm">Need immediate assistance?</p>
              <p className="text-xs">Our support team is available Mon-Sat 9am-6pm</p>
              <a href={links.whatsapp} target="_blank" className="inline-block mt-3 bg-black text-white px-4 py-2 rounded-lg text-sm">Schedule a call</a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <input placeholder="Your name" className="w-full border p-3 rounded-lg mb-3" />
            <input placeholder="your@mail.com" className="w-full border p-3 rounded-lg mb-3" />
            <select className="w-full border p-3 rounded-lg mb-3"><option>Type of Inquiry</option><option>Family Storage</option><option>Business Supply</option></select>
            <textarea placeholder="Tell us about your needs..." className="w-full border p-3 rounded-lg mb-3 h-24"></textarea>
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold">Send Message</button>
          </div>
        </div>
      </section>

      {/* FOOTER LIKE SELLSYNC */}
      <footer className="bg-white border-t py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-black">F</div><span className="font-black">FoodBridge</span></div>
            <p className="text-gray-600 mt-3">Smarter food management for families & businesses.</p>
            <div className="flex gap-3 mt-4">
              <a href={links.facebook} target="_blank">f</a>
              <a href={links.youtube} target="_blank}>▶</a>
              <a href={links.tiktok} target="_blank">♫</a>
            </div>
          </div>
          <div><p className="font-bold">Product</p><p className="mt-3 text-gray-600">Features<br/>Pricing<br/>Integrations</p></div>
          <div><p className="font-bold">Company</p><p className="mt-3 text-gray-600">About Us<br/>Careers<br/>Blog</p></div>
          <div>
            <p className="font-bold">Stay Updated</p>
            <p className="text-xs text-gray-600 mt-2">Subscribe to newsletter for latest updates.</p>
            <input placeholder="Enter your email" className="w-full border p-2 rounded-lg mt-3" />
            <button className="w-full bg-black text-white py-2 rounded-lg mt-2">Subscribe</button>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-10">© 2026 FoodBridge. All rights reserved. Privacy Policy | Terms of Service | Cookie Policy</div>
      </footer>
    </div>
  )
}
