import { useState, useEffect } from 'react';

// LOGO COMPONENT - Basket on Bridge (Farm to City)
const Logo = ({ size = 40 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Bridge */}
      <path d="M10 60 Q50 20 90 60" stroke="#16a34a" strokeWidth="6" fill="none" />
      <path d="M10 70 Q50 30 90 70" stroke="#16a34a" strokeWidth="6" fill="none" />
      {/* Basket */}
      <path d="M35 45 L35 65 Q50 75 65 65 L65 45" fill="#d4a017" />
      <path d="M35 45 Q50 35 65 45" fill="#facc15" />
      {/* Food grains */}
      <circle cx="42" cy="42" r="2" fill="#fef3c7" />
      <circle cx="50" cy="38" r="2.5" fill="#fef3c7" />
      <circle cx="58" cy="42" r="2" fill="#fef3c7" />
      {/* Farm */}
      <rect x="8" y="55" width="8" height="8" fill="#16a34a" />
      {/* City */}
      <rect x="82" y="50" width="5" height="15" fill="#d4a017" />
    </svg>
    <span style={{ fontWeight: 'bold', fontSize: size*0.5, color: '#14532d' }}>FoodBridge</span>
  </div>
);

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', password: '', confirm: '', userType: 'consumer', location: '' });
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  useEffect(() => {
    const saved = localStorage.getItem('foodbridge_user');
    if(saved) setUser(JSON.parse(saved));
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if(!form.fullName ||!form.phone ||!form.email ||!form.password) return alert('Fill all fields');
    if(form.password!== form.confirm) return alert('Passwords do not match');
    if(form.password.length < 6) return alert('Password min 6 chars');

    const users = JSON.parse(localStorage.getItem('foodbridge_users') || '[]');
    if(users.find(u => u.email === form.email)) return alert('Email already registered');

    const newUser = {...form, id: Date.now() };
    users.push(newUser);
    localStorage.setItem('foodbridge_users', JSON.stringify(users));
    localStorage.setItem('foodbridge_user', JSON.stringify(newUser));
    setUser(newUser);
    setPage('dashboard');
    alert('Registration successful! Welcome to FoodBridge');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('foodbridge_users') || '[]');
    const found = users.find(u => u.email === loginForm.email && u.password === loginForm.password);
    if(!found) return alert('Invalid email or password');
    localStorage.setItem('foodbridge_user', JSON.stringify(found));
    setUser(found);
    setPage('dashboard');
  };

  const logout = () => {
    localStorage.removeItem('foodbridge_user');
    setUser(null);
    setPage('home');
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', background: '#f8fafc' }}>
      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', alignItems: 'center' }}>
        <div onClick={() => setPage('home')} style={{ cursor: 'pointer' }}><Logo /></div>
        <div style={{ display: 'flex', gap: '15px' }}>
          {!user? <>
            <button onClick={() => setPage('login')} style={btnOutline}>Login</button>
            <button onClick={() => setPage('register')} style={btnGreen}>Register</button>
          </> : <>
            <span style={{ padding: '8px' }}>Hi, {user.fullName.split(' ')[0]}</span>
            <button onClick={() => setPage('dashboard')} style={btnOutline}>Dashboard</button>
            <button onClick={logout} style={btnOutline}>Logout</button>
          </>}
        </div>
      </nav>

      {page === 'home' && (
        <div>
          <div style={{ textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(135deg,#dcfce7,#fef9c3)' }}>
            <Logo size={80} />
            <h1 style={{ fontSize: '48px', color: '#14532d', margin: '20px 0' }}>Bridging Farms to Families</h1>
            <p style={{ fontSize: '20px', color: '#4b5563', maxWidth: '700px', margin: '0 auto 30px' }}>Nigeria's first digital food bank. We connect farmers with surplus, donors, and families in need through a transparent basket-on-bridge system.</p>
            <button onClick={() => setPage('register')} style={{...btnGreen, padding: '15px 30px', fontSize: '18px' }}>Join FoodBridge Now</button>

            {/* FOUNDER */}
            <div style={{ marginTop: '60px', background: 'white', maxWidth: '600px', margin: '60px auto 0', padding: '25px', borderRadius: '20px', display: 'flex', gap: '20px', alignItems: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" alt="founder" style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0 }}>Founder - Abuja, FCT</h3>
                <p style={{ margin: '5px 0', color: '#6b7280' }}>"I built FoodBridge to end food waste and hunger in Nigeria. Every basket shared is a bridge to hope."</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: '20px', padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
            {[
              { t: 'For Farmers', d: 'Sell surplus, reduce waste, earn more' },
              { t: 'For Families', d: 'Access affordable fresh food near you' },
              { t: 'For Donors', d: 'Track your impact, transparent donations' },
            ].map(c => (
              <div key={c.t} style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ color: '#16a34a' }}>{c.t}</h3><p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === 'register' && (
        <div style={formWrap}>
          <div style={formCard}>
            <h2>Join FoodBridge</h2>
            <p>Create your account - 100% free</p>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
              <input placeholder="Full Name *" style={input} value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value })} />
              <input placeholder="Phone Number (e.g. 080...)*" style={input} value={form.phone} onChange={e => setForm({...form, phone: e.target.value })} />
              <input placeholder="Email *" type="email" style={input} value={form.email} onChange={e => setForm({...form, email: e.target.value })} />
              <input placeholder="Location (e.g. Abuja)" style={input} value={form.location} onChange={e => setForm({...form, location: e.target.value })} />
              <select style={input} value={form.userType} onChange={e => setForm({...form, userType: e.target.value })}>
                <option value="consumer">I need food (Consumer)</option>
                <option value="farmer">I am a Farmer</option>
                <option value="donor">I want to Donate</option>
                <option value="volunteer">Volunteer / Rider</option>
              </select>
              <input placeholder="Password *" type="password" style={input} value={form.password} onChange={e => setForm({...form, password: e.target.value })} />
              <input placeholder="Confirm Password *" type="password" style={input} value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value })} />
              <button type="submit" style={btnGreen}>Create Account</button>
            </form>
            <p style={{ marginTop: '15px' }}>Already have account? <span onClick={() => setPage('login')} style={{ color: '#16a34a', cursor: 'pointer' }}>Login</span></p>
          </div>
        </div>
      )}

      {page === 'login' && (
        <div style={formWrap}>
          <div style={formCard}>
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
              <input placeholder="Email" type="email" style={input} value={loginForm.email} onChange={e => setLoginForm({...loginForm, email: e.target.value })} />
              <input placeholder="Password" type="password" style={input} value={loginForm.password} onChange={e => setLoginForm({...loginForm, password: e.target.value })} />
              <button type="submit" style={btnGreen}>Login</button>
            </form>
            <p style={{ marginTop: '15px' }}>No account? <span onClick={() => setPage('register')} style={{ color: '#16a34a', cursor: 'pointer' }}>Register</span></p>
          </div>
        </div>
      )}

      {page === 'dashboard' && user && (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
          <h1>Dashboard - Hello {user.fullName} 👋</h1>
          <div style={{ background: 'white', padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
            <p><b>Name:</b> {user.fullName}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Type:</b> {user.userType}</p>
            <p><b>Location:</b> {user.location}</p>
            <p style={{ marginTop: '20px', color: '#16a34a', fontWeight: 'bold' }}>✅ Registration working! Your account is saved in browser.</p>
          </div>
        </div>
      )}
    </div>
  );
}

const btnGreen = { background: '#16a34a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' };
const btnOutline = { background: 'white', color: '#16a34a', border: '1px solid #16a34a', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer' };
const input = { padding: '12px', borderRadius: '10px', border: '1px solid #d1d5db', fontSize: '15px' };
const formWrap = { display: 'flex', justifyContent: 'center', padding: '50px 20px' };
const formCard = { background: 'white', padding: '35px', borderRadius: '20px', width: '100%', maxWidth: '450px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' };
