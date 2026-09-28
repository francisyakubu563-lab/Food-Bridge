import { useState } from 'react';
export default function App() {
  const [page,setPage]=useState('home');
  const [menuOpen,setMenuOpen]=useState(false);
  const [solOpen,setSolOpen]=useState(false);
  const green='#166534';
  
  if(page==='login') return (
    <div style={{minHeight:'100vh', background:'#f8fafc', fontFamily:'sans-serif'}}>
      <div style={{textAlign:'center', padding:40, background:'white'}}>
        <div style={{width:70,height:70,background:green,borderRadius:15,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:30,fontWeight:800}}>F</div>
        <h1 style={{color:green}}>FoodBridge</h1>
      </div>
      <div style={{maxWidth:400,margin:'20px auto',padding:20}}>
        <h2>Welcome back to FoodBridge</h2>
        <input placeholder="Email" style={{width:'100%',padding:12,marginTop:15,borderRadius:8,border:'1px solid #ddd'}}/>
        <input placeholder="Password" type="password" style={{width:'100%',padding:12,marginTop:10,borderRadius:8,border:'1px solid #ddd'}}/>
        <button style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',marginTop:15,fontWeight:700}}>Sign In</button>
        <p onClick={()=>setPage('home')} style={{textAlign:'center',marginTop:15,cursor:'pointer'}}>← Back to Home</p>
        <p style={{textAlign:'center',marginTop:10}}>No account? <span onClick={()=>setPage('signup')} style={{color:green,fontWeight:700,cursor:'pointer'}}>Sign up</span></p>
      </div>
    </div>
  );

  if(page==='signup') return (
    <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'sans-serif',padding:40,textAlign:'center'}}>
      <h1 style={{color:green}}>Create FoodBridge Account</h1>
      <div style={{maxWidth:400,margin:'20px auto'}}>
        <input placeholder="Full Name: Francis Yako" style={{width:'100%',padding:12,marginTop:10,borderRadius:8,border:'1px solid #ddd'}}/>
        <input placeholder="Email" style={{width:'100%',padding:12,marginTop:10,borderRadius:8,border:'1px solid #ddd'}}/>
        <input placeholder="Password" type="password" style={{width:'100%',padding:12,marginTop:10,borderRadius:8,border:'1px solid #ddd'}}/>
        <button onClick={()=>setPage('home')} style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',marginTop:15}}>Create Account</button>
      </div>
    </div>
  );

  return (
    <div style={{fontFamily:'Inter,sans-serif',background:'white'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 15px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:10}}>
        <div style={{display:'flex',gap:8,alignItems:'center',fontWeight:800,color:green,fontSize:20}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={()=>setPage('login')} style={{background:'none',border:'none',fontWeight:600}}>Sign In</button>
          <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} style={{background:green,color:'white',border:'none',padding:'8px 14px',borderRadius:8,fontWeight:600}}>Contact us</button>
          <button onClick={()=>setMenuOpen(!menuOpen)} style={{border:'1px solid #ddd',background:'white',borderRadius:8,padding:'5px 9px'}}>☰</button>
        </div>
      </header>

      {menuOpen && <div style={{padding:'0 15px',borderBottom:'1px solid #eee',background:'white'}}>
        <div onClick={()=>setSolOpen(!solOpen)} style={{padding:'15px 0',borderBottom:'1px solid #eee',fontWeight:600}}>Solutions ▾</div>
        {solOpen && <div style={{paddingLeft:15,fontSize:14,color:'#555'}}><div>• Food Donation</div><div>• Waste Tracking</div><div>• Volunteer Connect</div></div>}
        <div onClick={()=>{setMenuOpen(false);document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'15px 0',borderBottom:'1px solid #eee'}}>About</div>
        <div style={{padding:'15px 0',borderBottom:'1px solid #eee'}}>Blog</div>
        <div style={{padding:'15px 0'}}>Support</div>
      </div>}

      <section style={{textAlign:'center',padding:'40px 15px'}}>
        <h1 style={{fontSize:32,fontWeight:900}}>ONE PLATFORM<br/><span style={{color:green}}>TOTAL FOOD CONTROL</span></h1>
        <p style={{color:'#555',margin:'15px auto',maxWidth:500}}>FoodBridge connects food donors, inventory, analytics and AI into one powerful system.</p>
        <button onClick={()=>document.getElementById('how')?.scrollIntoView({behavior:'smooth'})} style={{background:'black',color:'white',padding:'12px 24px',borderRadius:10,border:'none',fontWeight:600}}>Get Started</button>
        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=700" style={{width:'100%',maxWidth:600,marginTop:20,borderRadius:16,border:'1px solid #eee'}} alt="food"/>
      </section>

      <section id="how" style={{padding:'30px 15px',background:'#F5F1E8'}}>
        <h2 style={{fontWeight:800}}>How it works</h2>
        <p>1. Sign Up & Connect - Create account</p>
        <p>2. Sync Your Food - Track surplus</p>
        <p>3. Gain Impact - Reduce waste</p>
      </section>

      <section id="about" style={{padding:'30px 15px'}}>
        <p style={{color:green,fontWeight:700,fontSize:12}}>OUR STORY</p>
        <h2 style={{fontWeight:800}}>Who is FoodBridge?</h2>
        <p style={{fontSize:13,color:'#555'}}>Built by Francis Yako in Nigeria 2026 to solve food waste. Address: Kogolada, Abuja. Phone: 0816-3831822</p>
      </section>

      <section id="contact" style={{padding:'30px 15px',background:'#f8fafc'}}>
        <h2 style={{textAlign:'center',fontWeight:800}}>Contact Us</h2>
        <input placeholder="Full Name" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
        <input placeholder="Email - foodbridge.nigeria@gmail.com" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
        <button style={{width:'100%',background:'black',color:'white',padding:12,borderRadius:8,border:'none',marginTop:10}}>Send Message</button>
        <p style={{marginTop:15,fontSize:13}}>Phone: 0816-3831822<br/>Email: foodbridge.nigeria@gmail.com<br/>Kogolada, Abuja</p>
      </section>
    </div>
  );
}
