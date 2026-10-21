import { useState } from 'react';

export default function App(){
  const [menu,setMenu]=useState(false);
  const [sol,setSol]=useState(false);
  const [page,setPage]=useState('home');
  const [openFaq,setOpenFaq]=useState(0);
  const [openHelp,setOpenHelp]=useState(null);
  const [form,setForm]=useState({name:'',email:'',phone:'',subject:'Transportation',message:''});
  const [sent,setSent]=useState(false);
  // NEW - for auth
  const [loginForm,setLoginForm]=useState({phone:'',password:''});
  const [regForm,setRegForm]=useState({name:'',phone:'',email:'',password:'',type:'Personal'});
  const [authError,setAuthError]=useState('');
  const green='#166534';

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.phone || !form.message){alert('Please fill name, email, phone and message'); return;}
    setSent(true);
    setTimeout(()=>{setSent(false); setForm({name:'',email:'',phone:'',subject:'Transportation',message:''})},3000);
  };

  const handleRegister=(e)=>{
    e.preventDefault();
    setAuthError('');
    if(!regForm.name || !regForm.phone || !regForm.email || !regForm.password){
      setAuthError('Please fill all fields including phone number'); return;
    }
    if(regForm.phone.length < 10){setAuthError('Enter valid phone number e.g 08163831822'); return;}
    if(regForm.password.length < 6){setAuthError('Password must be at least 6 characters'); return;}
    // HERE YOU CONNECT TO SUPABASE
    // await supabase.auth.signUp({email: regForm.email, password: regForm.password, options:{data:{phone: regForm.phone, full_name: regForm.name}}})
    alert(`Account created for ${regForm.name} - Phone: ${regForm.phone}. Now save to Supabase profiles table with phone column.`);
    setPage('login');
    setRegForm({name:'',phone:'',email:'',password:'',type:'Personal'});
  };

  const handleLogin=(e)=>{
    e.preventDefault();
    setAuthError('');
    if(!loginForm.phone || !loginForm.password){
      setAuthError('Phone number and password are required'); return;
    }
    // HERE YOU CONNECT TO SUPABASE - login with phone
    // const {data} = await supabase.from('profiles').select('*').eq('phone', loginForm.phone).eq('password', loginForm.password)
    alert(`Login with Phone: ${loginForm.phone}`);
  };

  if(page==='register'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #eee'}}>
          <div onClick={()=>setPage('home')} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>setPage('home')} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8,fontSize:13}}>← Home</button>
        </div>
        <div style={{maxWidth:420,margin:'30px auto',background:'white',padding:24,borderRadius:16,border:'1px solid #eee'}}>
          <h2 style={{fontWeight:900,fontSize:22}}>Create Account</h2>
          <p style={{fontSize:13,color:'#64748b',marginTop:4}}>Join FoodBridge - Phone required for pickup SMS</p>
          <form onSubmit={handleRegister} style={{marginTop:18,display:'grid',gap:12}}>
            <input value={regForm.name} onChange={e=>setRegForm({...regForm,name:e.target.value})} placeholder="Full Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            <input value={regForm.phone} onChange={e=>setRegForm({...regForm,phone:e.target.value})} placeholder="Phone Number * e.g 08163831822" type="tel" style={{padding:12,borderRadius:8,border:'1px solid #166534',fontSize:14,background:'#f0fdf4'}}/>
            <input value={regForm.email} onChange={e=>setRegForm({...regForm,email:e.target.value})} placeholder="Email *" type="email" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            <select value={regForm.type} onChange={e=>setRegForm({...regForm,type:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}>
              <option>Personal</option>
              <option>Family</option>
              <option>Student</option>
              <option>Company/Organization</option>
            </select>
            <input value={regForm.password} onChange={e=>setRegForm({...regForm,password:e.target.value})} placeholder="Password * min 6" type="password" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            {authError && <div style={{background:'#fee2e2',color:'#b91c1c',padding:10,borderRadius:8,fontSize:12,fontWeight:600}}>{authError}</div>}
            <button type="submit" style={{background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800,marginTop:4}}>Create Account</button>
            <p style={{textAlign:'center',fontSize:13}}>Already have account? <span onClick={()=>setPage('login')} style={{color:green,fontWeight:800,cursor:'pointer'}}>Sign In</span></p>
          </form>
        </div>
      </div>
    )
  }

  if(page==='login'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'16px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid #eee'}}>
          <div onClick={()=>setPage('home')} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>setPage('home')} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8,fontSize:13}}>← Home</button>
        </div>
        <div style={{maxWidth:400,margin:'30px auto',background:'white',padding:24,borderRadius:16,border:'1px solid #eee'}}>
          <h2 style={{fontWeight:900}}>Welcome back</h2>
          <p style={{fontSize:12,color:'#64748b',marginTop:4}}>Login with phone number used during registration</p>
          <form onSubmit={handleLogin} style={{marginTop:16,display:'grid',gap:10}}>
            <input value={loginForm.phone} onChange={e=>setLoginForm({...loginForm,phone:e.target.value})} placeholder="Phone Number *" type="tel" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #166534',fontSize:14,background:'#f0fdf4'}}/>
            <input value={loginForm.password} onChange={e=>setLoginForm({...loginForm,password:e.target.value})} placeholder="Password *" type="password" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            {authError && <div style={{background:'#fee2e2',color:'#b91c1c',padding:10,borderRadius:8,fontSize:12,fontWeight:600}}>{authError}</div>}
            <button type="submit" style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:700}}>Sign In</button>
            <div style={{background:'#F5F1E8',padding:12,borderRadius:8,textAlign:'center',marginTop:8}}>
              <p style={{fontSize:13}}>Don't have an account?</p>
              <p onClick={()=>setPage('register')} style={{color:green,fontWeight:800,cursor:'pointer',marginTop:4,fontSize:14}}>Create Account →</p>
              <p style={{fontSize:11,color:'#64748b',marginTop:6}}>You need phone number to receive pickup code via SMS</p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // ALL YOUR OTHER PAGES REMAIN SAME - solutions, support, blog, about
  if(page==='solutions'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}>
          <div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:1}}>OUR SOLUTIONS</p>
          <h1 style={{fontSize:26,fontWeight:900,marginTop:8}}>Professional Food Logistics for Every Need</h1>
          <p style={{fontSize:14,color:'#64748b',marginTop:8}}>FoodBridge solutions built for families, students, businesses and communities across Nigeria.</p>
          <div style={{marginTop:20,display:'grid',gap:14}}>
            {[
              {t:'Personal & Family Food Delivery', d:'Send foodstuff to loved ones anywhere in Nigeria. Pack garri, rice, beans, soup, yam, palm oil etc. Drop at FoodBridge branch, provide recipient details. We transport safely to destination branch for pickup. Ideal for parents sending to children, families supporting each other.', i:'👨‍👩‍👧‍👦'},
              {t:'Student Food Support', d:'Special service for students. Parents with Family/Personal Account send foodstuff to Student Account. Fast, affordable, reliable delivery to branches near universities and schools. Because a box of food is home in a package.', i:'🎓'},
              {t:'Business & Organization Logistics', d:'For companies, restaurants, supermarkets, schools, hotels, NGOs. Transport foodstuff to branches, clients, employees, customers, distributors. Bulk handling, tracked delivery, professional receipts and account management.', i:'🏢'},
              {t:'Secure Food Storage', d:'Short-term and long-term storage for individuals, families, companies, suppliers. Safe, organized space when you need extra capacity. Bring foodstuff → Select Storage → Agree duration → Collect when needed. Extension of your own storage.', i:'📦'},
              {t:'Buy & Sell Marketplace', d:'Buy foodstuff in small, medium, large, bulk quantities at FoodBridge. Farmers, suppliers, traders can also sell their produce to us subject to quality and pricing. We buy, store, and transport. One place for all food needs.', i:'🛒'},
              {t:'Bulk & Inter-State Transport', d:'Move large quantities across states. From village to city, city to city. Cost-effective, reliable, designed for Nigerian roads and needs. Whether 1 bag or 100 bags, we bridge the gap.', i:'🚚'},
            ].map((s,i)=>(
              <div key={i} style={{background:'white',borderRadius:14,padding:16,border:'1px solid #e7e0d0'}}>
                <div style={{fontSize:22}}>{s.i}</div>
                <b style={{color:green,marginTop:6,display:'block'}}>{s.t}</b>
                <p style={{fontSize:13,color:'#334155',marginTop:8,lineHeight:1.6}}>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:16,background:'#111827',color:'white',borderRadius:14,padding:18}}>
            <b>Why FoodBridge Solutions?</b>
            <p style={{fontSize:13,color:'#cbd5e1',marginTop:8,lineHeight:1.6}}>✓ Affordable pricing<br/>✓ Safe handling of food<br/>✓ Designated deposit & pickup branches<br/>✓ Account types for every user (Personal, Family, Student, Company)<br/>✓ Tracking and SMS updates<br/>✓ Based in Gwagwalada, Abuja - serving Nigeria</p>
            <p style={{marginTop:12,fontWeight:800,color:'#22c55e'}}>Your Food. Your Destination. Your Choice.</p>
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
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:1}}>SUPPORT CENTER</p>
          <h1 style={{fontSize:26,fontWeight:900,marginTop:8}}>How can we help you?</h1>
          <p style={{fontSize:14,color:'#64748b',marginTop:8}}>Get answers, contact us, and learn how FoodBridge works.</p>
          <div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>Quick Help Guides</h2>
            <div style={{marginTop:12,display:'grid',gap:10}}>
              {[
                {title:'How to Create Account', text:'1. Click Get Started or Sign In\n2. Choose account type: Personal, Family, Student, or Company/Organization\n3. Fill your details: Name, Phone, Email\n4. Create password and verify phone\n5. You are ready to send, store, buy or sell.'},
                {title:'How to Deposit Foodstuff', text:'1. Pack your foodstuff properly (garri, rice, beans, palm oil etc)\n2. Visit nearest FoodBridge branch/deposit location in Abuja\n3. Tell staff if it is for Transport, Storage, or Sale\n4. Provide sender and recipient details\n5. Pay small service fee and get receipt with tracking ID'},
                {title:'How to Pickup / Receive', text:'1. Recipient will get SMS/call with pickup code\n2. Go to designated FoodBridge pickup location\n3. Show ID and pickup code\n4. Confirm and collect your foodstuff\n5. For home delivery (coming soon), we deliver to your doorstep in Abuja.'}
              ].map((h,i)=>(
                <div key={i} onClick={()=>setOpenHelp(openHelp===i?null:i)} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:14}}><span>{i+1}. {h.title}</span><span>{openHelp===i?'−':'+'}</span></div>
                  {openHelp===i && <p style={{fontSize:13,marginTop:8,whiteSpace:'pre-line',color:'#334155',lineHeight:1.6}}>{h.text}</p>}
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:16,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>Frequently Asked Questions</h2>
            <div style={{marginTop:12,display:'grid',gap:10}}>
              {[
                {q:'How do I send foodstuff to my child in school?', a:'Create a Family or Personal Account, and your child should have a Student Account. Pack foodstuff, bring to FoodBridge branch, provide your child’s name, school, phone number. We transport it to our branch near the school. Your child gets SMS with pickup code and collects it.'},
                {q:'What account type should I use?', a:'Personal: For individuals sending/receiving. Family: For families sending to relatives/loved ones. Student: For students receiving from parents/guardians. Company/Organization: For businesses, schools, NGOs, restaurants sending food to branches, clients, employees, customers.'},
                {q:'Where do I drop off and pickup foodstuff?', a:'We operate through designated deposit and pickup locations/branches, currently in Gwagwalada, Abuja and expanding.'},
                {q:'How long can you store my food?', a:'We offer short-term (days/weeks) and long-term (months) storage.'},
                {q:'Can I buy foodstuff in bulk from FoodBridge?', a:'Yes! FoodBridge is also a marketplace. You can buy in small, medium, large, and bulk quantities.'},
                {q:'Can I sell my farm produce to FoodBridge?', a:'Yes. Farmers, suppliers, traders, individuals can bring foodstuff to sell.'},
                {q:'How much does transportation cost?', a:'Cost depends on quantity, weight, distance and destination. Contact us: 0816-383-1822'},
                {q:'How do I track my delivery?', a:'After deposit, you get receipt with tracking ID and SMS updates.'},
              ].map((f,i)=>(
                <div key={i} onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{background:i===openFaq?'#166534':'#F5F1E8',color:i===openFaq?'white':'#111',borderRadius:10,padding:12,cursor:'pointer',transition:'0.2s'}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:13,gap:8}}><span>{f.q}</span><span>{openFaq===i?'−':'+'}</span></div>
                  {openFaq===i && <p style={{fontSize:13,marginTop:10,lineHeight:1.6,color:i===openFaq?'#dcfce7':'#334155'}}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:16,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>Contact Us</h2>
            <p style={{fontSize:13,color:'#64748b',marginTop:4}}>Fill form – we will respond within 24hrs</p>
            <form onSubmit={handleSubmit} style={{marginTop:14,display:'grid',gap:10}}>
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email *" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone *" required style={{padding:12,borderRadius:8,border:'1px solid #166534',fontSize:14,background:'#f0fdf4'}}/>
              </div>
              <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}>
                <option>Transportation</option>
                <option>Storage</option>
                <option>Buying Foodstuff</option>
                <option>Selling Foodstuff</option>
                <option>Other</option>
              </select>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your message *" rows={4} style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
              <button type="submit" style={{background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800}}>{sent?'✓ Sent!':'Send Message'}</button>
              {sent && <div style={{background:'#dcfce7',color:green,padding:10,borderRadius:8,fontSize:13,textAlign:'center',fontWeight:700}}>Thank you! We received your message.</div>}
            </form>
          </div>
        </div>
      </div>
    )
  }

  if(page==='blog'){return(<div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}><header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}><div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div><button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back</button></header><div style={{padding:'20px 16px',background:'#F5F1E8'}}><p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:1}}>FOODBRIDGE BLOG</p><h1 style={{fontSize:26,fontWeight:900,marginTop:8}}>Connecting Food. Bridging Families</h1><p style={{fontSize:13,color:'#64748b',marginTop:10}}>Sept 30, 2026 • By Francis Yakubu, Founder</p><div style={{marginTop:18,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0',fontSize:14,lineHeight:1.7,color:'#334155'}}><p>Food is more than something we eat. In Nigeria, food represents family, care, culture, community, and connection.</p><div style={{marginTop:20,background:'#111827',color:'white',borderRadius:12,padding:16}}><b>Our Promise</b><p style={{marginTop:8,color:'#cbd5e1'}}>At FoodBridge, we believe that logistics should be about more than transportation. It should be about connection.</p><p style={{marginTop:10,fontWeight:800,color:'#22c55e'}}>FoodBridge: Connecting Food. Bridging Families</p></div></div></div></div>)}
  if(page==='about'){return(<div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}><header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white'}}><div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div><button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back</button></header><div style={{padding:'30px 16px',background:'#F5F1E8'}}><p style={{color:green,fontWeight:800,fontSize:11}}>ABOUT US</p><h1 style={{fontSize:28,fontWeight:900,marginTop:8}}>Connecting Food.<br/>Bridging Families.</h1><div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}><b>COMPANY DESCRIPTION</b><p style={{fontSize:14,lineHeight:1.6,marginTop:8,color:'#334155'}}>FoodBridge is a Nigerian food logistics and storage company created to make it easier, faster, safer, and more affordable to move and preserve foodstuff.</p></div></div></div>)}

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
          <div onClick={()=>setSol(!sol)} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span>Solutions</span><span>{sol?'▴':'▾'}</span></div>
          {sol && <div style={{padding:'0 0 12px 0',display:'grid',gap:8}}>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>👨‍👩‍👧‍👦 Personal & Family Delivery</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🎓 Student Food Support</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🏢 Business Logistics</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>📦 Secure Food Storage</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🛒 Buy & Sell Marketplace</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🚚 Bulk Transport</b></div>
          </div>}
          <div onClick={()=>{setMenu(false);setPage('about')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>About</div>
          <div onClick={()=>{setMenu(false);setPage('blog')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Blog</div>
          <div onClick={()=>{setMenu(false);setPage('support')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Support</div>
        </div>
      )}

      <section style={{textAlign:'center',padding:'50px 16px 30px'}}>
        <h1 style={{fontSize:36,fontWeight:900,lineHeight:1.05}}>ONE PLATFORM<br/><span style={{color:green}}>TOTAL FOOD CONTROL</span></h1>
        <p style={{color:'#475569',fontSize:15,maxWidth:520,margin:'18px auto'}}>FoodBridge connects food donors, inventory, analytics and community into one powerful system.</p>
        <button onClick={()=>setPage('register')} style={{background:'#111827',color:'white',padding:'13px 26px',borderRadius:10,border:'none',fontWeight:700,cursor:'pointer'}}>Get Started</button>
        <p style={{fontSize:12,color:'#64748b',marginTop:8}}>No account? You will be asked to create one with phone number</p>
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
        <p style={{fontSize:11,color:'#64748b'}}>© 2026 FoodBridge. Gwagwalada, Abuja. Founder Francis Yakubu.</p>
      </footer>
    </div>
  )
}
