import { useState } from 'react';

export default function App(){
  const [menu,setMenu]=useState(false);
  const [sol,setSol]=useState(false);
  const [page,setPage]=useState('home');
  const [openFaq,setOpenFaq]=useState(0);
  const [openHelp,setOpenHelp]=useState(null);
  const [form,setForm]=useState({name:'',email:'',phone:'',subject:'Transportation',message:''});
  const [sent,setSent]=useState(false);
  const green='#166534';

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.message){alert('Please fill name, email and message'); return;}
    setSent(true);
    setTimeout(()=>{setSent(false); setForm({name:'',email:'',phone:'',subject:'Transportation',message:''})},3000);
  };

  if(page==='solutions'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}>
          <div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>Back</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:1}}>OUR SOLUTIONS</p>
          <h1 style={{fontSize:26,fontWeight:900,marginTop:8}}>Professional Food Logistics</h1>
          <div style={{marginTop:20,display:'grid',gap:14}}>
            {[
              {t:'Personal & Family Food Delivery', d:'Send foodstuff to loved ones anywhere in Nigeria. Drop at branch, provide recipient details, we transport safely.'},
              {t:'Student Food Support', d:'Parents with Family Account send to Student Account. Because a box of food is home in a package.'},
              {t:'Business & Organization Logistics', d:'For companies, restaurants, schools, NGOs. Transport to branches, clients, employees.'},
              {t:'Secure Food Storage', d:'Short and long term storage. Extension of your own storage.'},
              {t:'Buy & Sell Marketplace', d:'Buy in small, medium, large, bulk. Sell your farm produce.'},
              {t:'Bulk & Inter-State Transport', d:'Move large quantities across states. 1 bag or 100 bags.'},
            ].map((s,i)=>(
              <div key={i} style={{background:'white',borderRadius:14,padding:16,border:'1px solid #e7e0d0'}}>
                <b style={{color:green}}>{s.t}</b>
                <p style={{fontSize:13,color:'#334155',marginTop:8,lineHeight:1.6}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if(page==='support'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}>
          <div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>Back</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11}}>SUPPORT CENTER</p>
          <h1 style={{fontSize:26,fontWeight:900,marginTop:8}}>How can we help you?</h1>
          <div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>FAQ</h2>
            <div style={{marginTop:12,display:'grid',gap:10}}>
              {[
                {q:'How do I send food to my child in school?', a:'Family/Personal Account to Student Account. Bring to branch, provide child name/school/phone. Child gets SMS with pickup code.'},
                {q:'What account type?', a:'Personal for individuals, Family for families, Student for students, Company for businesses.'},
                {q:'Where to drop off?', a:'Designated branches in Gwagwalada, Abuja and expanding.'},
                {q:'Buy in bulk?', a:'Yes, small, medium, large, bulk quantities.'},
                {q:'Sell produce?', a:'Yes, farmers and suppliers can sell subject to quality/quantity/pricing.'},
                {q:'Cost?', a:'Depends on quantity/weight/distance. Call 0816-383-1822.'},
              ].map((f,i)=>(
                <div key={i} onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{background:i===openFaq?green:'#F5F1E8',color:i===openFaq?'white':'#111',borderRadius:10,padding:12,cursor:'pointer'}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:13}}><span>{f.q}</span><span>{openFaq===i?'-':'+'}</span></div>
                  {openFaq===i && <p style={{fontSize:13,marginTop:10}}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:16,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{marginTop:14,display:'grid',gap:10}}>
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd'}}/>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email *" style={{padding:12,borderRadius:8,border:'1px solid #ddd'}}/>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your message *" rows={4} style={{padding:12,borderRadius:8,border:'1px solid #ddd'}}/>
              <button type="submit" style={{background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800}}>{sent?'Sent!':'Send Message'}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if(page==='blog' || page==='about' || page==='login'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee'}}>
          <div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer'}}>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>Back</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <h1 style={{fontSize:26,fontWeight:900}}>{page==='blog'?'Connecting Food. Bridging Families':page==='about'?'About FoodBridge':'Welcome'}</h1>
          <p style={{marginTop:10,fontSize:14,color:'#334155',lineHeight:1.6}}>FoodBridge is a Nigerian food logistics and storage company. Your Food. Your Destination. Your Choice. Do you Want to Store, Transport or Supplying to FoodBridge?</p>
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
          <button onClick={()=>setMenu(!menu)} style={{border:'1px solid #ddd',background:'white',borderRadius:8,padding:'6px 10px'}}>Menu</button>
        </div>
      </header>

      {menu && (
        <div style={{background:'white',borderBottom:'1px solid #eee',padding:'0 16px'}}>
          <div onClick={()=>setSol(!sol)} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span>Solutions</span><span>{sol?'Up':'Down'}</span></div>
          {sol && <div style={{padding:'0 0 12px 0',display:'grid',gap:8}}>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>Personal and Family Delivery</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>Student Food Support</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>Business Logistics</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>Secure Food Storage</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>Buy and Sell Marketplace</b></div>
          </div>}
          <div onClick={()=>{setMenu(false);setPage('about')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>About</div>
          <div onClick={()=>{setMenu(false);setPage('blog')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Blog</div>
          <div onClick={()=>{setMenu(false);setPage('support')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Support</div>
          <div onClick={()=>setMenu(false)} style={{padding:'18px 0',cursor:'pointer',fontWeight:700,color:green}}>Back to Home</div>
        </div>
      )}

      <div style={{textAlign:'center',padding:'50px 16px 30px',background:'#F5F1E8'}}>
        <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:2}}>FOODBRIDGE NIGERIA GWAGWALADA ABUJA</p>
        <h1 style={{fontSize:36,fontWeight:900,lineHeight:1.05,marginTop:12}}>
          CONNECTING FOOD.<br/>
          <span style={{color:green}}>BRIDGING FAMILIES.</span>
        </h1>
        <h2 style={{fontSize:16,fontWeight:800,marginTop:14,lineHeight:1.4}}>
          Do you Want to Store, Do you Want to Transport or are you Supplying to FoodBridge?
        </h2>
        <p style={{color:'#334155',fontSize:15,maxWidth:520,margin:'18px auto',lineHeight:1.6}}>
          FoodBridge makes it easier, safer, faster and more affordable to transport, store, buy and sell foodstuff across Nigeria. Whether you are a mother sending food to your child in school, a family supporting loved ones, or a business moving supplies - we bridge the gap.
        </p>
        <p style={{fontWeight:800,fontSize:14,marginTop:10,color:'#111827'}}>Your Food. Your Destination. Your Choice.</p>
        <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:20}}>
          <button style={{background:green,color:'white',padding:'13px 26px',borderRadius:10,border:'none',fontWeight:700}}>Get Started</button>
          <button onClick={()=>{setPage('about')}} style={{background:'white',color:green,padding:'13px 26px',borderRadius:10,border:'1px solid green',fontWeight:700}}>How It Works</button>
        </div>
        <div style={{margin:'30px auto 0',maxWidth:640,borderRadius:18,overflow:'hidden',border:'1px solid #e2e8f0'}}>
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900" style={{width:'100%'}} alt="food"/>
          <div style={{background:'white',padding:12,display:'flex',justifyContent:'space-between',fontSize:12,fontWeight:700}}>
            <span>Deposit at Branch</span>
            <span>We Transport</span>
            <span>Pickup with Code</span>
          </div>
        </div>
      </div>

      <div style={{padding:'40px 16px',background:'white'}}>
        <h2 style={{fontSize:22,fontWeight:800,textAlign:'center'}}>One FoodBridge, Multiple Solutions</h2>
        <p style={{textAlign:'center',fontSize:13,color:'#64748b',marginTop:8}}>FoodBridge - Connecting Food, People and Places</p>
        <div style={{display:'grid',gap:12,marginTop:20}}>
          <div style={{background:'#F5F1E8',border:'1px solid #e7e0d0',borderRadius:12,padding:16}}><b>Transportation and Delivery</b><p style={{fontSize:13,color:'#475569',marginTop:6}}>Deposit foodstuff, provide sender and recipient details, we transport to pickup location.</p></div>
          <div style={{background:'#F5F1E8',border:'1px solid #e7e0d0',borderRadius:12,padding:16}}><b>Secure Storage</b><p style={{fontSize:13,color:'#475569',marginTop:6}}>Short and long term storage. Bring foodstuff, select Storage, agree duration, collect when needed.</p></div>
          <div style={{background:'#F5F1E8',border:'1px solid #e7e0d0',borderRadius:12,padding:16}}><b>Buy and Sell Marketplace</b><p style={{fontSize:13,color:'#475569',marginTop:6}}>Buy in small, medium, large and bulk. Sell your farm produce.</p></div>
        </div>
      </div>

      <div id="contact" style={{padding:'35px 16px',background:'#F5F1E8'}}>
        <h2 style={{fontWeight:800,textAlign:'center'}}>Contact Us</h2>
        <div style={{marginTop:18,background:'white',padding:14,borderRadius:10,fontSize:13,lineHeight:1.8,border:'1px solid #e7e0d0'}}>
          Email: foodbridge.nigeria@gmail.com<br/>Phone: 0816-383-1822<br/>Location: Gwagwalada, Abuja<br/>Founder: Francis Yakubu
        </div>
      </div>

      <footer style={{background:'white',padding:'25px 16px',borderTop:'1px solid #eee'}}>
        <p style={{fontSize:11,color:'#64748b'}}>2026 FoodBridge. Gwagwalada, Abuja. Founder Francis Yakubu. Connecting Food. Bridging Families.</p>
      </footer>
    </div>
  )
}
