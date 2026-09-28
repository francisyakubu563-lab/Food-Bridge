import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [signupStep, setSignupStep] = useState(1);

  const green = '#166534';
  const sand = '#F5F1E8';

  if (page === 'login') {
    return (
      <div style={{background:'#F8FAFC', minHeight:'100vh', fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white', padding:'40px 20px', textAlign:'center', borderBottom:'1px solid #eee'}}>
          <div style={{width:80, height:80, background:green, borderRadius:20, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:40, fontWeight:800}}>F</div>
          <h1 style={{color:green, fontSize:32, fontWeight:800, margin:'15px 0 5px'}}>FoodBridge</h1>
          <p style={{color:'#64748b'}}>One platform. Total food control.</p>
        </div>
        <div style={{maxWidth:420, margin:'30px auto', padding:'0 20px'}}>
          <h2 style={{fontSize:24, fontWeight:700}}>Welcome back to <span style={{color:green}}>FoodBridge</span></h2>
          <p style={{color:'#64748b', fontSize:14, marginBottom:25}}>Sign in to continue</p>
          <label style={{fontSize:14, fontWeight:600}}>Email</label>
          <input placeholder="name@mail.com" style={{width:'100%', padding:14, borderRadius:10, border:'1px solid #ddd', margin:'8px 0 18px'}} />
          <label style={{fontSize:14, fontWeight:600}}>Password</label>
          <input type="password" placeholder="Your password" style={{width:'100%', padding:14, borderRadius:10, border:'1px solid #ddd', margin:'8px 0 18px'}} />
          <button style={{width:'100%', background:green, color:'white', padding:14, borderRadius:10, border:'none', fontWeight:700, marginTop:15}}>Sign In</button>
          <p style={{textAlign:'center', fontSize:14, marginTop:15}}>New? <span onClick={()=>setPage('signup')} style={{color:green, fontWeight:700, cursor:'pointer'}}>Sign up</span></p>
          <p onClick={()=>setPage('home')} style={{textAlign:'center', fontSize:13, marginTop:20, color:'#888', cursor:'pointer'}}>← Back to Home</p>
        </div>
      </div>
    )
  }

  if (page === 'signup') {
    return (
      <div style={{background:'#F8FAFC', minHeight:'100vh', fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white', padding:'30px 20px', textAlign:'center'}}>
          <div style={{width:60, height:60, background:green, borderRadius:15, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:30, fontWeight:800}}>F</div>
          <h1 style={{color:green, fontSize:28, fontWeight:800, margin:'10px 0 5px'}}>FoodBridge</h1>
          <div style={{display:'flex', justifyContent:'center', gap:15, marginTop:20}}>
            {[1,2,3].map(n=> <div key={n} style={{width:30, height:30, borderRadius:'50%', background: signupStep===n ? green : '#e2e8f0', color: signupStep===n?'white':'#64748b', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700}}>{n}</div>)}
          </div>
        </div>
        <div style={{maxWidth:420, margin:'20px auto', padding:'0 20px'}}>
          <h2 style={{fontSize:22, fontWeight:700}}>Create your account</h2>
          <p style={{fontSize:12, fontWeight:700, marginTop:10}}>STEP {signupStep} OF 3</p>
          <input placeholder="Full Name - e.g. Francis Yako" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:15}} />
          <input placeholder="Email" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:10}} />
          <input placeholder="Password" type="password" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:10}} />
          <button onClick={()=> signupStep<3 ? setSignupStep(s=>s+1) : setPage('home')} style={{width:'100%', background:green, color:'white', padding:13, borderRadius:10, border:'none', fontWeight:700, marginTop:20}}>{signupStep<3?'Next':'Create Account'}</button>
          <p style={{textAlign:'center', fontSize:12, marginTop:12}}>Have account? <span onClick={()=>setPage('login')} style={{color:green, fontWeight:700}}>Log in</span></p>
        </div>
      </div>
    )
  }

  return (
    <div style={{fontFamily:'Inter,sans-serif', background:'white'}}>
      <header style={{position:'sticky', top:0, background:'white', zIndex:50, borderBottom:'1px solid #f1f5f9', padding:'12px 15px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:8, fontWeight:800, fontSize:20, color:green}}>
          <div style={{width:32, height:32, background:green, color:'white', borderRadius:7, display:'flex', alignItems:'center', justifyContent:'center'}}>F</div> FoodBridge
        </div>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <button onClick={()=>setPage('login')} style={{border:'none', background:'none', fontWeight:600, fontSize:13}}>Sign In</button>
          <button onClick={()=> document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} style={{background:green, color:'white', border:'none', padding:'8px 14px', borderRadius:8, fontWeight:600, fontSize:13}}>Contact us</button>
          <button onClick={()=> setMenuOpen(!menuOpen)} style={{border:'1px solid #eee', background:'white', borderRadius:8, padding:'5px 9px'}}>☰</button>
        </div>
      </header>

      {menuOpen && (
        <div style={{background:'white', borderBottom:'1px solid #eee', padding:'0 15px', position:'sticky', top:57, zIndex:40}}>
          <div onClick={()=> setSolutionOpen(!solutionOpen)} style={{padding:'16px 0', borderBottom:'1px solid #f1f5f9', fontWeight:600, cursor:'pointer'}}>Solutions ▾</div>
          {solutionOpen && <div style={{padding:'10px 0 10px 15px', fontSize:14, color:'#555'}}><div>• Food Donation</div><div>• Waste Tracking</div><div>• Volunteer Connect</div><div>• Community Sharing</div></div>}
          <div onClick={()=> {setMenuOpen(false); document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'16px 0', borderBottom:'1px solid #f1f5f9', cursor:'pointer'}}>About</div>
          <div onClick={()=> {setMenuOpen(false); document.getElementById('blog')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'16px 0', borderBottom:'1px solid #f1f5f9', cursor:'pointer'}}>Blog</div>
          <div onClick={()=> {setMenuOpen(false); document.getElementById('support')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'16px 0', cursor:'pointer'}}>Support</div>
        </div>
      )}

      <section style={{textAlign:'center', padding:'45px 15px 20px'}}>
        <h1 style={{fontSize:34, fontWeight:900, lineHeight:1.1}}>ONE PLATFORM<br/><span style={{color:green}}>TOTAL FOOD<br/>CONTROL</span></h1>
        <p style={{color:'#475569', fontSize:15, maxWidth:500, margin:'18px auto', lineHeight:1.5}}>FoodBridge creates a platform that connects food donors, volunteers, analytics, and AI assistant into one powerful system for communities in Nigeria.</p>
        <button onClick={()=> document.getElementById('how')?.scrollIntoView({behavior:'smooth'})} style={{background:'#111', color:'white', padding:'13px 26px', borderRadius:10, border:'none', fontWeight:600, marginTop:8}}>Get Started</button>
        <div style={{marginTop:25, borderRadius:16, overflow:'hidden', border:'1px solid #e2e8f0', maxWidth:600, margin:'25px auto 0'}}>
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700" style={{width:'100%'}} alt="food" />
        </div>
      </section>

      <section style={{padding:'30px 15px'}}>
        <h3 style={{fontSize:18, fontWeight:800, textAlign:'center'}}>Everything you need to run your food rescue</h3>
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:12, padding:15, marginTop:15}}>
          <b>Centralized Dashboard</b><p style={{fontSize:13, color:'#555'}}>All donations and analytics in real-time. Reduce manual work.</p>
        </div>
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:12, padding:15, marginTop:10}}>
          <b>Donation & Inventory Sync</b><p style={{fontSize:13, color:'#555'}}>Automatic sync across donors and community centers.</p>
        </div>
        <div style={{background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:12, padding:15, marginTop:10}}>
          <b>Multi-Location Support</b><p style={{fontSize:13, color:'#555'}}>Manage Kogolada and other Abuja locations from one interface.</p>
        </div>
      </section>

      <section id="how" style={{padding:'30px 15px', background:sand}}>
        <h2 style={{fontSize:20, fontWeight:800}}>Get started in 3 minutes</h2>
        <div style={{marginTop:15}}><span style={{color:green, fontWeight:800, fontSize:22}}>1</span> <b>Sign Up & Connect</b><p style={{fontSize:13, color:'#555', marginLeft:22}}>Create account and link your food sources.</p></div>
        <div style={{marginTop:15}}><span style={{color:green, fontWeight:800, fontSize:22}}>2</span> <b>Sync Your Food</b><p style={{fontSize:13, color:'#555', marginLeft:22}}>Import donations and community needs.</p></div>
        <div style={{marginTop:15}}><span style={{color:green, fontWeight:800, fontSize:22}}>3</span> <b>Gain Impact</b><p style={{fontSize:13, color:'#555', marginLeft:22}}>Track waste reduction and feed families.</p></div>
      </section>

      <section id="about" style={{padding:'30px 15px'}}>
        <p style={{color:green, fontWeight:700, fontSize:11}}>OUR STORY</p>
        <h2 style={{fontSize:20, fontWeight:800}}>Who is FoodBridge?</h2>
        <p style={{fontSize:13, color:'#475569', lineHeight:1.6}}>FoodBridge is built for Nigeria to solve food waste and hunger. We help businesses donate surplus instead of throwing away.</p>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginTop:15, fontSize:12}}><div><b>FOUNDED</b><br/>2026</div><div><b>FOUNDER</b><br/>Francis Yako</div><div><b>LOCATION</b><br/>Nigeria</div><div><b>ADDRESS</b><br/>Kogolada, Abuja</div></div>
      </section>

      <section id="blog" style={{padding:'30px 15px', background:'#f8fafc'}}>
        <h2 style={{fontSize:18, fontWeight:800}}>Simple, transparent pricing</h2>
        <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:15, marginTop:15}}><h3>Starter - Free</h3><p style={{fontSize:12, color:'#555'}}>Essential tools for single communities</p><button style={{width:'100%', background:'#111', color:'white', padding:10, borderRadius:8, border:'none', marginTop:10}}>Start Free</button></div>
        <div style={{background:green, color:'white', borderRadius:12, padding:15, marginTop:10}}><h3>Growth - ₦2,000/month</h3><p style={{fontSize:12}}>Advanced automation for expanding communities</p><button style={{width:'100%', background:'white', color:green, padding:10, borderRadius:8, border:'none', marginTop:10, fontWeight:700}}>Start Trial</button></div>
      </section>

      <section id="contact" style={{padding:'30px 15px'}}>
        <h2 style={{fontSize:20, fontWeight:800, textAlign:'center'}}>Contact Us</h2>
        <input placeholder="Full Name" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:15}} />
        <input placeholder="Email" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:10}} />
        <textarea placeholder="Message..." style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #ddd', marginTop:10, height:70}}></textarea>
        <button style={{width:'100%', background:'#111', color:'white', padding:12, borderRadius:8, border:'none', marginTop:10, fontWeight:600}}>Send Message</button>
        <div style={{marginTop:20, fontSize:13, lineHeight:1.6}}>
          <b>Contact Information</b><br/>Email: foodbridge.nigeria@gmail.com<br/>Phone: +234 816 383 1822<br/>Address: Kogolada, Gwagwalada, Abuja<br/><br/>Need immediate help? Mon-Fri 9am-6pm
        </div>
      </section>

      <footer id="support" style={{background:'#111', color:'#999', padding:'25px 15px', fontSize:12}}>
        <h3 style={{color:'white'}}>FoodBridge</h3>
        <p>One platform. Total food control. Built for Nigeria.</p>
        <p style={{marginTop:10}}>© 2026 FoodBridge. All rights reserved.</p>
      </footer>

      <button onClick={()=> setChatOpen(!chatOpen)} style={{position:'fixed', bottom:20, right:20, width:52, height:52, borderRadius:'50%', background:green, color:'white', border:'none', fontSize:22}}>💬</button>
      {chatOpen && <div style={{position:'fixed', bottom:80, right:15, width:280, background:'white', borderRadius:12, padding:12, boxShadow:'0 8px 24px rgba(0,0,0,0.2)', border:'1px solid #eee'}}><b style={{fontSize:13}}>FoodBridge AI</b><p style={{fontSize:11, color:'#666'}}>Ask me anything about FoodBridge</p><input placeholder="Type question..." style={{width:'100%', padding:8, borderRadius:20, border:'1px solid #ddd', marginTop:8, fontSize:12}} /></div>}
    </div>
  );
}
