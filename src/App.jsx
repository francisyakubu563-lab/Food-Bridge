import React, { useState } from 'react'

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [balance] = useState({ rice: 50, beans: 30, garri: 100 })

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'18px 5%', background:'white', borderBottom:'1px solid #e5e7eb', position:'sticky', top:0, zIndex:10 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:38, height:38, background:'#16a34a', borderRadius:10, display:'grid', placeItems:'center', color:'white', fontWeight:900 }}>FB</div>
          <b style={{ fontSize:20 }}>FoodBridge</b>
        </div>
        <div style={{ display:'flex', gap:15 }}>
          <button onClick={()=>setShowLogin(true)} style={{ padding:'8px 20px', borderRadius:20, border:'1px solid #16a34a', background:'white', color:'#16a34a', fontWeight:600 }}>Login</button>
          <button onClick={()=>setShowLogin(true)} style={{ padding:'8px 20px', borderRadius:20, border:'none', background:'#16a34a', color:'white', fontWeight:600 }}>Get Started</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding:'60px 5%', display:'flex', flexWrap:'wrap', gap:40, alignItems:'center', background:'linear-gradient(135deg,#f0fdf4,#fff)' }}>
        <div style={{ flex:'1 1 400px' }}>
          <span style={{ background:'#dcfce7', color:'#16a34a', padding:'6px 14px', borderRadius:20, fontSize:13, fontWeight:700 }}>THE BANK FOR FOODSTUFF</span>
          <h1 style={{ fontSize:48, lineHeight:1.1, margin:'18px 0', fontWeight:900 }}>Transfer, Store, Exchange & Withdraw Food Anywhere in Nigeria</h1>
          <p style={{ color:'#4b5563', fontSize:18, lineHeight:1.6 }}>FoodBridge is the first digital food bank. Farmers deposit harvest, families withdraw food in Abuja, Lagos, Kano — without moving bags. Save against inflation.</p>
          <div style={{ display:'flex', gap:12, marginTop:24 }}>
            <button onClick={()=>setShowLogin(true)} style={{ padding:'14px 28px', borderRadius:30, background:'#16a34a', color:'white', border:'none', fontWeight:700, fontSize:16 }}>Open Free Account</button>
            <button style={{ padding:'14px 28px', borderRadius:30, background:'white', border:'1px solid #ddd', fontWeight:600 }}>Watch Demo</button>
          </div>
          <div style={{ display:'flex', gap:20, marginTop:30, color:'#6b7280', fontSize:14 }}>
            <div><b style={{color:'#111', fontSize:18}}>2,500+</b><br/>Farmers</div>
            <div><b style={{color:'#111', fontSize:18}}>10k Bags</b><br/>Secured</div>
            <div><b style={{color:'#111', fontSize:18}}>36 States</b><br/>Coverage</div>
          </div>
        </div>
        <div style={{ flex:'1 1 350px', background:'white', borderRadius:24, padding:24, boxShadow:'0 20px 40px rgba(0,0,0,0.08)', border:'1px solid #eee' }}>
          <h3 style={{ marginBottom:16 }}>Your Food Wallet</h3>
          <div style={{ display:'grid', gap:12 }}>
            <div style={{ display:'flex', justifyContent:'space-between', padding:16, background:'#f0fdf4', borderRadius:14 }}><span>🍚 Rice</span><b>{balance.rice} mudu</b></div>
            <div style={{ display:'flex', justifyContent:'space-between', padding:16, background:'#fefce8', borderRadius:14 }}><span>🫘 Beans</span><b>{balance.beans} mudu</b></div>
            <div style={{ display:'flex', justifyContent:'space-between', padding:16, background:'#faf5ff', borderRadius:14 }}><span>🌾 Garri</span><b>{balance.garri} mudu</b></div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:16 }}>
            <button style={{ padding:12, borderRadius:12, background:'#16a34a', color:'white', border:'none', fontWeight:600 }}>Deposit</button>
            <button style={{ padding:12, borderRadius:12, background:'#111827', color:'white', border:'none', fontWeight:600 }}>Withdraw</button>
          </div>
          <p style={{ fontSize:12, color:'#6b7280', marginTop:12, textAlign:'center' }}>Secured by Sterling Vaults • Insured</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding:'60px 5%', background:'white' }}>
        <h2 style={{ textAlign:'center', fontSize:32, fontWeight:800, marginBottom:10 }}>How FoodBridge Works</h2>
        <p style={{ textAlign:'center', color:'#6b7280', marginBottom:40 }}>Like a bank, but for food</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20 }}>
          {[
            { step:'01', title:'Deposit', desc:'Take your harvest to our partner warehouse. We weigh, grade, and credit your FoodBridge account instantly.' },
            { step:'02', title:'Store', desc:'We store safely with anti-pest, insurance. Your food value grows as market price increases.' },
            { step:'03', title:'Transfer', desc:'Send 10 mudu rice to your mother in Abuja from your farm in Benue. She gets code to withdraw.' },
            { step:'04', title:'Withdraw', desc:'Walk to any FoodBridge agent, show code, collect fresh equivalent food or cash.' },
          ].map(c=>(
            <div key={c.step} style={{ padding:24, border:'1px solid #e5e7eb', borderRadius:18 }}>
              <div style={{ width:40, height:40, background:'#16a34a', color:'white', borderRadius:10, display:'grid', placeItems:'center', fontWeight:800 }}>{c.step}</div>
              <h4 style={{ margin:'14px 0 8px', fontSize:18 }}>{c.title}</h4>
              <p style={{ color:'#6b7280', fontSize:14, lineHeight:1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section style={{ padding:'50px 5%', background:'#111827', color:'white', display:'flex', flexWrap:'wrap', gap:30, alignItems:'center', borderRadius:24, margin:'20px 5%' }}>
        <img src="https://i.pravatar.cc/150?img=68" alt="Francis" style={{ width:100, height:100, borderRadius:'50%', border:'3px solid #16a34a' }} />
        <div style={{ flex:'1 1 300px' }}>
          <h3 style={{ fontSize:22 }}>Built by Francis Yakubu</h3>
          <p style={{ color:'#9ca3af', marginTop:8, lineHeight:1.6 }}>Founder & CEO, FoodBridge. Vision: End food waste, stop hunger transfer cost, and make every Nigerian a food bank owner. "If money can be banked, why not food?"</p>
        </div>
        <div style={{ background:'#16a34a', padding:'12px 20px', borderRadius:30, fontWeight:700 }}>Abuja • Nigeria</div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign:'center', padding:30, color:'#6b7280', fontSize:13 }}>© 2026 FoodBridge. The Bank for Foodstuff. All rights reserved.</footer>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div onClick={()=>setShowLogin(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'grid', placeItems:'center', zIndex:50, padding:20 }}>
          <div onClick={e=>e.stopPropagation()} style={{ background:'white', padding:30, borderRadius:20, width:'100%', maxWidth:380 }}>
            <h3 style={{ fontSize:22, fontWeight:800 }}>Welcome to FoodBridge</h3>
            <p style={{ color:'#6b7280', margin:'8px 0 20px' }}>Enter phone to continue</p>
            <input placeholder="0803 000 0000" style={{ width:'100%', padding:14, borderRadius:12, border:'1px solid #ddd', marginBottom:12 }} />
            <button onClick={()=>{setShowLogin(false); alert('Dashboard coming next after deployment!')}} style={{ width:'100%', padding:14, borderRadius:12, background:'#16a34a', color:'white', border:'none', fontWeight:700 }}>Continue</button>
            <button onClick={()=>setShowLogin(false)} style={{ width:'100%', marginTop:10, background:'none', border:'none', color:'#6b7280' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}