import { useState, useEffect } from 'react';

const styles = {
  nav: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 24px', background:'white', borderBottom:'1px solid #e5e7eb', position:'sticky', top:0, zIndex:10 },
  logo: { display:'flex', alignItems:'center', gap:'10px', fontWeight:800, fontSize:'20px', color:'#166534' },
  btnOutline: { padding:'8px 18px', border:'1.5px solid #16a34a', borderRadius:'20px', background:'white', color:'#16a34a', cursor:'pointer', fontWeight:600, marginLeft:'8px' },
  btnGreen: { padding:'12px 24px', border:'none', borderRadius:'10px', background:'#16a34a', color:'white', cursor:'pointer', fontWeight:700, width:'100%', fontSize:'16px' },
  card: { background:'white', borderRadius:'16px', padding:'24px', boxShadow:'0 4px 20px rgba(0,0,0,0.08)', border:'1px solid #f0f0f0' },
  input: { width:'100%', padding:'12px', border:'1.5px solid #e5e7eb', borderRadius:'10px', fontSize:'14px', outline:'none', boxSizing:'border-box' },
  label: { fontSize:'13px', fontWeight:600, color:'#374151', marginBottom:'6px', display:'block' },
  tabActive: { padding:'12px 20px', background:'#16a34a', color:'white', border:'none', borderRadius:'10px', cursor:'pointer', fontWeight:600 },
  tab: { padding:'12px 20px', background:'#f3f4f6', color:'#6b7280', border:'none', borderRadius:'10px', cursor:'pointer', fontWeight:600 },
};

function LogoSVG({ size=36 }){
  return (
    <svg width={size} height={size} viewBox="0 0 100 70">
      <path d="M5 60 Q50 35 95 60" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M15 60 L35 18 Q50 8 65 18 L85 60" stroke="#16a34a" strokeWidth="5" fill="none"/>
      <ellipse cx="50" cy="42" rx="18" ry="10" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
    </svg>
  );
}
function getTypeLabel(t){ if(t==='family_transfer') return 'Family & Personal'; if(t==='bulk_trader') return 'Bulk Trader'; if(t==='storage_client') return 'Storage Client'; return t; }

