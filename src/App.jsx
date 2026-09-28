import { useState } from 'react';

export default function App(){
  const [page,setPage]=useState('home');
  const [menu,setMenu]=useState(false);
  const [sol,setSol]=useState(false);
  const green='#166534';

  if(page==='login'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'35px',textAlign:'center',borderBottom:'1px solid #eee'}}>
          <div style={{width:70,height:70,background:green,borderRadius:14,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:32,fontWeight:800}}>F</div>
          <h1 style={{color:green,marginTop:10}}>FoodBridge</h1>
          <p style={{color:'#64748b',fontSize:14}}>One platform. Total food control.</p>
        </div>
        <div style={{maxWidth:400,margin:'30px auto',padding:20}}>
          <h2 style={{fontWeight:800}}>Welcome back to FoodBridge</h2>
          <p style={{fontSize:13,color:'#64748b'}}>Sign in to continue to your dashboard</p>
          <input placeholder="name@mail.com" style={{width:'100%',padding:13,borderRadius:10,border:'1px solid #ddd',marginTop:15}}/>
          <input placeholder="Password" type="password" style={{width:'100%',padding:13,borderRadius:10,border:'1px solid #ddd',marginTop:10}}/>
          <button style={{width:'100%',background:green,color:'white',padding:13,borderRadius:10,border:'none',fontWeight:700,marginTop:15}}>Sign In</button>
          <p style={{textAlign:'center',marginTop:15,fontSize:14}}>New? <span onClick={()=>setPage('signup')} style={{color:green,fontWeight:700,cursor:'pointer'}}>Sign up</span></p>
          <p onClick={()=>setPage('home')} style={{textAlign:'center',fontSize:13,color:'#888',marginTop:20,cursor:'pointer'}}>← Back to Home</p>
        </div>
      </div>
    )
  }

  if(page==='signup'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif',padding:30,textAlign:'center'}}>
        <h1 style={{color:green,fontWeight:800}}>Create FoodBridge Account</h1>
        <p style={{fontSize:13,color:'#666'}}>Manage your food donations and waste</p>
        <div style={{maxWidth:400,margin:'20px auto',textAlign:'left'}}>
          <input placeholder="Full Name - Francis Yako" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
          <input placeholder="Email" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
          <input placeholder="Password" type="password" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
          <button onClick={()=>setPage('home')} style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',marginTop:15,fontWeight:700}}>Create Account</button>
          <p onClick={()=>setPage('home')} style={{textAlign:'center',fontSize:13,color:'#888',marginTop:15,cursor:'pointer'}}>← Back to Home</p>
        </div>
      </div>
    )
  }

  return(
    <div style={{fontFamily:'Inter,sans-serif',background:'white'}}>
      <header style={{position:'sticky',top:0,zIndex:50,background:'white',borderBottom:'1px solid #eee',padding:'12px 15px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:800,fontSize:20,color:green}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:7,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={()=>setPage('login')} style={{background:'none',border:'none',fontWeight:600,fontSize:13,cursor:'pointer'}}>Sign In</button>
          <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} style={{background:green,color:'white',border:'none',padding:'8px 14px',borderRadius:8,fontWeight:600,fontSize:13,cursor:'pointer'}}>Contact us</button>
          <button onClick={()=>setMenu(!menu)} style={{border:'1px solid #ddd',background:'white',borderRadius:8,padding:'6px 10px',cursor:'pointer'}}>☰</button>
        </div>
      </header>

      {menu && (
        <div style={{background:'white',borderBottom:'1px solid #eee',padding:'0 15px',position:'sticky',top:57,zIndex:40}}>
          <div onClick={()=>setSol(!sol)} style={{padding:'16px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}>Solutions <span>▾</span></div>
          {sol && <div style={{padding:'10px 15px',fontSize:14,color:'#444',lineHeight:2}}><div>• Food Donation</div><div>• Waste Tracking</div><div>• Volunteer Connect</div><div>• Community Sharing</div></div>}
          <div onClick={()=>{setMenu(false);document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'16px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer'}}>About</div>
          <div onClick={()=>{setMenu(false);document.getElementById('blog')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'16px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer'}}>Blog</div>
          <div onClick={()=>{setMenu(false);document.getElementById('support')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'16px 0',cursor:'pointer'}}>Support</div>
        </div>
      )}

      <section style={{textAlign:'center',padding:'45px 15px 20px'}}>
        <h1 style={{fontSize:34,fontWeight:900,lineHeight:1.1}}>ONE PLATFORM<br/><span style={{color:green}}>TOTAL FOOD CONTROL</span></h1>
        <p style={{color:'#475569',fontSize:15,maxWidth:500,margin:'18px auto'}}>FoodBridge creates a platform that connects food donors, volunteers and communities into one powerful system to reduce waste and fight hunger in Nigeria.</p>
        <button onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} style={{background:'#111',color:'white',padding:'13px 28px',borderRadius:10,border:'none',fontWeight:600,cursor:'pointer'}}>Get Started</button>
        <div style={{margin:'25px auto 0',maxWidth:600,borderRadius:16,overflow:'hidden',border:'1px solid #e2e8f0'}}>
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800" style={{width:'100%'}} alt="food"/>
        </div>
      </section>

      <section id="about" style={{padding:'35px 15px',background:'#F5F1E8'}}>
        <p style={{color:green,fontWeight:700,fontSize:11,letterSpacing:1}}>OUR STORY</p>
        <h2 style={{fontSize:22,fontWeight:800,marginTop:5}}>Who is FoodBridge?</h2>
        <p style={{fontSize:14,color:'#444',lineHeight:1.6,marginTop:10}}>FoodBridge is built to help Nigeria manage surplus food with clarity and confidence. We unify donation, tracking and sharing into one workspace.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:15,fontSize:13}}><div><b>FOUNDED</b><br/>2026</div><div><b>FOUNDER</b><br/>Francis Yako</div><div><b>LOCATION</b><br/>Nigeria</div><div><b>ADDRESS</b><br/>Kogolada, Abuja</div></div>
      </section>

      <section id="blog" style={{padding:'30px 15px'}}>
        <h2 style={{fontWeight:800}}>Everything you need to run food rescue</h2>
        <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:12,padding:15,marginTop:12}}><b>Centralized Dashboard</b><p style={{fontSize:13,color:'#666'}}>All donations in real-time.</p></div>
        <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:12,padding:15,marginTop:10}}><b>Donation & Inventory Sync</b><p style={{fontSize:13,color:'#666'}}>Automatic sync across locations.</p></div>
      </section>

      <section id="support" style={{padding:'30px 15px',background:'#f8fafc'}}>
        <h2 style={{fontWeight:800,textAlign:'center'}}>Contact Us</h2>
        <input placeholder="Full Name" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:15}}/>
        <input placeholder="foodbridge.nigeria@gmail.com" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
        <textarea placeholder="Message..." style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10,height:70}}></textarea>
        <button style={{width:'100%',background:'#111',color:'white',padding:12,borderRadius:8,border:'none',marginTop:10,fontWeight:600}}>Send Message</button>
        <div id="contact" style={{marginTop:20,fontSize:13,lineHeight:1.8}}><b>Contact Info</b><br/>Email: foodbridge.nigeria@gmail.com<br/>Phone: 0816-383-1822<br/>Kogolada, Gwagwalada, Abuja</div>
      </section>

      <footer style={{background:'#111',color:'#999',padding:25, fontSize:12}}>
        <h3 style={{color:'white'}}>FoodBridge</h3>
        <p>© 2026 FoodBridge. Built for Nigeria.</p>
      </footer>
    </div>
  )
}
