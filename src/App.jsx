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
      <path d="M32 42 Q50 32 68 42 Q50 52 32 42" fill="#f59e0b" opacity="0.8"/>
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
    if(!form.fullName ||!form.phone ||!form.email ||!form.password){ alert('Fill all fields'); return; }
    const users = JSON.parse(localStorage.getItem('fb_users')||'[]');
    if(users.find(u=>u.email===form.email)){ alert('Email already exists, use Login'); return; }
    users.push({...form, id:Date.now()});
    localStorage.setItem('fb_users', JSON.stringify(users));
    localStorage.setItem('fb_user', JSON.stringify(form));
    setCurrentUser(form);
    setView('dashboard');
  };

  const handleLogin = ()=>{
    const email = prompt('Enter email:');
    if(!email) return;
    const pass = prompt('Enter password:');
    const users = JSON.parse(localStorage.getItem('fb_users')||'[]');
    const found = users.find(u=>u.email===email && u.password===pass);
    if(found){ localStorage.setItem('fb_user', JSON.stringify(found)); setCurrentUser(found); setView('dashboard'); }
    else alert('Wrong credentials - Please Register first');
  };

  const updateUserType = ()=>{
    const newType = prompt('Choose correct type:\n1. family_transfer = Family/Student\n2. bulk_trader = Bulk Trader\n3. storage_client = Storage\n\nType exactly one:', currentUser.userType);
    if(!newType) return;
    if(!['family_transfer','bulk_trader','storage_client'].includes(newType)){ alert('Invalid. Type exactly: family_transfer OR bulk_trader OR storage_client'); return; }
    const updated = {...currentUser, userType:newType};
    setCurrentUser(updated);
    localStorage.setItem('fb_user', JSON.stringify(updated));
    const users = JSON.parse(localStorage.getItem('fb_users')||'[]');
    const idx = users.findIndex(u=>u.email===currentUser.email);
    if(idx>=0){ users[idx].userType=newType; localStorage.setItem('fb_users', JSON.stringify(users)); }
    alert('Account type changed to '+getTypeLabel(newType));
    setEditMode(false);
  };

  const addFood = (e)=>{
    e.preventDefault();
    const newFood = {...foodForm, id:Date.now(), owner:currentUser.email, status: currentUser.userType==='storage_client'?'Stored':'In Transit', date:new Date().toLocaleDateString() };
    const updated = [...foods, newFood];
    setFoods(updated);
    localStorage.setItem('fb_foods', JSON.stringify(updated));
    setFoodForm({ name:'', nature:'Grains - Rice, Maize, Beans', quantity:'', unit:'Bags', quality:'Fresh', pickup:'', delivery:'', duration:'1 Week', desc:'' });
    setActiveTab('myfoods');
    alert('Food added successfully!');
  };

  const withdraw = (id)=>{
    if(confirm('Request withdrawal/delivery? Our agent will call you.')){
      const updated = foods.filter(f=>f.id!==id);
      setFoods(updated);
      localStorage.setItem('fb_foods', JSON.stringify(updated));
      alert('Withdrawal requested - We will call: '+currentUser.phone);
    }
  };

  const myFoods = foods.filter(f=>f.owner===currentUser?.email);

  if(view==='home'){
    return (
      <div style={{fontFamily:'Inter, sans-serif', background:'#f9fafb', minHeight:'100vh'}}>
        <nav style={styles.nav}>
          <div style={styles.logo}><LogoSVG/> FoodBridge</div>
          <div><button style={styles.btnOutline} onClick={handleLogin}>Login</button><button style={{...styles.btnOutline, background:'#16a34a', color:'white'}} onClick={()=>setView('register')}>Get Started</button></div>
        </nav>
        <div style={{maxWidth:'1000px', margin:'0 auto', padding:'40px 20px'}}>
          <div style={{textAlign:'center', padding:'40px 0'}}>
            <h1 style={{fontSize:'42px', fontWeight:800, lineHeight:1.1}}>Bridge The Gap Between <span style={{color:'#16a34a'}}>Farm & Family</span></h1>
            <p style={{color:'#6b7280', fontSize:'18px', marginTop:'16px'}}>Send food to your son in school, store your harvest, or trade in bulk.</p>
            <div style={{marginTop:'24px', display:'flex', gap:'12px', justifyContent:'center'}}>
              <button style={{...styles.btnGreen, width:'auto', padding:'14px 28px'}} onClick={()=>setView('register')}>Create Free Account</button>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'20px'}}>
            <div style={styles.card}><h3>👨‍👩‍👧 Family & Personal</h3><p style={{color:'#6b7280', fontSize:'14px'}}>Mother to son in school, student, traveler sending home. Small packages.</p></div>
            <div style={styles.card}><h3>📦 Bulk Trader</h3><p style={{color:'#6b7280', fontSize:'14px'}}>Buys large quantity to sell, or brings harvest to FoodBridge.</p></div>
            <div style={styles.card}><h3>🏬 Storage Client</h3><p style={{color:'#6b7280', fontSize:'14px'}}>Store food short/long term, safe warehouse.</p></div>
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
          <div style={{textAlign:'center', marginBottom:'20px'}}><LogoSVG size={48}/><h2>Create Account</h2></div>
          <form onSubmit={handleRegister} style={{display:'flex', flexDirection:'column', gap:'14px'}}>
            <div><label style={styles.label}>Full Name</label><input style={styles.input} placeholder="Francis Yakubu" value={form.fullName} onChange={e=>setForm({...form, fullName:e.target.value})}/></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
              <div><label style={styles.label}>Phone</label><input style={styles.input} placeholder="08163831822" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/></div>
              <div><label style={styles.label}>Location</label><input style={styles.input} placeholder="Abuja, Lokoja..." value={form.location} onChange={e=>setForm({...form, location:e.target.value})}/></div>
            </div>
            <div><label style={styles.label}>Email</label><input style={styles.input} type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/></div>
            <div><label style={styles.label}>Password</label><input style={styles.input} type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})}/></div>
            <div><label style={styles.label}>I am a... (You can change this later)</label>
              <select style={styles.input} value={form.userType} onChange={e=>setForm({...form, userType:e.target.value})}>
                <option value="family_transfer">Family & Personal - Students, family sharing</option>
                <option value="bulk_trader">Bulk Trader & Wholesaler</option>
                <option value="storage_client">Storage Client - Store food</option>
              </select>
            </div>
            <button style={styles.btnGreen} type="submit">Register</button>
            <p style={{textAlign:'center', fontSize:'14px'}}>Already have account? <span style={{color:'#16a34a', cursor:'pointer', fontWeight:600}} onClick={handleLogin}>Login</span></p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{fontFamily:'Inter,sans-serif', background:'#f3f4f6', minHeight:'100vh'}}>
      <nav style={styles.nav}>
        <div style={styles.logo}><LogoSVG/> FoodBridge</div>
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}><span>Hi, {currentUser.fullName.split(' ')[0]}</span><button style={styles.btnOutline} onClick={()=>{localStorage.removeItem('fb_user'); setCurrentUser(null); setView('home');}}>Logout</button></div>
      </nav>

      <div style={{maxWidth:'1100px', margin:'0 auto', padding:'20px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2 style={{fontSize:'22px'}}>Dashboard - {getTypeLabel(currentUser.userType)} 👋</h2>
          <button style={styles.btnOutline} onClick={()=>setView('home')}>← Home</button>
        </div>

        <div style={{display:'flex', gap:'10px', margin:'20px 0', flexWrap:'wrap'}}>
          <button style={activeTab==='overview'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('overview')}>Overview</button>
          <button style={activeTab==='add'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('add')}>+ Add Food</button>
          <button style={activeTab==='myfoods'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('myfoods')}>My Foods ({myFoods.length})</button>
          <button style={activeTab==='withdraw'?styles.tabActive:styles.tab} onClick={()=>setActiveTab('withdraw')}>Withdraw / Transfer</button>
        </div>

        {activeTab==='overview' && (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'16px'}}>
            <div style={styles.card}>
              <div style={{display:'flex', justifyContent:'space-between'}}><p style={styles.label}>Profile</p><span style={{color:'#16a34a', cursor:'pointer', fontSize:'13px', fontWeight:600}} onClick={()=>setEditMode(!editMode)}>✏️ Edit</span></div>
              <p><b>Name:</b> {currentUser.fullName}</p>
              <p><b>Phone:</b> {currentUser.phone}</p>
              <p><b>Type:</b> {getTypeLabel(currentUser.userType)}</p>
              <p><b>Location:</b> {currentUser.location}</p>
              {editMode && <div style={{marginTop:'12px', background:'#f0fdf4', padding:'12px', borderRadius:'10px'}}><p style={{fontSize:'13px'}}>Mistakenly chose wrong type?</p><button style={{...styles.btnGreen, marginTop:'8px', fontSize:'13px', padding:'8px'}} onClick={updateUserType}>Change Account Type</button></div>}
            </div>
            <div style={styles.card}><p style={styles.label}>Your Stats</p><h1 style={{fontSize:'36px', margin:'10px 0'}}>{myFoods.length}</h1><p>Active food items</p><button style={{...styles.btnGreen, marginTop:'12px'}} onClick={()=>setActiveTab('add')}>Add New Food</button></div>
            <div style={{...styles.card, background:'#16a34a', color:'white'}}><h3>What you can do:</h3><ul style={{fontSize:'14px', lineHeight:'1.8'}}>{currentUser.userType==='family_transfer'?<><li>Send food to family in school</li><li>Track delivery</li><li>Withdraw when it arrives</li></>:currentUser.userType==='bulk_trader'?<><li>Upload bulk quantity</li><li>Sell to FoodBridge</li><li>Request transport</li></>:<><li>Store short/long term</li><li>Check quality anytime</li><li>Withdraw anytime</li></>}</ul></div>
          </div>
        )}

        {activeTab==='add' && (
          <div style={{...styles.card, maxWidth:'700px'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><h3>Add Food - Quantity, Quality, Nature</h3><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button></div>
            <form onSubmit={addFood} style={{display:'flex', flexDirection:'column', gap:'14px', marginTop:'16px'}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
                <div><label style={styles.label}>Food Name *</label><input style={styles.input} required placeholder="Rice, Yam, Garri" value={foodForm.name} onChange={e=>setFoodForm({...foodForm, name:e.target.value})}/></div>
                <div><label style={styles.label}>Nature of Food</label><select style={styles.input} value={foodForm.nature} onChange={e=>setFoodForm({...foodForm, nature:e.target.value})}><option>Grains - Rice, Maize, Beans</option><option>Tubers - Yam, Cassava</option><option>Flour - Garri, Semovita</option><option>Vegetables</option><option>Packaged Food</option></select></div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'12px'}}>
                <div><label style={styles.label}>Quantity *</label><input style={styles.input} required type="number" value={foodForm.quantity} onChange={e=>setFoodForm({...foodForm, quantity:e.target.value})}/></div>
                <div><label style={styles.label}>Unit</label><select style={styles.input} value={foodForm.unit} onChange={e=>setFoodForm({...foodForm, unit:e.target.value})}><option>Bags</option><option>Kg</option><option>Baskets</option><option>Cartons</option><option>Trucks</option></select></div>
                <div><label style={styles.label}>Quality</label><select style={styles.input} value={foodForm.quality} onChange={e=>setFoodForm({...foodForm, quality:e.target.value})}><option>Fresh</option><option>Dried</option><option>Premium Grade A</option></select></div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
                <div><label style={styles.label}>Pickup</label><input style={styles.input} placeholder="Keffi Market" value={foodForm.pickup} onChange={e=>setFoodForm({...foodForm, pickup:e.target.value})}/></div>
                <div><label style={styles.label}>Delivery To</label><input style={styles.input} placeholder="Abuja - Hostel" value={foodForm.delivery} onChange={e=>setFoodForm({...foodForm, delivery:e.target.value})}/></div>
              </div>
              <button style={styles.btnGreen} type="submit">Save Food</button>
            </form>
          </div>
        )}

        {activeTab==='myfoods' && (
          <div style={{display:'grid', gap:'12px'}}>
            <button style={{...styles.tab, width:'fit-content'}} onClick={()=>setActiveTab('overview')}>← Back to Overview</button>
            {myFoods.length===0?<div style={styles.card}>No food yet. <span style={{color:'#16a34a', cursor:'pointer'}} onClick={()=>setActiveTab('add')}>Add first</span></div>:
            myFoods.map(f=>(
              <div key={f.id} style={{...styles.card, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div><h4 style={{margin:'0 0 6px'}}>{f.name} - {f.quantity} {f.unit}</h4><p style={{fontSize:'13px', color:'#6b7280', margin:0}}>{f.nature} | {f.quality} | {f.pickup} → {f.delivery} | {f.date}</p></div>
                <button style={{...styles.btnOutline, color:'#dc2626', borderColor:'#fecaca'}} onClick={()=>withdraw(f.id)}>Withdraw</button>
              </div>
            ))}
          </div>
        )}

        {activeTab==='withdraw' && (
          <div style={styles.card}>
            <div style={{display:'flex', justifyContent:'space-between'}}><h3>Withdraw / Transfer</h3><button style={styles.tab} onClick={()=>setActiveTab('overview')}>← Back</button></div>
            {myFoods.map(f=>(
              <div key={f.id} style={{border:'1px solid #e5e7eb', padding:'12px', borderRadius:'10px', marginTop:'12px', display:'flex', justifyContent:'space-between'}}>
                <span>{f.name} ({f.quantity} {f.unit})</span>
                <button style={{...styles.btnGreen, width:'auto', padding:'8px 16px'}} onClick={()=>withdraw(f.id)}>Request Withdrawal</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
