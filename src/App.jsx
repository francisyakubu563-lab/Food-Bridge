import { useState } from 'react';

export default function App(){
  const [menu,setMenu]=useState(false);
  const [sol,setSol]=useState(false);
  const [page,setPage]=useState('home');
  const green='#166534';

  if(page==='blog'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}>
          <div onClick={()=>setPage('home')} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>setPage('home')} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back Home</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:1}}>FOODBRIDGE BLOG</p>
          <h1 style={{fontSize:26,fontWeight:900,marginTop:8,lineHeight:1.2}}>Connecting Food. Bridging Families: Building a Smarter Future for Food Logistics in Nigeria</h1>
          <p style={{fontSize:13,color:'#64748b',marginTop:10}}>Sept 30, 2026 • By Francis Yakubu, Founder</p>

          <div style={{marginTop:18,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0',fontSize:14,lineHeight:1.7,color:'#334155'}}>
            <p>Food is more than something we eat. In Nigeria, food represents family, care, culture, community, and connection.</p>
            <p style={{marginTop:12}}>A mother preparing a carefully packed meal for her child in university. A family sending foodstuff to a loved one living in another state. A restaurant moving supplies from one location to another. A business looking for a safe place to preserve its food products. These everyday situations all have one thing in common: food needs to move from where it is available to where it is needed.</p>
            <p style={{marginTop:12}}>Yet, moving and storing food in Nigeria can sometimes be challenging. Distance, transportation costs, delays, poor handling, limited storage facilities, and concerns about food preservation can make a simple task unnecessarily stressful.</p>
            <p style={{marginTop:12}}><b>This is where FoodBridge comes in.</b></p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Bridging the Gap Between Food and the People Who Need It</h3>
            <p style={{marginTop:8}}>FoodBridge is a Nigerian food logistics and storage company created with a simple but powerful purpose: to make the movement and preservation of food easier, faster, safer, and more affordable.</p>
            <p style={{marginTop:8}}>We are building a bridge between homes, families, businesses, communities, and the places where food is needed.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>When Food Becomes a Message of Love</h3>
            <p style={{marginTop:8}}>For many Nigerian families, sending food to a loved one is an expression of care. A parent may prepare garri, rice, beans, soup, yam, palm oil, dried food, snacks, or other essentials and send them to a child studying far from home.</p>
            <p style={{marginTop:8}}>But arranging transportation can be difficult. Who will carry it? How much will transportation cost? Will it arrive safely? Will it arrive on time?</p>
            <p style={{marginTop:8}}><b>FoodBridge is designed to make this process simpler.</b></p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Reliable Food Logistics for a Growing Nigeria</h3>
            <p style={{marginTop:8}}>Nigeria is a country of movement. People move between villages, towns and cities for education, employment, business, family responsibilities and countless other reasons. As people move, food and food products need to move with them.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>More Than Transportation: The Importance of Food Storage</h3>
            <p style={{marginTop:8}}>Moving food is only one part of the challenge. Sometimes, food needs to be stored before it reaches its final destination. FoodBridge is working to provide reliable storage solutions that help customers preserve their foodstuff while making better use of their resources.</p>
            <p style={{marginTop:8}}><b>Where should my food be stored? and How can it get where it needs to go?</b> By combining logistics and storage, FoodBridge aims to provide a more complete solution.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Supporting Students and Families</h3>
            <p style={{marginTop:8}}>Students living away from home are an important part of the FoodBridge story. For many Nigerian parents, sending food to a child in school is a familiar responsibility.</p>
            <p style={{marginTop:8}}><i>Because sometimes, a box of food is more than a delivery. It is home in a package.</i></p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Helping Businesses Move Smarter</h3>
            <p style={{marginTop:8}}>FoodBridge is also designed for businesses. Our long-term vision extends to serving: Farmers, Restaurants, Supermarkets, Schools, Hotels, Food manufacturers, NGOs, Families and Large organizations.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Affordability Matters</h3>
            <p style={{marginTop:8}}>A logistics service is only useful when people can realistically afford it. At FoodBridge, affordability is part of our mission. We believe that moving food should not have to be unnecessarily expensive.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Safety and Reliability at Every Step</h3>
            <p style={{marginTop:8}}>Food is different from ordinary cargo. It requires proper consideration because the quality and condition of food matter. That is why safety and reliability are central to the FoodBridge vision.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>Building Trust, One Delivery at a Time</h3>
            <p style={{marginTop:8}}>Trust is not created by a slogan. It is built through consistent service. Every successful delivery contributes to the reputation of FoodBridge.</p>

            <h3 style={{marginTop:20,fontWeight:800,color:'#111'}}>A Bridge for the Future</h3>
            <p style={{marginTop:8}}>We envision a future where distance does not make sending food unnecessarily difficult. A future where businesses can access dependable food logistics. A future where families can send food to loved ones with greater confidence.</p>

            <div style={{marginTop:20,background:'#111827',color:'white',borderRadius:12,padding:16}}>
              <b>Our Promise</b>
              <p style={{marginTop:8,color:'#cbd5e1'}}>At FoodBridge, we believe that logistics should be about more than transportation. It should be about connection. It should connect a mother to her child. A farmer to a market. A business to its customers.</p>
              <p style={{marginTop:10,fontWeight:800,color:green}}>FoodBridge: Do you Want to Store, Do you Want to Transport or are you Supplying to Foodbridge?</p>
              <p style={{marginTop:6,fontWeight:800}}>Connecting Food. Bridging Families</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(page==='about'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white'}}>
          <div onClick={()=>setPage('home')} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>setPage('home')} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back Home</button>
        </header>
        <div style={{padding:'30px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11}}>ABOUT US</p>
          <h1 style={{fontSize:28,fontWeight:900,marginTop:8}}>Connecting Food.<br/>Bridging Families.</h1>
          <div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <b>COMPANY DESCRIPTION</b>
            <p style={{fontSize:14,lineHeight:1.6,marginTop:8,color:'#334155'}}>FoodBridge is a Nigerian food logistics and storage company created to make it easier, faster, safer, and more affordable to move and preserve foodstuff.</p>
          </div>
          <div style={{marginTop:14,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <b style={{color:green}}>VISION</b>
            <p style={{fontSize:14,lineHeight:1.6,marginTop:6,color:'#334155'}}>To become Nigerias most trusted food logistics and storage network.</p>
          </div>
          <div style={{marginTop:14,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <b style={{color:green}}>MISSION</b>
            <p style={{fontSize:14,lineHeight:1.6,marginTop:6,color:'#334155'}}>To simplify the movement and preservation of food in Nigeria.</p>
          </div>
          <div style={{marginTop:14,background:'#111827',color:'white',borderRadius:14,padding:18}}>
            <b>CORE PURPOSE</b>
            <p style={{fontSize:14,marginTop:6,color:'#cbd5e1'}}>FoodBridge exists to bridge the gap between where food is available and where it is needed.</p>
            <div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,fontSize:13}}>
              <div><span style={{color:'#94a3b8'}}>FOUNDER</span><br/><b>Francis Yakubu</b></div>
              <div><span style={{color:'#94a3b8'}}>LOCATION</span><br/><b>Gwagwalada, Abuja</b></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(page==='login'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'40px',textAlign:'center'}}><div style={{width:72,height:72,background:green,borderRadius:16,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:34,fontWeight:900}}>F</div><h1 style={{color:green,marginTop:12}}>FoodBridge</h1></div>
        <div style={{maxWidth:400,margin:'30px auto',background:'white',padding:24,borderRadius:16,border:'1px solid #eee'}}>
          <h2 style={{fontWeight:800}}>Welcome back</h2>
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
        <div style={{background:'white',borderBottom:'1px solid #eee',padding:'0 16px',position:'sticky',top:57,zIndex:90}}>
          <div onClick={()=>setSol(!sol)} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span>Solutions</span><span>▾</span></div>
          {sol && <div style={{padding:'0 0 12px 12px',fontSize:14,lineHeight:2.2,color:'#444'}}><div>Food Donation Management</div><div>Waste Tracking and Analytics</div><div>Volunteer Connect</div><div>Community Sharing</div></div>}
          <div onClick={()=>{setMenu(false);setPage('about')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>About</div>
          <div onClick={()=>{setMenu(false);setPage('blog')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Blog</div>
          <div onClick={()=>{setMenu(false);document.getElementById('support')?.scrollIntoView({behavior:'smooth'})}} style={{padding:'18px 0',cursor:'pointer'}}>Support</div>
        </div>
      )}

      <section style={{textAlign:'center',padding:'50px 16px 30px'}}>
        <h1 style={{fontSize:36,fontWeight:900,lineHeight:1.05}}>ONE PLATFORM<br/><span style={{color:green}}>TOTAL FOOD CONTROL</span></h1>
        <p style={{color:'#475569',fontSize:15,maxWidth:520,margin:'18px auto'}}>FoodBridge connects food donors, inventory, analytics and community into one powerful system.</p>
        <button style={{background:'#111827',color:'white',padding:'13px 26px',borderRadius:10,border:'none',fontWeight:700}}>Get Started</button>
        <div style={{margin:'30px auto 0',maxWidth:640,borderRadius:18,overflow:'hidden',border:'1px solid #e2e8f0'}}>
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900" style={{width:'100%'}} alt="food"/>
        </div>
      </section>

      <section id="features" style={{padding:'40px 16px',background:'#F5F1E8'}}>
        <h2 style={{fontSize:22,fontWeight:800}}>Everything you need to run food rescue</h2>
        <div style={{display:'grid',gap:12,marginTop:20}}>
          <div style={{background:'white',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>Centralized Dashboard</b><p style={{fontSize:13,color:'#64748b',marginTop:6}}>All donations in real-time.</p></div>
          <div style={{background:'white',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>Donation and Inventory Sync</b><p style={{fontSize:13,color:'#64748b',marginTop:6}}>Keep food fresh across Abuja.</p></div>
          <div style={{background:'white',border:'1px solid #e2e8f0',borderRadius:12,padding:16}}><b>Analytics and Reports</b><p style={{fontSize:13,color:'#64748b',marginTop:6}}>Track waste reduced, people fed.</p></div>
        </div>
      </section>

      <section id="contact" style={{padding:'35px 16px'}}>
        <h2 style={{fontWeight:800,textAlign:'center'}}>Contact Us</h2>
        <div style={{marginTop:18,background:'#F5F1E8',padding:14,borderRadius:10,fontSize:13,lineHeight:1.8}}>
          Email: foodbridge.nigeria@gmail.com<br/>Phone: 0816-383-1822<br/>Location: Gwagwalada, Abuja
        </div>
      </section>

      <footer style={{background:'white',padding:'25px 16px',borderTop:'1px solid #eee'}}>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <a href="https://www.tiktok.com/@foodbridge.ng.lim?_r=1&_t=ZS-9A5NZ6zEsQG" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
            <div style={{width:36,height:36,background:'black',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'white',fontWeight:900,fontSize:20}}>♪</span></div>
            <span style={{color:'black',fontWeight:700,fontSize:18}}>TikTok</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61594798832703&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
            <div style={{width:36,height:36,background:'#1877F2',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:900,fontSize:22}}>f</div>
            <span style={{color:'#1877F2',fontWeight:700,fontSize:18}}>facebook</span>
          </a>
          <a href="https://www.youtube.com/@foodbridgeNigeria" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
            <div style={{width:36,height:36,background:'#FF0000',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:0,height:0,borderLeft:'10px solid white',borderTop:'6px solid transparent',borderBottom:'6px solid transparent',marginLeft:2}}></div></div>
            <span style={{color:'black',fontWeight:700,fontSize:18}}>YouTube</span>
          </a>
        </div>
        <p style={{marginTop:20,fontSize:11,color:'#64748b'}}>© 2026 FoodBridge. Gwagwalada, Abuja. Founder Francis Yakubu.</p>
      </footer>
    </div>
  )
}
