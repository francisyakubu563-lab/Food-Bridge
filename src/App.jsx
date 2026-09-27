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

function getTypeLabel(type){
  if(type==='family_transfer') return 'Family & Personal Transfer';
  if(type==='bulk_trader') return 'Bulk Trader & Wholesaler';
  if(type==='storage_client') return 'Storage Client';
  return type;
}

export default function App(){
  const [view,setView] = useState('home');
  const [currentUser,setCurrentUser] = useState(null);
  const [activeTab,setActiveTab] = useState('overview');
  const [foods,setFoods] = useState([]);
  const [editMode,setEditMode] = useState(false);
  const [form,setForm] = useState({ fullName:'', phone:'', email:'', password:'', userType:'family_transfer', location:'' });
  const [foodForm,setFoodForm] = useState({ name:'', nature:'Grains - Rice, Maize, Beans', quantity:'', unit:'Bags', quality:'Fresh', pickup:'', delivery:'', duration:'1 Week', desc:'' });

  useEffect(()=>{
    const saved = localStorage.getItem('fb_user');
    if(saved) setCurrentUser(JSON.parse(saved));
    const savedFoods = localStorage.getItem('fb_foods');
    if(savedFoods) setFoods(JSON.parse(savedFoods));
  },[]);

  const handleRegister = (e)=>{
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('fb_users')||'[]');
    if(users.find(u=>u.email===form.email)){ alert('Email exists, login'); return; }
    users.push({...form, id:Date.now()});
    localStorage.setItem('fb_users', JSON.stringify(users));
    localStorage.setItem('fb_user', JSON.stringify(form));
    setCurrentUser(form);
    setView('dashboard');
  };
  const handleLogin = ()=>{
    const email = prompt('Email:'); const pass = prompt('Password:');
    const users = JSON.parse(localStorage.getItem('fb_users')||'[]');
    const found = users.find(u=>u.email===email && u.password===pass);
    if(found){ localStorage.setItem('fb_user', JSON.stringify(found)); setCurrentUser(found); setView('dashboard'); }
    else alert('Wrong login, register first');
  };
  const updateUserType = ()=>{
    const newType = prompt('Type exactly:\nfamily_transfer\nbulk_trader\nstorage_client', currentUser.userType);
    if(!['family_transfer','bulk_trader','storage_client'].includes(newType)) return;
    const updated = {...currentUser, userType:newType};
    setCurrentUser(updated); localStorage.setItem('fb_user', JSON.stringify(updated));
    const users = JSON.parse(localStorage.getItem('fb_users')||'[]');
    const idx = users.findIndex(u=>u.email===currentUser.email);
    if(idx>=0){ users[idx].userType=newType; localStorage.setItem('fb_users', JSON.stringify(users)); }
    setEditMode(false);
  };
  const addFood = (e)=>{
    e.preventDefault();
    const newFood = {...foodForm, id:Date.now(), owner:currentUser.email, status: currentUser.userType==='storage_client'?'Stored':'In Transit', date:new Date().toLocaleDateString() };
    const updated = [...foods, newFood]; setFoods(updated); localStorage.setItem('fb_foods', JSON.stringify(updated));
    setFoodForm({ name:'', nature:'Grains - Rice, Maize, Beans', quantity:'', unit:'Bags', quality:'Fresh', pickup:'', delivery:'', duration:'1 Week', desc:'' });
    setActiveTab('myfoods');
  };
  const withdraw = (id)=>{ if(confirm('Withdraw?')){ const u = foods.filter(f=>f.id!==id); setFoods(u); localStorage.setItem('fb_foods', JSON.stringify(u)); } };
  const myFoods = foods.filter(f=>f.owner===currentUser?.email);

  if(view==='home'){
    return (
      <div style={{fontFamily:'Inter, sans-serif', background:'#f9fafb', minHeight:'100vh'}}>
        <nav style={styles.nav}>
          <div style={styles.logo}><LogoSVG/> FoodBridge</div>
          <div><button style={styles.btnOutline} onClick={handleLogin}>Login</button><button style={{...styles.btnOutline, background:'#16a34a', color:'white'}} onClick={()=>setView('register')}>Get Started</button></div>
        </nav>

        <div style={{maxWidth:'1000px', margin:'0 auto', padding:'20px'}}>
          <div style={{textAlign:'center', padding:'50px 0 30px'}}>
            <h1 style={{fontSize:'44px', fontWeight:800, lineHeight:1.1}}>Bridge The Gap Between <span style={{color:'#16a34a'}}>Farm & Family</span></h1>
            <p style={{color:'#6b7280', fontSize:'18px', marginTop:'14px'}}>Send food to your son in school, store harvest, or trade bulk - FoodBridge handles it.</p>
            <button style={{...styles.btnGreen, width:'auto', padding:'14px 28px', marginTop:'20px'}} onClick={()=>setView('register')}>Create Free Account</button>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'18px'}}>
            <div style={styles.card}><h3>👨‍👩‍👧 Family & Personal</h3><p style={{color:'#6b7280', fontSize:'14px'}}>Mother to son in school, student, traveler. Small packages across states.</p></div>
            <div style={styles.card}><h3>📦 Bulk Trader</h3><p style={{color:'#6b7280', fontSize:'14px'}}>Businessman buying/selling large quantity, needs transport.</p></div>
            <div style={styles.card}><h3>🏬 Storage Client</h3><p style={{color:'#6b7280', fontSize:'14px'}}>Store food short/long term - safe, pest-free warehouse.</p></div>
          </div>

          {/* FOUNDER & ABOUT US SECTION - NEW */}
          <div style={{marginTop:'50px'}}>
            <h2 style={{textAlign:'center', fontSize:'28px', fontWeight:800}}>About Us</h2>
            <div style={{...styles.card, marginTop:'20px', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'24px', alignItems:'center'}}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <div style={{width:'180px', height:'180px', borderRadius:'50%', background:'#dcfce7', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'64px', fontWeight:800, color:'#16a34a', border:'4px solid #16a34a'}}>FY</div>
                <h3 style={{marginTop:'16px', marginBottom:'4px'}}>Francis Yakubu</h3>
                <p style={{color:'#16a34a', fontWeight:600, fontSize:'14px', margin:0}}>Founder & CEO - FoodBridge</p>
                <p style={{color:'#6b7280', fontSize:'13px', marginTop:'6px'}}>📍 Lokoja / Abuja, Nigeria</p>
                <p style={{color:'#6b7280', fontSize:'13px'}}>📞 08163831822</p>
              </div>
              <div>
                <h3 style={{color:'#166534'}}>Our Story</h3>
                <p style={{color:'#374151', lineHeight:1.7, fontSize:'15px'}}>
                  FoodBridge was founded by <b>Francis Yakubu</b> with a simple mission: to solve the food transportation and storage problem in Nigeria.
                </p>
                <p style={{color:'#374151', lineHeight:1.7, fontSize:'15px', marginTop:'10px'}}>
                  I saw mothers struggling to send food to their children in school, farmers losing harvest due to no storage, and businessmen spending too much on transport. FoodBridge bridges this gap.
                </p>
                <p style={{color:'#374151', lineHeight:1.7, fontSize:'15px', marginTop:'10px'}}>
                  Whether you are a student needing food from home, a mother sending garri to your son in UniAbuja, a bulk trader moving 100 bags from Keffi to Lokoja, or a farmer who wants to store yam for 3 months - <b>FoodBridge is your trusted partner.</b>
                </p>
                <div style={{marginTop:'16px', background:'#f0fdf4', padding:'12px', borderRadius:'10px', borderLeft:'4px solid #16a34a'}}>
                  <b style={{fontSize:'14px'}}>Our Promise:</b>
                  <p style={{fontSize:'13px', color:'#6b7280', margin:'6px 0 0'}}>Safe storage, affordable transport, and your food delivered intact - from farm to family.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{textAlign:'center', marginTop:'40px', padding:'20px', color:'#9ca3af', fontSize:'13px'}}>
            © 2025 FoodBridge - Founded by Francis Yakubu. All rights reserved.
          </div>
        </div>
      </div>
    );
  }

  if(view==='register'){
    return (
      <div style={{fontFamily:'Inter,sans-serif', background:'#f9fafb', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
        <div style={{...styles.card, maxWidth:'480px', width:'100%'}}>
          <button style={{...styles.btnOutline, marginBottom:'12px', marginLeft:0}} onClick={()=>setView('home')}>← Back to Home</button>
          <div style={{textAlign:'center'}}><LogoSVG size={48}/><h2>Create Account</h2></div>
          <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'12px', marginTop:'12px'}}>
            <div><label style={styles.label}>Full Name</label><input style={styles.input} value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})} placeholder="Francis Yakubu"/></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
              <div><label style={styles.label}>Phone</label><input style={styles.input} value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="08163831822"/></div>
              <div><label style={styles.label}>Location</label><input style={styles.input} value={form.location} onChange={e=>setForm({...form, location:e.target.value})} placeholder="Lokoja"/></div>
            </div>
            <div><label style={styles.label}>Email</label><input style={styles.input} type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/></div>
            <div><label style={styles.label}>Password</label><input style={styles.input} type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/></div>
            <div><label style={styles.label}>I am a... (can change later)</label><select style={styles.input} value={form.userType} onChange={e=>setForm({...form, userType:e.target.value})}><option value="family_transfer">Family & Personal</option><option value="bulk_trader">Bulk Trader</option><option value="storage_client">Storage Client</option></select></div>
            <button style={styles.btnGreen} type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{fontFamily:'Inter,sans-serif', background:'#f3f4f6', minHeight:'100vh'}}>
      <nav style={styles.nav}><div style={styles.logo}><LogoSVG/> FoodBridge</div><div><span>Hi, {currentUser.fullName.split(' ')[0]}</span><button style={styles.btnOutline} onClick={()=>{localStorage.removeItem('fb_user'); setCurrentUser(null); setView('home');}}>Logout</button></div></nav>
      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'20px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}><h2>Dashboard - {getTypeLabel(currentUser.userType)}</h2><button style={styles.btnOutline} onClick={()=>setView('home')}>← Home</button></div>
        <div style={{display:'flex', gap:'10px', margin:'16px 0', flexWrap:'wrap'}}>
          <button style={activeTab==='overview'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('overview')}>Overview</button>
          <button style={activeTab==='add'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('add')}>+ Add Food</button>
          <button style={activeTab==='myfoods'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('myfoods')}>My Foods ({myFoods.length})</button>
          <button style={activeTab==='withdraw'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('withdraw')}>Withdraw</button>
        </div>
        {activeTab==='overview' && (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'16px'}}>
            <div style={styles.card}><div style={{display:'flex', justifyContent:'space-between'}}><p style={styles.label}>Profile</p><span style={{color:'#16a34a', cursor:'pointer', fontSize:'13px'}} onClick={()=>setEditMode(!editMode)}>✏️ Edit</span></div><p><b>Name:</b> {currentUser.fullName}</p><p><b>Phone:</b> {currentUser.phone}</p><p><b>Type:</b> {getTypeLabel(currentUser.userType)}</p><p><b>Location:</b> {currentUser.location}</p>{editMode && <button style={{...styles.btnGreen, marginTop:'10px', padding:'8px'}} onClick={updateUserType}>Change Account Type</button>}</div>
            <div style={styles.card}><h1>{myFoods.length}</h1><p>Active items</p><button style={{...styles.btnGreen, marginTop:'10px'}} onClick={()=>setActiveTab('add')}>Add New Food</button></div>
            <div style={{...styles.card, background:'#16a34a', color:'white'}}><p>Founder: Francis Yakubu - FoodBridge helps you store, transfer, trade food safely.</p></div>
          </div>
        )}
        {activeTab==='add' && (
          <div style={{...styles.card, maxWidth:'700px'}}><div style={{display:'flex', justifyContent:'space-between'}}><h3>Add Food</h3><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button></div>
            <form onSubmit={addFood} style={{display:'flex', flexDirection:'column', gap:'12px', marginTop:'12px'}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}><div><label style={styles.label}>Food Name</label><input style={styles.input} required value={foodForm.name} onChange={e=>setFoodForm({...foodForm, name:e.target.value})}/></div><div><label style={styles.label}>Nature</label><select style={styles.input} value={foodForm.nature} onChange={e=>setFoodForm({...foodForm, nature:e.target.value})}><option>Grains</option><option>Tubers</option><option>Flour</option><option>Vegetables</option></select></div></div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}><div><label style={styles.label}>Qty</label><input style={styles.input} type="number" required value={foodForm.quantity} onChange={e=>setFoodForm({...foodForm, quantity:e.target.value})}/></div><div><label style={styles.label}>Unit</label><select style={styles.input} value={foodForm.unit} onChange={e=>setFoodForm({...foodForm, unit:e.target.value})}><option>Bags</option><option>Kg</option><option>Baskets</option></select></div><div><label style={styles.label}>Quality</label><select style={styles.input} value={foodForm.quality} onChange={e=>setFoodForm({...foodForm, quality:e.target.value})}><option>Fresh</option><option>Dried</option><option>Grade A</option></select></div></div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}><div><label style={styles.label}>Pickup</label><input style={styles.input} value={foodForm.pickup} onChange={e=>setFoodForm({...foodForm, pickup:e.target.value})}/></div><div><label style={styles.label}>Delivery To</label><input style={styles.input} value={foodForm.delivery} onChange={e=>setFoodForm({...foodForm, delivery:e.target.value})}/></div></div>
              <button style={styles.btnGreen} type="submit">Save</button>
            </form>
          </div>
        )}
        {activeTab==='myfoods' && (<div><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button>{myFoods.map(f=>(<div key={f.id} style={{...styles.card, marginTop:'10px', display:'flex', justifyContent:'space-between'}}><span>{f.name} - {f.quantity} {f.unit}</span><button style={{...styles.btnOutline, color:'#dc2626'}} onClick={()=>withdraw(f.id)}>Withdraw</button></div>))}</div>)}
        {activeTab==='withdraw' && (<div style={styles.card}><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button><p>Call 08163831822 to withdraw</p>{myFoods.map(f=>(<div key={f.id} style={{border:'1px solid #e5e7eb', padding:'10px', borderRadius:'8px', marginTop:'8px', display:'flex', justifyContent:'space-between'}}><span>{f.name}</span><button style={{...styles.btnGreen, width:'auto'}} onClick={()=>withdraw(f.id)}>Request</button></div>))}</div>)}
      </div>
    </div>
  );
}
