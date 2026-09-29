import { useState } from 'react';

export default function App(){
  const [menu,setMenu]=useState(false);
  const [sol,setSol]=useState(false);
  const [page,setPage]=useState('home');
  const green='#166534';

  if(page==='login'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'40px',textAlign:'center'}}>
          <div style={{width:72,height:72,background:green,borderRadius:16,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:34,fontWeight:900}}>F</div>
          <h1 style={{color:green,marginTop:12}}>FoodBridge</h1>
        </div>
        <div style={{maxWidth:400,margin:'30px auto',background:'white',padding:24,borderRadius:16,border:'1px solid #eee'}}>
          <h2 style={{fontWeight:800}}>Welcome back to FoodBridge</h2>
          <input placeholder="Email" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:15}}/>
          <input placeholder="Password" type="password" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
          <button style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',marginTop:15,fontWeight:700}}>Sign In</button>
          <p onClick={()=>setPage('home')} style={{textAlign:'center',marginTop:15,cursor:'pointer',fontSize:13}}>Back to Home</p>
        </div>
      </div>
    )
  }

  return(
    <div style={{fontFamily:'Inter,sans-serif',background:'white',color:'#111'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}>
        <div style={{display:'flex',alignItems:'center',gap:8,fontWeight:900,fontSize:20,color:green}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button onClick={()=>setPage('login')} style={{background:'none',border:'none',fontWeight:600,fontSize:13}}>Sign In</button>
          <button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} style={{background:green,color:'white',border:'none',padding:'8px 14px',borderRadius:8,fontWeight:600,fontSize:13}}>Contact us</button>
          <button onClick={()=>setMenu(!menu)} style={{border:'1px solid #ddd',background:'white',borderRadius:8,padding:'6px 10px'}}>☰</button>
        </div>
      </header>

      {menu && (
        <div style={{background:'white',borderBottom:'1px solid #eee',padding:'0 16px'}}>
          <div onClick={()=>setSol(!sol)} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span>Solutions</span><span>▾</span></div>
          {sol && <div style={{padding:'0 0 12px 12px',fontSize:14,lineHeight:2.2,color:'#444'}}><div>Food Donation Management</div><div>Waste Tracking and Analytics</div><div>Volunteer Connect</div><div>Community Sharing</div></div>}
          <div onClick={()=>{setMenu(false);document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>About</div>
          <div onClick={()=>{setMenu(false);document.getElementById('blog')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer'}}>Blog</div>
          <div onClick={()=>{setMenu(false);document.getElementById('support')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'18px 0',cursor:'pointer'}}>Support</div>
        </div>
      )}

      <section style={{textAlign:'center',padding:'50px 16px 30px'}}>
        <h1 style={{fontSize:36,fontWeight:900,lineHeight:1.05}}>ONE PLATFORM<br/><span style={{color:green}}>TOTAL FOOD CONTROL</span></h1>
        <p style={{color:'#475569',fontSize:15,maxWidth:520,margin:'18px auto'}}>FoodBridge connects food donors, inventory, analytics and community into one powerful system.</p>
        <button onClick={()=>document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} style={{background:'#111827',color:'white',padding:'13px 26px',borderRadius:10,border:'none',fontWeight:700}}>Get Started</button>
        <div style={{margin:'30px auto 0',maxWidth:640,borderRadius:18,overflow:'hidden',border:'1px solid #e2e8f0'}}>
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900" style={{width:'100%'}} alt="food"/>
        </div>
      </section>

      <section id="about" style={{padding:'45px 16px',background:'#F5F1E8'}}>
        <p style={{color:green,fontWeight:800,fontSize:11}}>ABOUT FOODBRIDGE</p>
        <h2 style={{fontSize:28,fontWeight:900,marginTop:8}}>Connecting Food. Bridging Families.</h2>
        <div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
          <b style={{fontSize:13}}>COMPANY DESCRIPTION</b>
          <p style={{fontSize:14,color:'#334155',lineHeight:1.6,marginTop:8}}>
            FoodBridge is a Nigerian food logistics and storage company created to make it easier, faster, safer, and more affordable to move and preserve foodstuff. We help mothers and families send food to loved ones, especially students living away from home, while providing reliable storage solutions for households, businesses, and large organizations.
          </p>
        </div>
        <div style={{marginTop:14,display:'grid',gap:14}}>
          <div style={{background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <b style={{color:green}}>VISION</b>
            <p style={{fontSize:14,color:'#334155',lineHeight:1.6,marginTop:6}}>
              To become Nigerias most trusted food logistics and storage network, connecting families, businesses, and communities while ensuring that food gets where it is needed safely, affordably, and on time.
            </p>
          </div>
          <div style={{background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <b style={{color:green}}>MISSION</b>
            <p style={{fontSize:14,color:'#334155',lineHeight:1.6,marginTop:6}}>
              To simplify the movement and preservation of food in Nigeria by providing fast, affordable, safe, and reliable transportation and storage solutions for families, students, businesses, and organizations.
            </p>
          </div>
          <div style={{background:'#111827',color:'white',borderRadius:14,padding:18}}>
            <b>CORE PURPOSE</b>
            <p style={{fontSize:14,marginTop:6,color:'#cbd5e1'}}>FoodBridge exists to bridge the gap between where food is available and where it is needed, making food transportation and storage easier, faster, safer, and more affordable for Nigerians.</p>
            <div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,fontSize:12}}>
              <div><span style={{color:'#94a3b8'}}>FOUNDER</span><br/><b>Francis Yakubu</b></div>
              <div><span style={{color:'#94a3b8'}}>LOCATION</span><br/><b>Gwagwalada, Abuja</b></div>
              <div><span style={{color:'#94a3b8'}}>FOUNDED</span><br/><b>2026</b></div>
              <div><span style={{color:'#94a3b8'}}>TAGLINE</span><br/><b>Connecting Food. Bridging Families.</b></div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" style={{padding:'40px 16px'}}>
        <h2 style={{fontSize:22,fontWeight:800,textAlign:'center'}}>Get started in minutes</h2>
        <div style={{marginTop:20,display:'grid',gap:14}}>
          <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>1. Sign Up and Connect</b><p style={{fontSize:13,color:'#64748b'}}>Create your FoodBridge account.</p></div>
          <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>2. Sync Your Food</b><p style={{fontSize:13,color:'#64748b'}}>Send food to loved ones.</p></div>
          <div style={{background:'#f8fafc',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>3. Gain Impact</b><p style={{fontSize:13,color:'#64748b'}}>Safe, affordable, on-time delivery.</p></div>
        </div>
      </section>

      <section id="support" style={{padding:'30px 16px',background:'#f8fafc'}}>
        <h2 style={{fontWeight:800,textAlign:'center'}}>Pricing</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:16}}>
          <div style={{background:'white',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>Starter</b><p style={{fontSize:12}}>FREE</p></div>
          <div style={{background:'#111827',color:'white',borderRadius:12,padding:16}}><b>Growth</b><p style={{fontSize:12}}>5000 per month</p></div>
        </div>
      </section>

      <section id="contact" style={{padding:'35px 16px'}}>
        <h2 style={{fontWeight:800,textAlign:'center'}}>Contact Us</h2>
        <p style={{fontSize:13,textAlign:'center',marginTop:10}}>foodbridge.nigeria@gmail.com | 0816-383-1822 | Gwagwalada, Abuja | Francis Yakubu</p>
      </section>

      <footer style={{background:'#111827',color:'#94a3b8',padding:25,fontSize:12}}>
        <div style={{color:'white',fontWeight:800,fontSize:16}}>FOODBRIDGE</div>
        <p>Connecting Food. Bridging Families. Founder Francis Yakubu, Gwagwalada Abuja 2026.</p>
      </footer>
    </div>
  )
}
