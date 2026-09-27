export default function App() {
  const links = {
    tiktok: "https://www.tiktok.com/@foodbridge.ng.lim?_t=ZS-9A5NZ6zEsQG&_r=1",
    youtube: "https://www.youtube.com/@foodbridgeNigeria",
    facebook: "https://www.facebook.com/profile.php?id=61594798832703&mibextid=rS40aB7S9Ucbxw6v",
    whatsapp: "https://wa.me/2348163831822",
    gmail: "mailto:foodbridge.ng.limited@gmail.com"
  };

  return (
    <>
    <style>{`
      *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}
      body{background:#FFFEFB}
      .nav{background:white;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;position:sticky;top:0;box-shadow:0 2px 10px rgba(0,0,0,0.05);border-bottom:2px solid #EADFCB}
      .logo{font-weight:900;font-size:22px;color:#0A7A42}
      .btn-green{background:#0A7A42;color:white;padding:10px 22px;border-radius:30px;text-decoration:none;font-weight:bold;display:inline-block}
      .hero{background:linear-gradient(#F7F3E8,white);text-align:center;padding:80px 20px}
      .hero h1{font-size:48px;font-weight:900;line-height:1;color:#102A18}
      .hero span{color:#0A7A42}
      .hero p{color:#5B6B5F;max-width:600px;margin:20px auto;font-size:18px}
      .card{background:white;border:1.5px solid #EADFCB;border-radius:20px;padding:24px}
      .grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;max-width:1100px;margin:40px auto;padding:0 20px}
      .section-sand{background:#F7F3E8;padding:60px 20px}
      .about{max-width:1000px;margin:60px auto;background:white;border:2px solid #EADFCB;border-radius:32px;padding:32px;display:flex;gap:32px;align-items:center;flex-wrap:wrap}
      .about img{width:260px;height:260px;object-fit:cover;border-radius:20px;border:4px solid #F7F3E8}
      .socials{display:flex;gap:10px;margin-top:20px}
      .socials a{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;text-decoration:none;font-weight:bold}
      .pricing{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;max-width:1100px;margin:40px auto;padding:0 20px}
      .price-card{border-radius:24px;padding:28px;border:1.5px solid #EADFCB}
      .footer{background:#102A18;color:#EADFCB;padding:30px;text-align:center;margin-top:40px}
    `}</style>

    <div>
      <div className="nav">
        <div className="logo">FoodBridge NG LTD</div>
        <a href={links.whatsapp} target="_blank" className="btn-green">Contact us</a>
      </div>

      <div className="hero">
        <h1>ONE PLATFORM<br/><span>TOTAL FOOD</span><br/>CONTROL</h1>
        <p>We buy yam, beans, tomatoes in bulk, store them professionally for months, and supply families & businesses - no more hunger season price.</p>
        <a href={links.whatsapp} target="_blank" className="btn-green" style={{marginTop:'20px'}}>Get Started</a>
      </div>

      <div className="grid3">
        <div className="card"><h3 style={{fontSize:'32px',color:'#0A7A42'}}>01</h3><h4>Connect Your Farm</h4><p style={{color:'#5B6B5F',fontSize:'14px',marginTop:'8px'}}>We source at harvest when cheap.</p></div>
        <div className="card"><h3 style={{fontSize:'32px',color:'#0A7A42'}}>02</h3><h4>Sync Your Storage</h4><p style={{color:'#5B6B5F',fontSize:'14px',marginTop:'8px'}}>Preserve in dry & cold chain.</p></div>
        <div className="card"><h3 style={{fontSize:'32px',color:'#0A7A42'}}>03</h3><h4>Gain Supply</h4><p style={{color:'#5B6B5F',fontSize:'14px',marginTop:'8px'}}>Get food anytime, stable price.</p></div>
      </div>

      <div className="section-sand">
        <h2 style={{textAlign:'center',fontSize:'32px',fontWeight:900}}>Everything you need to run your food business</h2>
        <div className="grid3">
          <div className="card">✓ <b>Multi-Location Support</b><br/><span style={{fontSize:'13px',color:'#5B6B5F'}}>Manage Abuja, Lafia, Jos stores from one dashboard.</span></div>
          <div className="card">✓ <b>Sales & Inventory Sync</b><br/><span style={{fontSize:'13px',color:'#5B6B5F'}}>Automatic sync of stock instantly.</span></div>
          <div className="card">✓ <b>Reports & Analytics</b><br/><span style={{fontSize:'13px',color:'#5B6B5F'}}>Price trends, best selling foods.</span></div>
        </div>
      </div>

      <div className="about">
        <img src="/founder.jpg" alt="Francis Yakubu" onError={(e)=>e.target.src='https://via.placeholder.com/400?text=Francis+Yakubu'} />
        <div>
          <h2 style={{fontSize:'36px',fontWeight:900}}>About Us</h2>
          <h4 style={{color:'#0A7A42',marginTop:'8px'}}>Francis Yakubu - Founder & CEO</h4>
          <p style={{fontSize:'13px',color:'#888'}}>FoodBridge Nigeria Limited</p>
          <p style={{marginTop:'16px',color:'#444',lineHeight:'1.6'}}>We are building Nigeria's cold-chain & dry storage infrastructure to stop 40% post-harvest loss. Registered company with mission to make food affordable year-round.</p>
          <p style={{fontWeight:'bold',marginTop:'20px'}}>Follow Our Company:</p>
          <div className="socials">
            <a href={links.facebook} target="_blank" style={{background:'#1877F2'}}>f</a>
            <a href={links.tiktok} target="_blank" style={{background:'black'}}>♫</a>
            <a href={links.youtube} target="_blank" style={{background:'red'}}>▶</a>
            <a href={links.whatsapp} target="_blank" style={{background:'#0A7A42'}}>W</a>
            <a href={links.gmail} style={{background:'#102A18'}}>@</a>
          </div>
        </div>
      </div>

      <div style={{padding:'60px 20px',textAlign:'center'}}>
        <h2 style={{fontSize:'32px',fontWeight:900}}>Simple, transparent pricing</h2>
        <div className="pricing">
          <div className="price-card" style={{background:'#FFFEFB'}}><h3>Starter</h3><h2 style={{fontSize:'32px',marginTop:'10px'}}>₦5,000/mo</h2><p style={{fontSize:'13px',marginTop:'16px'}}>✓ 1 bag storage<br/>✓ Monthly supply<br/>✓ WhatsApp support</p><a href={links.whatsapp} target="_blank" className="btn-green" style={{marginTop:'20px',background:'white',color:'#0A7A42',border:'1.5px solid #0A7A42',width:'100%',textAlign:'center'}}>Get Started</a></div>
          <div className="price-card" style={{background:'white',border:'2px solid #0A7A42'}}><span style={{background:'#0A7A42',color:'white',fontSize:'11px',padding:'4px 12px',borderRadius:'20px'}}>POPULAR</span><h3 style={{marginTop:'12px'}}>Growth</h3><h2 style={{fontSize:'32px',marginTop:'10px'}}>₦20,000/mo</h2><p style={{fontSize:'13px',marginTop:'16px'}}>✓ Everything in Starter<br/>✓ Multi-Store Sync<br/>✓ Staff Access<br/>✓ AI Forecast</p><a href={links.whatsapp} target="_blank" className="btn-green" style={{marginTop:'20px',width:'100%',textAlign:'center'}}>Start Free Trial</a></div>
          <div className="price-card" style={{background:'#F7F3E8'}}><h3>Custom</h3><h2 style={{fontSize:'24px',marginTop:'10px'}}>Contact Us</h2><p style={{fontSize:'13px',marginTop:'16px'}}>✓ For large enterprises<br/>✓ Dedicated Manager</p><a href={links.whatsapp} target="_blank" className="btn-green" style={{marginTop:'20px',background:'#102A18',width:'100%',textAlign:'center'}}>Contact Us</a></div>
        </div>
      </div>

      <div className="footer">
        <p style={{fontWeight:900,fontSize:'18px',color:'white'}}>FoodBridge Nigeria Limited</p>
        <p style={{marginTop:'8px'}}>foodbridge.ng.limited@gmail.com | +234 816 383 1822</p>
        <p style={{marginTop:'16px',fontSize:'12px'}}>© 2026 FoodBridge. Farm to Family, Preserved. | Green • White • Sand</p>
      </div>
    </div>
    </>
  );
}
