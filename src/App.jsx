import { useState, useEffect } from 'react';

// --- FOOD BRIDGE LOGO - Basket on Bridge ---
const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="42" height="32" viewBox="0 0 200 120" fill="none">
      <path d="M10 100 L60 10 L100 5 L140 10 L190 100" stroke="#16a34a" strokeWidth="8" fill="none" strokeLinejoin="round"/>
      <path d="M10 100 Q100 85 190 100" stroke="#16a34a" strokeWidth="8" fill="none"/>
      <path d="M75 55 Q100 35 125 55 L120 75 L80 75 Z" fill="#d4a017" stroke="#d4a017"/>
      <circle cx="95" cy="45" r="3" fill="#f5d76e"/><circle cx="105" cy="42" r="3" fill="#f5d76e"/><circle cx="100" cy="50" r="2.5" fill="#f5d76e"/>
    </svg>
    <span className="font-black text-xl text-green-800">FoodBridge</span>
  </div>
);

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [tab, setTab] = useState('overview');
  const [foods, setFoods] = useState([]);

  // Auth forms
  const [reg, setReg] = useState({fullName:'', phone:'', email:'', password:'', type:'family_transfer', location:''});
  const [login, setLogin] = useState({email:'', password:''});

  // Add food form
  const [foodForm, setFoodForm] = useState({
    foodName:'', nature:'Rice / Grains', quantity:'', unit:'Bags (50kg)', quality:'Fresh',
    storageDuration:'1 Week', pickup:'', delivery:'', note:''
  });

  useEffect(()=>{
    const u = localStorage.getItem('fb_user');
    const f = localStorage.getItem('fb_foods');
    if(u) { setUser(JSON.parse(u)); setPage('dashboard'); }
    if(f) setFoods(JSON.parse(f));
  },[]);

  const handleRegister = (e)=>{
    e.preventDefault();
    if(!reg.fullName ||!reg.phone ||!reg.email ||!reg.password) return alert('Fill all fields');
    const allUsers = JSON.parse(localStorage.getItem('fb_all_users')||'[]');
    if(allUsers.find(u=>u.email===reg.email)) return alert('Email already exists, login');
    const newUser = {...reg, id:Date.now()};
    allUsers.push(newUser);
    localStorage.setItem('fb_all_users', JSON.stringify(allUsers));
    localStorage.setItem('fb_user', JSON.stringify(newUser));
    setUser(newUser); setPage('dashboard');
  };

  const handleLogin = (e)=>{
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem('fb_all_users')||'[]');
    const found = allUsers.find(u=>u.email===login.email && u.password===login.password);
    if(!found) return alert('Wrong email/password');
    localStorage.setItem('fb_user', JSON.stringify(found));
    setUser(found); setPage('dashboard');
  };

  const logout = ()=>{
    localStorage.removeItem('fb_user');
    setUser(null); setPage('home'); setTab('overview');
  };

  const addFood = (e)=>{
    e.preventDefault();
    if(!foodForm.foodName ||!foodForm.quantity) return alert('Add food name & quantity');
    const newFood = {id:Date.now(), userEmail:user.email, status:'Stored', date:new Date().toLocaleDateString(),...foodForm};
    const updated = [newFood,...foods];
    setFoods(updated);
    localStorage.setItem('fb_foods', JSON.stringify(updated));
    setFoodForm({foodName:'', nature:'Rice / Grains', quantity:'', unit:'Bags (50kg)', quality:'Fresh', storageDuration:'1 Week', pickup:'', delivery:'', note:''});
    setTab('myfoods');
    alert('Food Added Successfully!');
  };

  const withdrawFood = (id)=>{
    if(confirm('Request withdrawal/delivery for this item?')){
      const updated = foods.map(f=> f.id===id? {...f, status:'Withdrawal Requested'} : f);
      setFoods(updated);
      localStorage.setItem('fb_foods', JSON.stringify(updated));
    }
  };

  const myFoods = foods.filter(f=>f.userEmail===user?.email);

  if(page==='dashboard' && user){
    const typeLabel = {
      family_transfer: 'Family & Personal Transfer',
      bulk_trader: 'Bulk Trader & Wholesaler',
      storage_client: 'Storage Client'
    }[user.type];

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm sticky top-0 z-10 px-4 py-3 flex justify-between items-center">
          <Logo/>
          <div className="flex gap-2 items-center">
            <span className="text-sm hidden md:block">Hi, {user.fullName.split(' ')[0]}</span>
            <button onClick={logout} className="border border-green-600 text-green-700 px-4 py-1 rounded-full text-sm">Logout</button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-4 gap-4 mt-4">
          {/* Sidebar Tabs */}
          <div className="bg-white rounded-xl p-3 h-fit shadow-sm">
            <p className="font-bold mb-3 text-sm">{typeLabel}</p>
            <div className="space-y-1">
              {[
                {id:'overview', label:'📊 Overview'},
                {id:'add', label:'➕ Add Food'},
                {id:'myfoods', label:'📦 My Foods'},
                {id:'withdraw', label:'🚚 Withdraw / Transfer'},
                {id:'storage', label:'🏚️ My Storage'},
              ].map(t=>(
                <button key={t.id} onClick={()=>setTab(t.id)} className={`w-full text-left px-3 py-2.5 rounded-lg text-sm ${tab===t.id?'bg-green-600 text-white':'hover:bg-gray-100'}`}>{t.label}</button>
              ))}
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg text-xs">
              <p><b>Name:</b> {user.fullName}</p><p><b>Phone:</b> {user.phone}</p><p><b>Type:</b> {typeLabel}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {tab==='overview' && (
              <div className="space-y-4">
                <h1 className="text-2xl font-bold">Welcome {user.fullName} 👋</h1>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-2xl font-bold">{myFoods.length}</p><p className="text-xs text-gray-500">Items Stored</p></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-2xl font-bold">{myFoods.filter(f=>f.status==='Stored').length}</p><p className="text-xs text-gray-500">Active</p></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-2xl font-bold text-green-600">Safe</p><p className="text-xs text-gray-500">Storage Status</p></div>
                </div>
                {user.type==='family_transfer' && <div className="bg-blue-50 p-4 rounded-xl text-sm">💡 <b>For You:</b> Send food from mother to student, family sharing, traveler parcels. Use <b>Add Food → Transfer</b> to send to another city.</div>}
                {user.type==='bulk_trader' && <div className="bg-yellow-50 p-4 rounded-xl text-sm">💡 <b>For Traders:</b> Supply large quantities to FoodBridge or request transport for your goods to markets. Add your bulk stock.</div>}
                {user.type==='storage_client' && <div className="bg-green-50 p-4 rounded-xl text-sm">💡 <b>Storage:</b> Your food is stored securely. Set duration (weeks/months) when adding food. Withdraw anytime.</div>}
              </div>
            )}

            {tab==='add' && (
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="font-bold text-lg mb-4">Add / Deposit Food</h2>
                <form onSubmit={addFood} className="grid md:grid-cols-2 gap-4">
                  <div><label className="text-xs font-bold">Food Name *</label><input value={foodForm.foodName} onChange={e=>setFoodForm({...foodForm, foodName:e.target.value})} placeholder="e.g. Bags of Rice, Yam Tubers" className="w-full border p-2.5 rounded-lg text-sm"/></div>
                  <div><label className="text-xs font-bold">Nature of Food *</label><select value={foodForm.nature} onChange={e=>setFoodForm({...foodForm, nature:e.target.value})} className="w-full border p-2.5 rounded-lg text-sm"><option>Rice / Grains</option><option>Tubers (Yam, Cassava)</option><option>Beans / Legumes</option><option>Vegetables</option><option>Palm Oil / Liquids</option><option>Processed Food</option><option>Other</option></select></div>
                  <div><label className="text-xs font-bold">Quantity *</label><input type="number" value={foodForm.quantity} onChange={e=>setFoodForm({...foodForm, quantity:e.target.value})} placeholder="e.g. 10" className="w-full border p-2.5 rounded-lg text-sm"/></div>
                  <div><label className="text-xs font-bold">Unit</label><select value={foodForm.unit} onChange={e=>setFoodForm({...foodForm, unit:e.target.value})} className="w-full border p-2.5 rounded-lg text-sm"><option>Bags (50kg)</option><option>Bags (25kg)</option><option>Kilograms (kg)</option><option>Tubers / Pieces</option><option>Crates</option><option>Liters</option></select></div>
                  <div><label className="text-xs font-bold">Quality</label><select value={foodForm.quality} onChange={e=>setFoodForm({...foodForm, quality:e.target.value})} className="w-full border p-2.5 rounded-lg text-sm"><option>Fresh</option><option>Dried</option><option>Smoked</option><option>Frozen</option><option>Processed</option></select></div>
                  <div><label className="text-xs font-bold">Storage Duration</label><select value={foodForm.storageDuration} onChange={e=>setFoodForm({...foodForm, storageDuration:e.target.value})} className="w-full border p-2.5 rounded-lg text-sm"><option>1 Week</option><option>2 Weeks</option><option>1 Month</option><option>3 Months</option><option>6 Months</option><option>Until I Withdraw</option></select></div>
                  <div><label className="text-xs font-bold">Pickup Location</label><input value={foodForm.pickup} onChange={e=>setFoodForm({...foodForm, pickup:e.target.value})} placeholder="Your village / address" className="w-full border p-2.5 rounded-lg text-sm"/></div>
                  <div><label className="text-xs font-bold">Delivery / Storage Destination</label><input value={foodForm.delivery} onChange={e=>setFoodForm({...foodForm, delivery:e.target.value})} placeholder="Abuja, School, Market..." className="w-full border p-2.5 rounded-lg text-sm"/></div>
                  <div className="md:col-span-2"><label className="text-xs font-bold">Note</label><textarea value={foodForm.note} onChange={e=>setFoodForm({...foodForm, note:e.target.value})} placeholder="e.g. Send 2 bags to my son at UniAbuja, keep 8 bags in storage" className="w-full border p-2.5 rounded-lg text-sm" rows="2"></textarea></div>
                  <button className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg font-bold">Deposit Food Now</button>
                </form>
              </div>
            )}

            {tab==='myfoods' && (
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="font-bold mb-4">My Deposited Foods ({myFoods.length})</h2>
                {myFoods.length===0? <p className="text-gray-400 text-sm">No food added yet. Go to Add Food.</p> :
                  <div className="space-y-3">
                    {myFoods.map(f=>(
                      <div key={f.id} className="border rounded-lg p-3 flex justify-between items-center">
                        <div><p className="font-bold text-sm">{f.foodName} - {f.quantity} {f.unit}</p><p className="text-xs text-gray-500">{f.nature} | {f.quality} | {f.storageDuration} | {f.status}</p><p className="text-xs">{f.pickup} → {f.delivery}</p></div>
                        <button onClick={()=>withdrawFood(f.id)} className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full">Withdraw</button>
                      </div>
                    ))}
                  </div>
                }
              </div>
            )}

            {tab==='withdraw' && (
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="font-bold mb-4">Withdraw / Transfer / Transport Request</h2>
                <p className="text-sm text-gray-600 mb-3">Select an item from My Foods and click Withdraw, or make a new transfer request:</p>
                <div className="space-y-2">
                  {myFoods.filter(f=>f.status==='Withdrawal Requested').map(f=>(
                    <div key={f.id} className="bg-yellow-50 p-3 rounded-lg text-sm"><b>{f.foodName}</b> - Withdrawal requested, our agent will call {user.phone} in 24hrs.</div>
                  ))}
                  {myFoods.filter(f=>f.status==='Withdrawal Requested').length===0 && <p className="text-xs text-gray-400">No pending withdrawals</p>}
                </div>
              </div>
            )}

            {tab==='storage' && (
              <div className="bg-white rounded-xl shadow-sm p-5">
                <h2 className="font-bold mb-2">🏚️ Storage Space</h2>
                <p className="text-sm text-gray-600">Your current storage allocation at FoodBridge Abuja warehouse.</p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg"><p className="text-sm">Total Items: {myFoods.length}</p><p className="text-sm">Estimated Space: {myFoods.reduce((a,c)=>a+ (parseInt(c.quantity)||0),0)} units</p><p className="text-xs mt-2 text-green-700">Storage fee: ₦500 per bag per month. Family transfers are free for first 2 weeks.</p></div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-10"><Logo/><div className="flex gap-3"><button onClick={()=>setPage('login')} className="text-sm">Login</button><button onClick={()=>setPage('register')} className="bg-green-600 text-white px-5 py-2 rounded-full text-sm">Get Started</button></div></nav>

      {page==='home' && (
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight">Connecting <span className="text-green-600">Farms</span> to Families<br/>in Abuja</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Family sending food to your son in school? Trader with 100 bags? Need safe storage? FoodBridge is your bridge.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10 text-left">
            <div className="border rounded-xl p-5"><h3 className="font-bold">👨‍👩‍👦 Family & Personal</h3><p className="text-sm text-gray-600 mt-2">Mother to son in school, family food sharing, traveler sending goods home. We transport small parcels city-to-city.</p></div>
            <div className="border rounded-xl p-5"><h3 className="font-bold">📦 Bulk Trader</h3><p className="text-sm text-gray-600 mt-2">Buy in large quantity, sell to FoodBridge or use us to transport your goods to markets and buyers.</p></div>
            <div className="border rounded-xl p-5"><h3 className="font-bold">🏚️ Storage Client</h3><p className="text-sm text-gray-600 mt-2">Store small or large quantity for short or long term in our secure Abuja warehouse. Withdraw anytime.</p></div>
          </div>
          <button onClick={()=>setPage('register')} className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-bold">Create Free Account</button>
        </div>
      )}

      {page==='register' && (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-xl">
          <h2 className="font-bold text-xl mb-4">Create Account</h2>
          <form onSubmit={handleRegister} className="space-y-3">
            <input value={reg.fullName} onChange={e=>setReg({...reg, fullName:e.target.value})} placeholder="Full Name" className="w-full border p-2.5 rounded-lg text-sm"/>
            <input value={reg.phone} onChange={e=>setReg({...reg, phone:e.target.value})} placeholder="Phone (e.g. 08163831822)" className="w-full border p-2.5 rounded-lg text-sm"/>
            <input value={reg.email} onChange={e=>setReg({...reg, email:e.target.value})} placeholder="Email" className="w-full border p-2.5 rounded-lg text-sm"/>
            <input type="password" value={reg.password} onChange={e=>setReg({...reg, password:e.target.value})} placeholder="Password" className="w-full border p-2.5 rounded-lg text-sm"/>
            <select value={reg.type} onChange={e=>setReg({...reg, type:e.target.value})} className="w-full border p-2.5 rounded-lg text-sm">
              <option value="family_transfer">Family & Personal Transfer - For students, family sharing, travelers</option>
              <option value="bulk_trader">Bulk Trader & Wholesaler - Businessman buying/selling large quantity</option>
              <option value="storage_client">Storage Client - Store food for short/long term</option>
            </select>
            <input value={reg.location} onChange={e=>setReg({...reg, location:e.target.value})} placeholder="Your Location (e.g. Abuja, Keffi)" className="w-full border p-2.5 rounded-lg text-sm"/>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">Register</button>
            <p className="text-xs text-center">Already have account? <span onClick={()=>setPage('login')} className="text-green-600 cursor-pointer">Login</span></p>
          </form>
        </div>
      )}

      {page==='login' && (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-xl">
          <h2 className="font-bold text-xl mb-4">Login</h2>
          <form onSubmit={handleLogin} className="space-y-3">
            <input value={login.email} onChange={e=>setLogin({...login, email:e.target.value})} placeholder="Email" className="w-full border p-2.5 rounded-lg text-sm"/>
            <input type="password" value={login.password} onChange={e=>setLogin({...login, password:e.target.value})} placeholder="Password" className="w-full border p-2.5 rounded-lg text-sm"/>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}