export default function App(){
  const [view,setView]=useState('home');
  const [currentUser,setCurrentUser]=useState(null);
  const [activeTab,setActiveTab]=useState('overview');
  const [foods,setFoods]=useState([]);
  const [editMode,setEditMode]=useState(false);
  const [form,setForm]=useState({ fullName:'', phone:'', email:'', password:'', userType:'family_transfer', location:'' });
  const [foodForm,setFoodForm]=useState({ name:'', nature:'Grains', quantity:'', unit:'Bags', quality:'Fresh', pickup:'', delivery:'', duration:'1 Week', desc:'' });
  useEffect(()=>{ const s=localStorage.getItem('fb_user'); if(s) setCurrentUser(JSON.parse(s)); const sf=localStorage.getItem('fb_foods'); if(sf) setFoods(JSON.parse(sf)); },[]);
  const handleRegister=(e)=>{ e.preventDefault(); const users=JSON.parse(localStorage.getItem('fb_users')||'[]'); if(users.find(u=>u.email===form.email)){alert('Email exists'); return;} users.push({...form,id:Date.now()}); localStorage.setItem('fb_users',JSON.stringify(users)); localStorage.setItem('fb_user',JSON.stringify(form)); setCurrentUser(form); setView('dashboard'); };
  const handleLogin=()=>{ const email=prompt('Email:'); const pass=prompt('Password:'); const users=JSON.parse(localStorage.getItem('fb_users')||'[]'); const f=users.find(u=>u.email===email&&u.password===pass); if(f){localStorage.setItem('fb_user',JSON.stringify(f)); setCurrentUser(f); setView('dashboard');} else alert('Wrong login'); };
  const updateUserType=()=>{ const nt=prompt('Type exactly: family_transfer OR bulk_trader OR storage_client',currentUser.userType); if(!['family_transfer','bulk_trader','storage_client'].includes(nt)) return; const up={...currentUser,userType:nt}; setCurrentUser(up); localStorage.setItem('fb_user',JSON.stringify(up)); const users=JSON.parse(localStorage.getItem('fb_users')||'[]'); const idx=users.findIndex(u=>u.email===currentUser.email); if(idx>=0){users[idx].userType=nt; localStorage.setItem('fb_users',JSON.stringify(users));} setEditMode(false); };
  const addFood=(e)=>{ e.preventDefault(); const nf={...foodForm,id:Date.now(),owner:currentUser.email,status:'Active',date:new Date().toLocaleDateString()}; const up=[...foods,nf]; setFoods(up); localStorage.setItem('fb_foods',JSON.stringify(up)); setActiveTab('myfoods'); };
  const withdraw=(id)=>{ if(confirm('Withdraw?')){ const u=foods.filter(f=>f.id!==id); setFoods(u); localStorage.setItem('fb_foods',JSON.stringify(u)); } };
  const myFoods=foods.filter(f=>f.owner===currentUser?.email);

  if(view==='home'){
    return (
      <div style={{fontFamily:'sans-serif', background:'#f9fafb', minHeight:'100vh'}}>
        <nav style={styles.nav}><div style={styles.logo}><LogoSVG/> FoodBridge</div><div><button style={styles.btnOutline} onClick={handleLogin}>Login</button><button style={{...styles.btnOutline, background:'#16a34a', color:'white'}} onClick={()=>setView('register')}>Get Started</button></div></nav>
        <div style={{maxWidth:'1000px', margin:'0 auto', padding:'20px'}}>
          <div style={{textAlign:'center', padding:'40px 0'}}><h1 style={{fontSize:'40px', fontWeight:800}}>Bridge <span style={{color:'#16a34a'}}>Farm & Family</span></h1><p style={{color:'#6b7280'}}>Send food to school, store harvest, trade bulk</p><button style={{...styles.btnGreen, width:'auto', marginTop:'20px', padding:'14px 28px'}} onClick={()=>setView('register')}>Create Account</button></div>

          {/* FOUNDER SECTION */}
          <div style={{...styles.card, marginTop:'30px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'20px', alignItems:'center'}}>
            <div style={{textAlign:'center'}}>
              <img src="/founder.jpg" alt="Francis Yakubu" style={{width:'180px', height:'180px', borderRadius:'50%', objectFit:'cover', border:'4px solid #16a34a'}} onError={(e)=>{e.target.style.display='none'; e.target.nextSibling.style.display='flex';}}/>
              <div style={{width:'180px', height:'180px', borderRadius:'50%', background:'#dcfce7', display:'none', alignItems:'center', justifyContent:'center', fontSize:'50px', fontWeight:800, color:'#16a34a', margin:'0 auto', border:'4px solid #16a34a'}}>FY</div>
              <h3 style={{margin:'12px 0 2px'}}>Francis Yakubu</h3>
              <p style={{color:'#16a34a', fontWeight:700, margin:0, fontSize:'14px'}}>Founder & CEO</p>
              <p style={{color:'#6b7280', fontSize:'13px', margin:'4px 0'}}>Lokoja / Abuja - 08163831822</p>
            </div>
            <div>
              <h2>About Us - FoodBridge</h2>
              <p style={{lineHeight:1.6, color:'#374151'}}>FoodBridge was founded by <b>Francis Yakubu</b> to solve food transport & storage in Nigeria.</p>
              <p style={{lineHeight:1.6, color:'#374151', marginTop:'10px'}}>I saw mothers struggling to send food to children in school, farmers losing harvest, traders paying high transport. FoodBridge is the bridge.</p>
              <p style={{lineHeight:1.6, color:'#374151', marginTop:'10px'}}>For students, family sharing, bulk traders moving 100 bags from Keffi to Lokoja, or storing yam for 3 months - <b>We are your partner.</b></p>
              <div style={{background:'#f0fdf4', padding:'12px', borderRadius:'10px', marginTop:'12px', borderLeft:'4px solid #16a34a'}}><b>Our Promise:</b> Safe storage, affordable transport, food delivered intact.</div>
            </div>
          </div>
          <p style={{textAlign:'center', marginTop:'30px', color:'#9ca3af', fontSize:'12px'}}>© 2025 FoodBridge - Founded by Francis Yakubu</p>
        </div>
      </div>
    );
  }
  if(view==='register'){
    return (
      <div style={{fontFamily:'sans-serif', background:'#f9fafb', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
        <div style={{...styles.card, maxWidth:'460px', width:'100%'}}>
          <button style={{...styles.btnOutline, marginLeft:0, marginBottom:'10px'}} onClick={()=>setView('home')}>← Back to Home</button>
          <h2 style={{textAlign:'center'}}>Create Account</h2>
          <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <div><label style={styles.label}>Full Name</label><input style={styles.input} value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} placeholder="Francis Yakubu"/></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}><div><label style={styles.label}>Phone</label><input style={styles.input} value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/></div><div><label style={styles.label}>Location</label><input style={styles.input} value={form.location} onChange={e=>setForm({...form, location:e.target.value})}/></div></div>
            <div><label style={styles.label}>Email</label><input style={styles.input} type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/></div>
            <div><label style={styles.label}>Password</label><input style={styles.input} type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/></div>
            <div><label style={styles.label}>I am a...</label><select style={styles.input} value={form.userType} onChange={e=>setForm({...form, userType:e.target.value})}><option value="family_transfer">Family & Personal (can change later)</option><option value="bulk_trader">Bulk Trader</option><option value="storage_client">Storage Client</option></select></div>
            <button style={styles.btnGreen} type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div style={{fontFamily:'sans-serif', background:'#f3f4f6', minHeight:'100vh'}}>
      <nav style={styles.nav}><div style={styles.logo}><LogoSVG/> FoodBridge</div><div><span>Hi, {currentUser.fullName.split(' ')[0]}</span><button style={styles.btnOutline} onClick={()=>{localStorage.removeItem('fb_user'); setCurrentUser(null); setView('home');}}>Logout</button></div></nav>
      <div style={{maxWidth:'1000px', margin:'0 auto', padding:'20px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}><h2>{getTypeLabel(currentUser.userType)}</h2><button style={styles.btnOutline} onClick={()=>setView('home')}>← Home</button></div>
        <div style={{display:'flex', gap:'8px', margin:'14px 0', flexWrap:'wrap'}}><button style={activeTab==='overview'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('overview')}>Overview</button><button style={activeTab==='add'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('add')}>+ Add Food</button><button style={activeTab==='myfoods'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('myfoods')}>My Foods ({myFoods.length})</button><button style={activeTab==='withdraw'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('withdraw')}>Withdraw</button></div>
        {activeTab==='overview' && (<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'12px'}}><div style={styles.card}><div style={{display:'flex', justifyContent:'space-between'}}><b>Profile</b><span style={{color:'#16a34a', cursor:'pointer'}} onClick={()=>setEditMode(!editMode)}>✏️ Edit</span></div><p>Name: {currentUser.fullName}</p><p>Type: {getTypeLabel(currentUser.userType)}</p><p>Phone: {currentUser.phone}</p>{editMode && <button style={{...styles.btnGreen, padding:'8px', marginTop:'8px'}} onClick={updateUserType}>Change Type (if mistakenly selected)</button>}</div><div style={styles.card}><h1>{myFoods.length}</h1><p>Active</p><button style={styles.btnGreen} onClick={()=>setActiveTab('add')}>Add Food</button></div></div>)}
        {activeTab==='add' && (<div style={styles.card}><div style={{display:'flex', justifyContent:'space-between'}}><h3>Add Food - Qty, Quality, Nature</h3><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button></div><form onSubmit={addFood} style={{display:'flex', flexDirection:'column', gap:'10px', marginTop:'10px'}}><input style={styles.input} placeholder="Food Name - Rice, Yam" required value={foodForm.name} onChange={e=>setFoodForm({...foodForm, name:e.target.value})}/><div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}}><input style={styles.input} placeholder="Qty" type="number" required value={foodForm.quantity} onChange={e=>setFoodForm({...foodForm, quantity:e.target.value})}/><select style={styles.input} value={foodForm.unit} onChange={e=>setFoodForm({...foodForm, unit:e.target.value})}><option>Bags</option><option>Kg</option><option>Baskets</option></select><select style={styles.input} value={foodForm.quality} onChange={e=>setFoodForm({...foodForm, quality:e.target.value})}><option>Fresh</option><option>Dried</option><option>Grade A</option></select></div><div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}><input style={styles.input} placeholder="Pickup - Keffi" value={foodForm.pickup} onChange={e=>setFoodForm({...foodForm, pickup:e.target.value})}/><input style={styles.input} placeholder="Delivery To" value={foodForm.delivery} onChange={e=>setFoodForm({...foodForm, delivery:e.target.value})}/></div><button style={styles.btnGreen} type="submit">Save</button></form></div>)}
        {activeTab==='myfoods' && (<div><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button>{myFoods.map(f=><div key={f.id} style={{...styles.card, marginTop:'8px', display:'flex', justifyContent:'space-between'}}><span>{f.name} - {f.quantity} {f.unit} ({f.quality})</span><button style={styles.btnOutline} onClick={()=>withdraw(f.id)}>Withdraw</button></div>)}</div>)}
        {activeTab==='withdraw' && (<div style={styles.card}><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button><p>Call 08163831822 to withdraw</p>{myFoods.map(f=><div key={f.id} style={{border:'1px solid #e5e7eb', padding:'10px', borderRadius:'8px', marginTop:'8px', display:'flex', justifyContent:'space-between'}}><span>{f.name}</span><button style={{...styles.btnGreen, width:'auto'}} onClick={()=>withdraw(f.id)}>Request</button></div>)}</div>)}
      </div>
    </div>
  );
}
