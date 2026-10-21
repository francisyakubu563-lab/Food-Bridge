import { useState, useRef } from 'react';

export default function App(){
  const [menu,setMenu]=useState(false);
  const [sol,setSol]=useState(false);
  const [page,setPage]=useState('home');
  const [openFaq,setOpenFaq]=useState(0);
  const [openHelp,setOpenHelp]=useState(null);
  const [form,setForm]=useState({name:'',email:'',phone:'',subject:'Transportation',message:''});
  const [sent,setSent]=useState(false);
  const green='#166534';

  const [regForm,setRegForm]=useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:'',accountType:'',serviceType:''});
  const [showAccDrop,setShowAccDrop]=useState(false);
  const [showServiceDrop,setShowServiceDrop]=useState(false);
  const [showPass,setShowPass]=useState(false);
  const [showConfirmPass,setShowConfirmPass]=useState(false);
  const [faceImage,setFaceImage]=useState(null);
  const [faceVerified,setFaceVerified]=useState(false);
  const [cameraOn,setCameraOn]=useState(false);
  const [livenessMsg,setLivenessMsg]=useState('Click Start Camera');
  const [otpCode,setOtpCode]=useState('');
  const [activeTab,setActiveTab]=useState('shipments');
  const videoRef=useRef(null);
  const canvasRef=useRef(null);

  const accountOptions=[
    {id:'Personal', label:'Personal Account', desc:'Individual sending/receiving foodstuff'},
    {id:'Family', label:'Family Account', desc:'Family sending to relatives & loved ones'},
    {id:'Student', label:'Student Account', desc:'Student receiving from parents/guardians'},
    {id:'Company/Organization', label:'Company / Organization', desc:'Business, School, NGO, Restaurant, Hotel'},
  ];
  const serviceOptions=[
    {id:'Transportation', label:'Transportation & Delivery', desc:'Send foodstuff to destination'},
    {id:'Storage', label:'Secure Food Storage', desc:'Short & long-term storage'},
    {id:'Buying', label:'Buying Foodstuff', desc:'Buy small, medium, large, bulk'},
    {id:'Selling', label:'Selling / Supplying to FoodBridge', desc:'Sell farm produce / supply food'},
  ];

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.message){alert('Please fill name, email and message'); return;}
    setSent(true);
    setTimeout(()=>{setSent(false); setForm({name:'',email:'',phone:'',subject:'Transportation',message:''})},3000);
  };

  const handleRegister=(e)=>{
    e.preventDefault();
    if(!regForm.firstName || !regForm.lastName || !regForm.email || !regForm.password || !regForm.accountType || !regForm.serviceType){
      alert('Please fill all fields including Account Type'); return;
    }
    if(regForm.password !== regForm.confirmPassword){
      alert('Passwords do not match'); return;
    }
    setPage('faceVerify');
    setLivenessMsg('Ready to verify your face');
    setFaceVerified(false);
    setFaceImage(null);
  };

  const startCamera=async()=>{
    try{
      setCameraOn(true);
      setLivenessMsg('Starting camera... please allow permission');
      const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}});
      if(videoRef.current){ videoRef.current.srcObject=stream; }
      setTimeout(()=>setLivenessMsg('Good! Look straight - Blink 2 times'),1200);
    }catch(err){ alert('Camera permission needed'); setCameraOn(false); }
  };
  const captureFace=()=>{
    if(!videoRef.current) return;
    const canvas=canvasRef.current; const video=videoRef.current;
    canvas.width=video.videoWidth; canvas.height=video.videoHeight;
    canvas.getContext('2d').drawImage(video,0,0);
    setFaceImage(canvas.toDataURL('image/jpeg')); setFaceVerified(true);
    setLivenessMsg('✅ Face Verified'); const stream=video.srcObject;
    if(stream){ stream.getTracks().forEach(t=>t.stop()); } setCameraOn(false);
  };
  const proceedToOtp=()=>{
    if(!faceVerified){alert('Verify face first'); return;}
    alert(`OTP sent to ${regForm.email} (Demo: 123456)`); setPage('otpVerify');
  };

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
          <div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>Quick Help Guides</h2>
            <div style={{marginTop:12,display:'grid',gap:10}}>
              <div onClick={()=>setOpenHelp(openHelp===0?null:0)} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:14}}><span>1. How to Create Account</span><span>{openHelp===0?'−':'+'}</span></div>{openHelp===0 && <p style={{fontSize:13,marginTop:8,whiteSpace:'pre-line',color:'#334155',lineHeight:1.6}}>1. Click Get Started or Sign In 2. Choose account type 3. Fill details 4. Create password 5. Ready to send.</p>}</div>
              <div onClick={()=>setOpenHelp(openHelp===1?null:1)} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:14}}><span>2. How to Deposit</span><span>{openHelp===1?'−':'+'}</span></div>{openHelp===1 && <p style={{fontSize:13,marginTop:8,whiteSpace:'pre-line',color:'#334155',lineHeight:1.6}}>Pack foodstuff, visit branch, tell staff Transport/Storage/Sale, provide details, pay fee, get receipt.</p>}</div>
              <div onClick={()=>setOpenHelp(openHelp===2?null:2)} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:14}}><span>3. How to Pickup</span><span>{openHelp===2?'−':'+'}</span></div>{openHelp===2 && <p style={{fontSize:13,marginTop:8,whiteSpace:'pre-line',color:'#334155',lineHeight:1.6}}>Recipient gets SMS with code, go to pickup location, show ID and code, collect.</p>}</div>
            </div>
          </div>
          <div style={{marginTop:16,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontWeight:800,color:green}}>Frequently Asked Questions</h2>
            <div style={{marginTop:12,display:'grid',gap:10}}>
              {[
                {q:'How do I send foodstuff to my child in school?', a:'Create Family/Personal Account, child has Student Account, bring to branch, provide name/school/phone, we transport to branch near school.'},
                {q:'What account type should I use?', a:'Personal, Family, Student, Company/Organization - choose what describes you.'},
                {q:'Where do I drop off and pickup?', a:'Designated branches in Gwagwalada, Abuja and expanding.'},
                {q:'How long can you store?', a:'Short-term and long-term, agree duration and fee.'},
                {q:'Can I buy in bulk?', a:'Yes, small, medium, large, bulk.'},
                {q:'Can I sell farm produce?', a:'Yes, bring produce, we inspect and pay.'},
                {q:'How much cost?', a:'Depends on quantity/weight/distance - affordable. Call 0816-383-1822.'},
                {q:'How track delivery?', a:'Receipt with tracking ID and SMS updates. Email foodbridge.nigeria@gmail.com'},
              ].map((f,i)=>(
                <div key={i} onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{background:i===openFaq?'#166534':'#F5F1E8',color:i===openFaq?'white':'#111',borderRadius:10,padding:12,cursor:'pointer'}}>
                  <div style={{display:'flex',justifyContent:'space-between',fontWeight:700,fontSize:13,gap:8}}><span>{f.q}</span><span>{openFaq===i?'−':'+'}</span></div>
                  {openFaq===i && <p style={{fontSize:13,marginTop:10,lineHeight:1.6,color:i===openFaq?'#dcfce7':'#334155'}}>{f.a}</p>}
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
              <button type="submit" style={{background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800}}>{sent?'✓ Sent!':'Send Message'}</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  if(page==='blog'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'white',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',borderBottom:'1px solid #eee',position:'sticky',top:0,background:'white',zIndex:99}}>
          <div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back</button>
        </header>
        <div style={{padding:'20px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:1}}>FOODBRIDGE BLOG</p>
          <h1 style={{fontSize:26,fontWeight:900,marginTop:8,lineHeight:1.2}}>Connecting Food. Bridging Families</h1>
          <div style={{marginTop:18,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0',fontSize:14,lineHeight:1.7,color:'#334155'}}>
            <p>Food is more than something we eat. In Nigeria, food represents family, care, culture, community, and connection.</p>
            <p style={{marginTop:12}}><b>This is where FoodBridge comes in.</b></p>
            <p style={{marginTop:8}}>FoodBridge is a Nigerian food logistics and storage company created with a simple but powerful purpose: to make the movement and preservation of food easier, faster, safer, and more affordable.</p>
            <div style={{marginTop:20,background:'#111827',color:'white',borderRadius:12,padding:16}}>
              <b>Our Promise</b>
              <p style={{marginTop:8,color:'#cbd5e1'}}>FoodBridge: Do you Want to Store, Do you Want to Transport or are you Supplying to Foodbridge? Connecting Food. Bridging Families</p>
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
          <div onClick={()=>{setPage('home'); setMenu(true);}} style={{fontWeight:900,color:green,cursor:'pointer',display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(true);}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>← Back</button>
        </header>
        <div style={{padding:'30px 16px',background:'#F5F1E8'}}>
          <p style={{color:green,fontWeight:800,fontSize:11}}>ABOUT US</p>
          <h1 style={{fontSize:28,fontWeight:900,marginTop:8}}>Connecting Food.<br/>Bridging Families.</h1>
          <div style={{marginTop:20,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <b>COMPANY DESCRIPTION</b>
            <p style={{fontSize:14,lineHeight:1.6,marginTop:8,color:'#334155'}}>FoodBridge is a Nigerian food logistics and storage company created to make it easier, faster, safer, and more affordable to move and preserve foodstuff.</p>
          </div>
          <div style={{marginTop:14,background:'#111827',color:'white',borderRadius:14,padding:18}}>
            <b>CORE PURPOSE</b>
            <p style={{fontSize:14,marginTop:6,color:'#cbd5e1'}}>FoodBridge exists to bridge the gap between where food is available and where it is needed.</p>
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
          <input placeholder="Gmail Address" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:15}}/>
          <input placeholder="Password" type="password" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
          <button onClick={()=>setPage('profile')} style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',marginTop:15,fontWeight:700}}>Sign In → Profile</button>
          <div style={{textAlign:'center',marginTop:16,fontSize:13}}><span style={{color:'#64748b'}}>Don't have an account? </span><span onClick={()=>setPage('register')} style={{color:green,fontWeight:800,cursor:'pointer',textDecoration:'underline'}}>Sign Up</span></div>
          <p onClick={()=>{setPage('home'); setMenu(true);}} style={{textAlign:'center',marginTop:15,cursor:'pointer',fontSize:13}}>← Back to Home</p>
        </div>
      </div>
    )
  }

  if(page==='register'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'30px',textAlign:'center',borderBottom:'1px solid #eee'}}>
          <div style={{width:72,height:72,background:green,borderRadius:16,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:34,fontWeight:900}}>F</div>
          <h2 style={{color:green,marginTop:12}}>Create Account</h2>
        </div>
        <div style={{maxWidth:450,margin:'20px auto',background:'white',padding:22,borderRadius:16,border:'1px solid #eee'}}>
          <form onSubmit={handleRegister} style={{display:'grid',gap:12}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              <input value={regForm.firstName} onChange={e=>setRegForm({...regForm,firstName:e.target.value})} placeholder="First Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd'}}/>
              <input value={regForm.lastName} onChange={e=>setRegForm({...regForm,lastName:e.target.value})} placeholder="Last Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd'}}/>
            </div>
            <input value={regForm.email} onChange={e=>setRegForm({...regForm,email:e.target.value})} placeholder="Gmail Address *" type="email" style={{padding:12,borderRadius:8,border:'1px solid #ddd'}}/>
            <div>
              <label style={{fontSize:11,fontWeight:800,color:green}}>WHO ARE YOU? *</label>
              <div style={{position:'relative',marginTop:6}}>
                <div onClick={()=>setShowAccDrop(!showAccDrop)} style={{padding:'12px 14px',borderRadius:8,border:'1px solid #ddd',background:'white',display:'flex',justifyContent:'space-between',cursor:'pointer'}}>
                  <span>{regForm.accountType || 'Select account type'}</span><span>▼</span>
                </div>
                {showAccDrop && (
                  <div style={{position:'absolute',top:'100%',left:0,right:0,zIndex:20,background:'white',border:'1px solid #ddd',borderRadius:10,marginTop:6}}>
                    {accountOptions.map(o=>(
                      <div key={o.id} onClick={()=>{setRegForm({...regForm,accountType:o.id}); setShowAccDrop(false);}} style={{padding:'12px 14px',cursor:'pointer',background: regForm.accountType===o.id ? '#dcfce7' : 'white'}}>
                        <div style={{fontSize:13,fontWeight:700}}>{o.label}</div>
                        <div style={{fontSize:11,color:'#64748b'}}>{o.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label style={{fontSize:11,fontWeight:800,color:green}}>WHAT DO YOU WANT TO DO? *</label>
              <div style={{position:'relative',marginTop:6}}>
                <div onClick={()=>setShowServiceDrop(!showServiceDrop)} style={{padding:'12px 14px',borderRadius:8,border:'1px solid #ddd',background:'white',display:'flex',justifyContent:'space-between',cursor:'pointer'}}>
                  <span>{regForm.serviceType || 'Select service'}</span><span>▼</span>
                </div>
                {showServiceDrop && (
                  <div style={{position:'absolute',top:'100%',left:0,right:0,zIndex:20,background:'white',border:'1px solid #ddd',borderRadius:10,marginTop:6}}>
                    {serviceOptions.map(o=>(
                      <div key={o.id} onClick={()=>{setRegForm({...regForm,serviceType:o.id}); setShowServiceDrop(false);}} style={{padding:'12px 14px',cursor:'pointer',background: regForm.serviceType===o.id ? '#dcfce7' : 'white'}}>
                        <div style={{fontSize:13,fontWeight:700}}>{o.label}</div>
                        <div style={{fontSize:11,color:'#64748b'}}>{o.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div style={{position:'relative'}}>
              <input value={regForm.password} onChange={e=>setRegForm({...regForm,password:e.target.value})} placeholder="Password *" type={showPass ? 'text' : 'password'} style={{width:'100%',padding:'12px 40px 12px 12px',borderRadius:8,border:'1px solid #ddd',boxSizing:'border-box'}}/>
              <span onClick={()=>setShowPass(!showPass)} style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',cursor:'pointer'}}>{showPass ? '🙈' : '👁️'}</span>
            </div>
            <div style={{position:'relative'}}>
              <input value={regForm.confirmPassword} onChange={e=>setRegForm({...regForm,confirmPassword:e.target.value})} placeholder="Confirm Password *" type={showConfirmPass ? 'text' : 'password'} style={{width:'100%',padding:'12px 40px 12px 12px',borderRadius:8,border:'1px solid #ddd',boxSizing:'border-box'}}/>
              <span onClick={()=>setShowConfirmPass(!showConfirmPass)} style={{position:'absolute',right:12,top:'50%',transform:'translateY(-50%)',cursor:'pointer'}}>{showConfirmPass ? '🙈' : '👁️'}</span>
            </div>
            <button type="submit" style={{background:green,color:'white',padding:13,borderRadius:8,border:'none',fontWeight:800}}>Sign Up → Face Verification</button>
          </form>
        </div>
      </div>
    )
  }

  if(page==='faceVerify'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'20px',textAlign:'center',borderBottom:'1px solid #eee'}}>
          <h2 style={{color:green,fontWeight:800}}>Face Verification</h2>
          <p style={{fontSize:13,color:'#64748b'}}>Hello {regForm.firstName} {regForm.lastName}</p>
        </div>
        <div style={{maxWidth:430,margin:'20px auto',background:'white',padding:20,borderRadius:16,border:'1px solid #eee',textAlign:'center'}}>
          <div style={{border:'2px dashed #166534',borderRadius:14,padding:16,background: faceVerified ? '#dcfce7' : '#F5F1E8'}}>
            <p style={{fontSize:12,fontWeight:600}}>{livenessMsg}</p>
            {cameraOn && <video ref={videoRef} autoPlay playsInline style={{width:'100%',borderRadius:12,marginTop:12,background:'black',height:260,objectFit:'cover'}}/>}
            <canvas ref={canvasRef} style={{display:'none'}}/>
            {faceImage && <img src={faceImage} alt="face" style={{width:'100%',borderRadius:12,marginTop:12,height:260,objectFit:'cover'}}/>}
            <div style={{marginTop:14,display:'grid',gap:8}}>
              {!cameraOn && !faceVerified && <button onClick={startCamera} style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:700}}>📷 Start Camera</button>}
              {cameraOn && <button onClick={captureFace} style={{width:'100%',background:'#111827',color:'white',padding:12,borderRadius:8,border:'none',fontWeight:700}}>📸 Capture Now</button>}
              {faceVerified && <><div style={{color:green,fontWeight:800}}>✅ Verified</div><button onClick={proceedToOtp} style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800}}>Continue → OTP</button></>}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(page==='otpVerify'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif'}}>
        <div style={{background:'white',padding:'30px',textAlign:'center'}}><h2 style={{color:green}}>Verify Gmail</h2><p style={{fontSize:13}}>OTP sent to <b>{regForm.email}</b> - Use 123456</p></div>
        <div style={{maxWidth:400,margin:'20px auto',background:'white',padding:24,borderRadius:16,border:'1px solid #eee'}}>
          <form onSubmit={(e)=>{e.preventDefault(); if(otpCode==='123456'){ setPage('profile'); } else alert('Use 123456');}} style={{display:'grid',gap:12}}>
            <input value={otpCode} onChange={e=>setOtpCode(e.target.value)} placeholder="Enter OTP" style={{padding:14,borderRadius:8,border:'1px solid #ddd',textAlign:'center',letterSpacing:4}} maxLength={6}/>
            <button type="submit" style={{background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800}}>Verify & Go to Profile</button>
          </form>
        </div>
      </div>
    )
  }

  if(page==='profile'){
    return(
      <div style={{fontFamily:'Inter,sans-serif',background:'#f8fafc',minHeight:'100vh'}}>
        <header style={{display:'flex',justifyContent:'space-between',padding:'12px 16px',background:'white',borderBottom:'1px solid #eee',position:'sticky',top:0,zIndex:99}}>
          <div style={{fontWeight:900,color:green,display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:green,color:'white',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>F</div>FoodBridge</div>
          <button onClick={()=>{setPage('home'); setMenu(false)}} style={{border:'1px solid #ddd',background:'white',padding:'8px 14px',borderRadius:8}}>Home</button>
        </header>
        <div style={{padding:'20px 16px'}}>
          <div style={{background:'white',borderRadius:16,padding:20,border:'1px solid #eee',display:'flex',gap:14,alignItems:'center'}}>
            <img src={faceImage || 'https://i.pravatar.cc/100'} style={{width:64,height:64,borderRadius:50,objectFit:'cover',border:'3px solid #dcfce7'}} alt="profile"/>
            <div><h2 style={{fontWeight:800,fontSize:18}}>{regForm.firstName} {regForm.lastName}</h2><p style={{fontSize:12,color:'#64748b',marginTop:2}}>{regForm.accountType} • {regForm.serviceType}</p><p style={{fontSize:11,color:green,marginTop:4,fontWeight:700}}>✓ Verified • Gwagwalada Branch</p><p style={{fontSize:11,color:'#64748b'}}>{regForm.email}</p></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:10,marginTop:14}}>
            <div style={{background:green,color:'white',borderRadius:12,padding:14,textAlign:'center'}}><b style={{fontSize:20}}>3</b><p style={{fontSize:11,marginTop:2}}>Active</p></div>
            <div style={{background:'white',borderRadius:12,padding:14,textAlign:'center',border:'1px solid #eee'}}><b style={{fontSize:20}}>1</b><p style={{fontSize:11,color:'#64748b',marginTop:2}}>In Storage</p></div>
            <div style={{background:'#f59e0b',color:'white',borderRadius:12,padding:14,textAlign:'center'}}><b style={{fontSize:20}}>2</b><p style={{fontSize:11,marginTop:2}}>To Pickup</p></div>
          </div>
          <div style={{display:'flex',gap:8,marginTop:16}}>
            <button onClick={()=>setActiveTab('shipments')} style={{padding:'10px 16px',borderRadius:20,border:'none',background: activeTab==='shipments' ? green : 'white', color: activeTab==='shipments' ? 'white' : '#334155',fontWeight:700}}>🚚 Shipments</button>
            <button onClick={()=>setActiveTab('storage')} style={{padding:'10px 16px',borderRadius:20,border:'none',background: activeTab==='storage' ? green : 'white', color: activeTab==='storage' ? 'white' : '#334155',fontWeight:700}}>📦 Storage</button>
            <button onClick={()=>setActiveTab('codes')} style={{padding:'10px 16px',borderRadius:20,border:'none',background: activeTab==='codes' ? green : 'white', color: activeTab==='codes' ? 'white' : '#334155',fontWeight:700}}>🔑 Codes</button>
          </div>
          <div style={{marginTop:16}}>
            <div style={{background:'white',borderRadius:12,padding:14,border:'1px solid #eee'}}><div style={{display:'flex',justifyContent:'space-between'}}><b style={{fontSize:13}}>FB-ABJ-7H9K</b><span style={{fontSize:11,background:'#fef3c7',padding:'4px 8px',borderRadius:10}}>On Transit</span></div><p style={{fontSize:13,marginTop:6}}>20kg Rice + Garri</p><p style={{fontSize:11,color:'#64748b'}}>To: Student - UniAbuja</p></div>
            <div style={{marginTop:10,background:'#111827',color:'white',borderRadius:12,padding:18}}><b>🔑 Active Pickup Code</b><div style={{background:'white',color:'black',borderRadius:8,padding:12,marginTop:12,textAlign:'center',letterSpacing:3,fontWeight:900,fontSize:18}}>FB-ABJ-7H9K</div><button onClick={()=>{navigator.clipboard.writeText('FB-ABJ-7H9K'); alert('Copied!')}} style={{width:'100%',marginTop:12,background:'#22c55e',color:'white',padding:10,borderRadius:8,border:'none',fontWeight:700}}>Copy Code</button></div>
          </div>
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
          <button onClick={()=>setPage('register')} style={{background:green,color:'white',border:'none',padding:'8px 14px',borderRadius:8,fontWeight:600,fontSize:13}}>Get Started</button>
          <button onClick={()=>setMenu(!menu)} style={{border:'1px solid #ddd',background:'white',borderRadius:8,padding:'6px 10px'}}>☰</button>
        </div>
      </header>
      {menu && (
        <div style={{background:'white',borderBottom:'1px solid #eee',padding:'0 16px',position:'sticky',top:57,zIndex:90}}>
          <div onClick={()=>setSol(!sol)} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span>Solutions</span><span>{sol?'▴':'▾'}</span></div>
          {sol && <div style={{padding:'0 0 12px 0',display:'grid',gap:8}}>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>👨‍👩‍👧‍👦 Personal & Family Delivery</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🎓 Student Food Support</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🏢 Business & Organization Logistics</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>📦 Secure Food Storage</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🛒 Buy & Sell Marketplace</b></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🚚 Bulk & Inter-State Transport</b></div>
          </div>}
          <div onClick={()=>{setMenu(false);setPage('about')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>About</div>
          <div onClick={()=>{setMenu(false);setPage('blog')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Blog</div>
          <div onClick={()=>{setMenu(false);setPage('support')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Support</div>
        </div>
      )}
      <section style={{textAlign:'center',padding:'50px 16px 30px',background:'#F5F1E8'}}>
        <p style={{color:green,fontWeight:800,fontSize:11,letterSpacing:2}}>FOODBRIDGE NIGERIA • GWAGWALADA, ABUJA</p>
        <h1 style={{fontSize:38,fontWeight:900,lineHeight:1.05,marginTop:12}}>CONNECTING FOOD.<br/><span style={{color:green}}>BRIDGING FAMILIES.</span></h1>
        <h2 style={{fontSize:15,fontWeight:800,marginTop:14,lineHeight:1.4}}>Do you Want to Store, Do you Want to Transport<br/>or are you Supplying to FoodBridge?</h2>
        <p style={{fontWeight:800,fontSize:13,marginTop:10,color:'#111827'}}>Your Food. Your Destination. Your Choice.</p>
        <div style={{display:'flex',gap:10,justifyContent:'center',marginTop:20}}>
          <button onClick={()=>setPage('register')} style={{background:green,color:'white',padding:'13px 26px',borderRadius:10,border:'none',fontWeight:700}}>Get Started</button>
          <button onClick={()=>setPage('about')} style={{background:'white',color:green,padding:'13px 26px',borderRadius:10,border:'1px solid '+green,fontWeight:700}}>How It Works</button>
        </div>
        <div style={{margin:'30px auto 0',maxWidth:640,borderRadius:18,overflow:'hidden',border:'1px solid #e2e8f0'}}>
          <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900" style={{width:'100%'}} alt="food"/>
          <div style={{background:'white',padding:10,display:'flex',justifyContent:'space-between',fontSize:11,fontWeight:700}}>
            <span>📦 Deposit</span><span>🚚 Transport</span><span>✅ Pickup</span>
          </div>
        </div>
      </section>
      <section id="features" style={{padding:'40px 16px',background:'white'}}>
        <h2 style={{fontSize:22,fontWeight:800,textAlign:'center'}}>One FoodBridge, Multiple Solutions</h2>
        <p style={{textAlign:'center',fontSize:13,color:'#64748b',marginTop:8}}>FoodBridge — Connecting Food, People & Places</p>
        <div style={{display:'grid',gap:12,marginTop:20}}>
          <div style={{background:'#F5F1E8',border:'1px solid #e7e0d0',borderRadius:12,padding:16}}><b>🚚 Transportation & Delivery</b><p style={{fontSize:13,color:'#475569',marginTop:6}}>Deposit foodstuff, provide sender & recipient details, we transport to designated pickup location.</p></div>
          <div style={{background:'#F5F1E8',border:'1px solid #e7e0d0',borderRadius:12,padding:16}}><b>📦 Secure Storage</b><p style={{fontSize:13,color:'#475569',marginTop:6}}>Short & long-term storage. Bring foodstuff → Select Storage → Agree duration → Collect when needed.</p></div>
          <div style={{background:'#F5F1E8',border:'1px solid #e7e0d0',borderRadius:12,padding:16}}><b>🛒 Buy & Sell Marketplace</b><p style={{fontSize:13,color:'#475569',marginTop:6}}>Buy in small, medium, large & bulk. Sell your farm produce to FoodBridge.</p></div>
        </div>
      </section>
      <section id="contact" style={{padding:'35px 16px',background:'#F5F1E8'}}>
        <h2 style={{fontWeight:800,textAlign:'center'}}>Contact Us</h2>
        <div style={{marginTop:18,background:'white',padding:14,borderRadius:10,fontSize:13,lineHeight:1.8,border:'1px solid #e7e0d0'}}>Email: foodbridge.nigeria@gmail.com<br/>Phone: 0816-383-1822<br/>Location: Gwagwalada, Abuja<br/>Founder: Francis Yakubu</div>
      </section>
      <footer style={{background:'white',padding:'25px 16px',borderTop:'1px solid #eee'}}>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <a href="https://www.tiktok.com/@foodbridge.ng.lim?_r=1&_t=ZS-9A5NZ6zEsQG" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}><div style={{width:36,height:36,background:'black',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{color:'white',fontWeight:900,fontSize:20}}>♪</span></div><span style={{color:'black',fontWeight:700,fontSize:18}}>TikTok</span></a>
          <a href="https://www.facebook.com/profile.php?id=61594798832703&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}><div style={{width:36,height:36,background:'#1877F2',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:900,fontSize:22}}>f</div><span style={{color:'#1877F2',fontWeight:700,fontSize:18}}>facebook</span></a>
          <a href="https://www.youtube.com/@foodbridgeNigeria" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}><div style={{width:36,height:36,background:'#FF0000',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{width:0,height:0,borderLeft:'10px solid white',borderTop:'6px solid transparent',borderBottom:'6px solid transparent',marginLeft:2}}></div></div><span style={{color:'black',fontWeight:700,fontSize:18}}>YouTube</span></a>
        </div>
        <p style={{marginTop:20,fontSize:11,color:'#64748b'}}>© 2026 FoodBridge. Gwagwalada, Abuja. Founder Francis Yakubu. Connecting Food. Bridging Families.</p>
      </footer>
    </div>
  )
}
