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

  const [regForm,setRegForm]=useState({firstName:'',lastName:'',email:'',password:'',confirmPassword:'',accountType:'Personal',serviceType:'Transportation'});

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!form.name || !form.email || !form.message){alert('Please fill name, email and message'); return;}
    setSent(true);
    setTimeout(()=>{setSent(false); setForm({name:'',email:'',phone:'',subject:'Transportation',message:''})},3000);
  };

  const handleRegister=(e)=>{
    e.preventDefault();
    if(!regForm.firstName || !regForm.lastName || !regForm.email || !regForm.password){
      alert('Please fill all fields'); return;
    }
    if(regForm.password !== regForm.confirmPassword){
      alert('Passwords do not match - please rewrite to confirm'); return;
    }
    setPage('faceVerify');
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
                {q:'How do I send foodstuff to my child in school?', a:'Create a Family or Personal Account, and your child should have a Student Account. Pack foodstuff, bring to FoodBridge branch, provide your child’s name, school, phone number. We transport it to our branch near the school. Your child gets SMS with pickup code and collects it. Deposit → Register → Provide details → Transport → Recipient picks up.'},
                {q:'What account type should I use?', a:'Personal: For individuals sending/receiving. Family: For families sending to relatives/loved ones. Student: For students receiving from parents/guardians. Company/Organization: For businesses, schools, NGOs, restaurants sending food to branches, clients, employees, customers. Choose the one that best describes you.'},
                {q:'Where do I drop off and pickup foodstuff?', a:'We operate through designated deposit and pickup locations/branches, currently in Gwagwalada, Abuja and expanding. You drop off at a branch near you, recipient picks up at branch near them. Address will be shared after registration. Coming soon: home pickup and delivery in Abuja.'},
                {q:'How long can you store my food?', a:'We offer short-term (days/weeks) and long-term (months) storage. You bring foodstuff, select Storage, agree on duration and fee. We store safely. You collect when needed. Suitable for individuals, families, students, companies, food suppliers. FoodBridge serves as extension of your own storage.'},
                {q:'Can I buy foodstuff in bulk from FoodBridge?', a:'Yes! FoodBridge is also a marketplace. You can buy in small, medium, large, and bulk quantities. Visit our branch, choose what you need (rice, beans, garri, palm oil etc), buy and we can transport it to your destination anywhere in Nigeria through our logistics.'},
                {q:'Can I sell my farm produce to FoodBridge?', a:'Yes. Farmers, suppliers, traders, individuals can bring foodstuff to sell. We buy at different scales subject to quality, quantity, pricing requirements. Bring your produce, tell us you want to sell, we inspect and process payment. You can also choose storage or transport instead of selling.'},
                {q:'How much does transportation cost?', a:'Cost depends on quantity, weight, distance and destination. We keep it affordable – that is part of our mission. You will get exact price at branch after providing details. No hidden charges. Contact us: 0816-383-1822 for estimate.'},
                {q:'How do I track my delivery?', a:'After deposit, you get receipt with tracking ID and SMS updates. Sender and recipient must be registered. Recipient gets SMS/call when ready for pickup with code. You can also call our support or email foodbridge.nigeria@gmail.com with your tracking ID.'},
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
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
              </div>
              <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}>
                <option>Transportation</option><option>Storage</option><option>Buying Foodstuff</option><option>Selling Foodstuff</option><option>Other</option>
              </select>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Your message *" rows={4} style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
              <button type="submit" style={{background:green,color:'white',padding:12,borderRadius:8,border:'none',fontWeight:800}}>{sent?'✓ Sent!':'Send Message'}</button>
              {sent && <div style={{background:'#dcfce7',color:green,padding:10,borderRadius:8,fontSize:13,textAlign:'center',fontWeight:700}}>Thank you! We received your message. We will contact you soon at {form.email}</div>}
            </form>
            <div style={{marginTop:16,background:'#111827',color:'white',borderRadius:10,padding:12,fontSize:13,lineHeight:1.8}}>
              <b>Direct Contact</b><br/>Email: foodbridge.nigeria@gmail.com<br/>Phone: 0816-383-1822<br/>Location: Gwagwalada, Abuja<br/>Founder: Francis Yakubu
            </div>
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
              <p style={{marginTop:10,fontWeight:800,color:'#22c55e'}}>FoodBridge: Do you Want to Store, Do you Want to Transport or are you Supplying to Foodbridge?</p>
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
          <div style={{marginTop:14,background:'white',borderRadius:14,padding:18,border:'1px solid #e7e0d0'}}>
            <h2 style={{fontSize:20,fontWeight:900,color:green}}>How FoodBridge Works</h2>
            <p style={{fontSize:14,lineHeight:1.6,marginTop:10,color:'#334155'}}>At FoodBridge, we make it easier, safer, faster, and more affordable to transport, store, buy, and sell foodstuff across Nigeria. Whether you are an individual, student, family, company, organization, school, supplier, or large-scale business, FoodBridge provides flexible solutions designed around your needs.</p>
            <p style={{fontSize:14,fontWeight:700,marginTop:12}}>Our services are built around three major categories:</p>
            <div style={{marginTop:15,background:'#F5F1E8',borderRadius:12,padding:14}}>
              <b style={{color:green}}>1. Foodstuff Transportation & Delivery</b>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:8,color:'#334155'}}>FoodBridge helps individuals, families, students, companies, organizations, and businesses transport foodstuff from one location to another, whether in small or large quantities.</p>
              <p style={{fontSize:13,fontWeight:700,marginTop:10}}>How It Works</p>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:6,color:'#334155'}}>To use our transportation service, the sender creates a FoodBridge account and provides the required details. Customers can register under the account type that best describes their needs:<br/><br/><b>Personal Account</b> – for individuals sending or receiving foodstuff.<br/><b>Family Account</b> – for families sending foodstuff to relatives and loved ones.<br/><b>Student Account</b> – for students receiving foodstuff from parents, guardians, or family members.<br/><b>Company/Organization Account</b> – for businesses and organizations transporting foodstuff to their branches, clients, employees, customers, or other destinations.<br/><br/>The sender and recipient will normally have their details registered with FoodBridge so that every delivery can be properly identified, tracked, and handed over to the right person.<br/><br/>For example, a mother with a Personal or Family Account can send foodstuff to her son or daughter who has a Student Account at school. Similarly, a company can send foodstuff or supplies to its customers, employees, branches, distributors, or business partners by providing the required recipient information.<br/><br/>FoodBridge operates through designated deposit and pickup locations/branches, making it easier for customers to drop off and collect their foodstuff.<br/><br/><b>Simply put:</b><br/>Deposit → Register the shipment → Provide sender and recipient details → FoodBridge transports the foodstuff → Recipient picks up or receives it at the designated destination.</p>
            </div>
            <div style={{marginTop:15,background:'#F5F1E8',borderRadius:12,padding:14}}>
              <b style={{color:green}}>2. Foodstuff Storage</b>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:8,color:'#334155'}}>FoodBridge provides short-term and long-term foodstuff storage solutions for individuals, families, companies, organizations, schools, suppliers, and businesses. Customers can bring their foodstuff to FoodBridge when they need a safe and organized place to keep it for a specified period.</p>
              <p style={{fontSize:13,fontWeight:700,marginTop:10}}>How It Works</p>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:6,color:'#334155'}}>When bringing foodstuff to FoodBridge, the customer must indicate what the foodstuff is intended for: Storage or Transportation.<br/><br/>If the customer chooses Storage, the foodstuff will be registered and handled according to the agreed storage arrangement and duration.<br/><br/>Storage may be suitable for: Individuals who need to keep foodstuff temporarily, Families storing food for future use, Students or parents managing food supplies, Companies keeping food inventory, Organizations and institutions, Food suppliers and traders, Businesses that need additional storage space.<br/><br/><b>Simply put:</b><br/>Bring your foodstuff → Create/verify your FoodBridge account → Select Storage → Provide the required details → Agree on the storage period → FoodBridge stores your foodstuff → Collect it when needed.<br/><br/>FoodBridge can therefore serve as an extension of your own storage capacity.</p>
            </div>
            <div style={{marginTop:15,background:'#F5F1E8',borderRadius:12,padding:14}}>
              <b style={{color:green}}>3. Buying & Selling Foodstuff</b>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:8,color:'#334155'}}>FoodBridge is also a marketplace for buying and selling foodstuff in both small and large quantities. This service allows individuals, companies, organizations, schools, suppliers, farmers, traders, and other food businesses to participate in the buying and selling of foodstuff through FoodBridge.</p>
              <p style={{fontSize:13,fontWeight:700,marginTop:12}}>If You Want to Buy</p>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:6,color:'#334155'}}>Individuals, companies, schools, organizations, restaurants, businesses, and other customers can come to FoodBridge to purchase foodstuff in the quantity they need. You can purchase foodstuff in: Small quantities, Medium quantities, Large quantities, Bulk quantities. After purchasing, you can arrange for the foodstuff to be transported to your desired destination through FoodBridge.</p>
              <p style={{fontSize:13,fontWeight:700,marginTop:12}}>If You Want to Sell</p>
              <p style={{fontSize:13,lineHeight:1.6,marginTop:6,color:'#334155'}}>FoodBridge also provides an opportunity for individuals, farmers, suppliers, companies, traders, and organizations to sell their foodstuff. You can bring your foodstuff to FoodBridge and indicate that you want to sell it. FoodBridge buys foodstuff at different scales, subject to the applicable product, quality, quantity, pricing, and purchasing requirements. You can also choose to bring your foodstuff to FoodBridge for storage or transportation instead of selling it.<br/><br/><b>Simply put:</b><br/>Bring foodstuff → Tell us whether you want to Sell, Store, or Transport → FoodBridge processes your request.<br/>Or:<br/>Visit FoodBridge → Buy the foodstuff you need → Arrange transportation → FoodBridge helps move it to your desired destination.</p>
            </div>
            <div style={{marginTop:15,background:'#111827',color:'white',borderRadius:12,padding:16}}>
              <b>One FoodBridge, Multiple Solutions</b>
              <p style={{fontSize:13,marginTop:8,color:'#cbd5e1',lineHeight:1.6}}>FoodBridge brings transportation, storage, buying, and selling together in one convenient system. Whether you want to send foodstuff to a loved one, store foodstuff for a short or long period, buy foodstuff in small or large quantities, sell your foodstuff, transport foodstuff to a customer or business, supply foodstuff to a school, organization, or company — FoodBridge is designed to make the process simple, reliable, affordable, and convenient.</p>
              <p style={{marginTop:12,fontWeight:800,color:'#22c55e'}}>Your Food. Your Destination. Your Choice.</p>
              <p style={{marginTop:4,fontWeight:800}}>FoodBridge — Connecting Food, People & Places.</p>
            </div>
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
          <input placeholder="Gmail Address" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:15}}/>
          <input placeholder="Password" type="password" style={{width:'100%',padding:12,borderRadius:8,border:'1px solid #ddd',marginTop:10}}/>
          <button style={{width:'100%',background:green,color:'white',padding:12,borderRadius:8,border:'none',marginTop:15,fontWeight:700}}>Sign In</button>
          <div style={{textAlign:'center',marginTop:16,fontSize:13}}>
            <span style={{color:'#64748b'}}>Don't have an account? </span>
            <span onClick={()=>setPage('register')} style={{color:green,fontWeight:800,cursor:'pointer',textDecoration:'underline'}}>Sign Up</span>
          </div>
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
          <p style={{fontSize:13,color:'#64748b'}}>Join FoodBridge - Gwagwalada, Abuja</p>
        </div>
        <div style={{maxWidth:450,margin:'20px auto',background:'white',padding:22,borderRadius:16,border:'1px solid #eee'}}>
          <form onSubmit={handleRegister} style={{display:'grid',gap:12}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
              <input value={regForm.firstName} onChange={e=>setRegForm({...regForm,firstName:e.target.value})} placeholder="First Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
              <input value={regForm.lastName} onChange={e=>setRegForm({...regForm,lastName:e.target.value})} placeholder="Last Name *" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            </div>
            <input value={regForm.email} onChange={e=>setRegForm({...regForm,email:e.target.value})} placeholder="Gmail Address *" type="email" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>

            {/* ACCOUNT TYPE BOX - AS YOU ASKED - FROM HOW IT WORKS */}
            <div style={{background:'#F5F1E8',borderRadius:12,padding:14,border:'1px solid #e7e0d0'}}>
              <label style={{fontSize:12,fontWeight:800,color:green}}>WHO ARE YOU? - Select Account Type *</label>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
                {[
                  {id:'Personal', desc:'Individual sending/receiving'},
                  {id:'Family', desc:'Family sending to loved ones'},
                  {id:'Student', desc:'Student receiving from parents'},
                  {id:'Company/Organization', desc:'Business, School, NGO, Restaurant'}
                ].map(a=>(
                  <div key={a.id} onClick={()=>setRegForm({...regForm,accountType:a.id})} style={{padding:10,borderRadius:8,border: regForm.accountType===a.id ? `2px solid ${green}` : '1px solid #ddd', background: regForm.accountType===a.id ? '#dcfce7' : 'white', cursor:'pointer'}}>
                    <div style={{fontSize:12,fontWeight: regForm.accountType===a.id ? 800 : 600, color: regForm.accountType===a.id ? green : '#111'}}>{a.id}</div>
                    <div style={{fontSize:10,color:'#64748b',marginTop:2}}>{a.desc}</div>
                  </div>
                ))}
              </div>

              <label style={{fontSize:12,fontWeight:800,color:green,marginTop:14,display:'block'}}>WHAT DO YOU WANT TO DO? - Service Category *</label>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}>
                {[
                  {id:'Transportation', label:'🚚 Transport', desc:'Send food to destination'},
                  {id:'Storage', label:'📦 Storage', desc:'Store food safely'},
                  {id:'Buying', label:'🛒 Buying', desc:'Buy food small/bulk'},
                  {id:'Selling', label:'🌾 Selling / Supplying', desc:'Sell farm produce to us'}
                ].map(s=>(
                  <div key={s.id} onClick={()=>setRegForm({...regForm,serviceType:s.id})} style={{padding:10,borderRadius:8,border: regForm.serviceType===s.id ? `2px solid ${green}` : '1px solid #ddd', background: regForm.serviceType===s.id ? '#dcfce7' : 'white', cursor:'pointer'}}>
                    <div style={{fontSize:12,fontWeight: regForm.serviceType===s.id ? 800 : 600, color: regForm.serviceType===s.id ? green : '#111'}}>{s.label}</div>
                    <div style={{fontSize:10,color:'#64748b',marginTop:2}}>{s.desc}</div>
                  </div>
                ))}
              </div>
              <p style={{fontSize:10,color:'#94a3b8',marginTop:8}}>This matches How It Works: Store, Transport, or Supplying to FoodBridge</p>
            </div>

            <input value={regForm.password} onChange={e=>setRegForm({...regForm,password:e.target.value})} placeholder="Password *" type="password" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            <input value={regForm.confirmPassword} onChange={e=>setRegForm({...regForm,confirmPassword:e.target.value})} placeholder="Confirm Password - Rewrite again *" type="password" style={{padding:12,borderRadius:8,border:'1px solid #ddd',fontSize:14}}/>
            
            <button type="submit" style={{background:green,color:'white',padding:13,borderRadius:8,border:'none',fontWeight:800,marginTop:6}}>Sign Up → Face Verification</button>
            
            <div style={{textAlign:'center',fontSize:13,marginTop:8}}>
              <span style={{color:'#64748b'}}>Already have an account? </span>
              <span onClick={()=>setPage('login')} style={{color:green,fontWeight:800,cursor:'pointer',textDecoration:'underline'}}>Sign In</span>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if(page==='faceVerify'){
    return(
      <div style={{minHeight:'100vh',background:'#f8fafc',fontFamily:'Inter,sans-serif',padding:20,textAlign:'center'}}>
        <h2 style={{color:green}}>Face Verification - Coming Next</h2>
        <p style={{fontSize:13}}>Hello {regForm.firstName} {regForm.lastName}</p>
        <p style={{fontSize:12}}>Account: {regForm.accountType} - Service: {regForm.serviceType}</p>
        <p style={{fontSize:13,marginTop:10}}>Camera will open here next step.</p>
        <button onClick={()=>setPage('home')} style={{marginTop:20,background:green,color:'white',padding:12,borderRadius:8,border:'none'}}>Back to Home</button>
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
          <div onClick={()=>setSol(!sol)} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',fontWeight:600,cursor:'pointer',display:'flex',justifyContent:'space-between'}}><span>Solutions</span><span>{sol?'▴':'▾'}</span></div>
          {sol && <div style={{padding:'0 0 12px 0',display:'grid',gap:8}}>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>👨‍👩‍👧‍👦 Personal & Family Delivery</b><p style={{fontSize:11,color:'#64748b',marginTop:4}}>Send foodstuff to loved ones across Nigeria</p></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🎓 Student Food Support</b><p style={{fontSize:11,color:'#64748b',marginTop:4}}>For parents sending food to students in school</p></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🏢 Business & Organization Logistics</b><p style={{fontSize:11,color:'#64748b',marginTop:4}}>For companies, schools, restaurants, NGOs</p></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>📦 Secure Food Storage</b><p style={{fontSize:11,color:'#64748b',marginTop:4}}>Short & long-term storage solutions</p></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🛒 Buy & Sell Marketplace</b><p style={{fontSize:11,color:'#64748b',marginTop:4}}>Buy in small/bulk, sell your farm produce</p></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{background:'#F5F1E8',borderRadius:10,padding:12,cursor:'pointer'}}><b style={{fontSize:13,color:green}}>🚚 Bulk & Inter-State Transport</b><p style={{fontSize:11,color:'#64748b',marginTop:4}}>Move large quantities across Nigeria</p></div>
            <div onClick={()=>{setMenu(false);setPage('solutions')}} style={{textAlign:'center',padding:'8px',color:green,fontWeight:700,fontSize:12,cursor:'pointer'}}>View All Solutions →</div>
          </div>}
          <div onClick={()=>{setMenu(false);setPage('about')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>About</div>
          <div onClick={()=>{setMenu(false);setPage('blog')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Blog</div>
          <div onClick={()=>{setMenu(false);setPage('support')}} style={{padding:'18px 0',borderBottom:'1px solid #f1f5f9',cursor:'pointer',fontWeight:600}}>Support</div>
          <div onClick={()=>setMenu(false)} style={{padding:'18px 0',cursor:'pointer',fontWeight:700,color:green}}>← Back to Home</div>
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
