"use client";
import { useState } from "react";

/* ── Info Strip ── */
export function InfoStrip() {
  return (
    <div style={{ backgroundColor:"#6b8e5a", padding:"0.8rem 2rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"2rem", flexWrap:"wrap" }}>
      {["🕐 Open 24 Hours, 7 Days","📍 Takeo, Cambodia","⛽ Fuel & Gas Available","📞 085 8888 56"].map((t,i) => (
        <span key={i} style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:600, color:"white", whiteSpace:"nowrap" }}>{t}</span>
      ))}
    </div>
  );
}

/* ── Specials ── */
export function Specials() {
  const specials = [
    { e:"🌅", t:"Morning Special", sub:"6am – 10am", d:"Start your day right with our Nom Banh Chok or Bai Sach Chrouk combo, plus a free iced coffee with any breakfast order.", price:"$4.50", badge:"Morning" },
    { e:"🌙", t:"Late Night Deal", sub:"10pm – 6am", d:"Fuel up through the night. Any snack + drink combo gets you 20% off. Perfect for drivers and night owls.", price:"From $2.00", badge:"Night Owl" },
    { e:"⛽", t:"Fuel + Coffee", sub:"All day", d:"Fill your tank and grab a freshly brewed Cambodian iced coffee on us. Available with every fuel purchase over $10.", price:"Free Coffee", badge:"Bundle" },
  ];

  return (
    <section id="specials" style={{ backgroundColor:"#f7f3ee", padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#6b8e5a", marginBottom:"0.8rem", fontWeight:600 }}>Limited Offers</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3rem)", fontWeight:700, color:"#2d2015" }}>Today's Specials</h2>
        </div>
        <div className="services-grid">
          {specials.map(s => (
            <div key={s.t} style={{ backgroundColor:"white", borderRadius:12, padding:"2rem", boxShadow:"0 2px 16px rgba(74,53,32,0.08)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:4, backgroundColor:"#6b8e5a" }} />
              <span style={{ display:"inline-block", backgroundColor:"rgba(107,142,90,0.12)", color:"#4a7a38", fontSize:"0.62rem", letterSpacing:"0.1em", textTransform:"uppercase", padding:"0.2rem 0.7rem", borderRadius:10, fontWeight:600, marginBottom:"1rem" }}>{s.badge}</span>
              <div style={{ fontSize:"2.5rem", marginBottom:"0.8rem" }}>{s.e}</div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:700, color:"#2d2015", marginBottom:"0.2rem" }}>{s.t}</h3>
              <p style={{ fontSize:"0.72rem", color:"#6b8e5a", fontWeight:600, letterSpacing:"0.05em", marginBottom:"0.8rem" }}>{s.sub}</p>
              <p style={{ fontSize:"0.85rem", color:"#7a5c3a", lineHeight:1.7, marginBottom:"1.2rem" }}>{s.d}</p>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#6b8e5a" }}>{s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About / Services ── */
export function About() {
  return (
    <section style={{ backgroundColor:"#e8dfd4", padding:"5rem 1.5rem" }}>
      <div className="about-grid">
        <div>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#6b8e5a", marginBottom:"1rem", fontWeight:600 }}>About Us</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, color:"#2d2015", marginBottom:"1.2rem", lineHeight:1.1 }}>More Than Just a Cafe</h2>
          <p style={{ color:"#7a5c3a", lineHeight:1.9, fontSize:"0.93rem", marginBottom:"1rem" }}>Morokot Cafe is your one-stop destination — whether you need a hot meal at 3am, a cold drink in the afternoon, or a full tank to get you home. We've been serving our community around the clock.</p>
          <p style={{ color:"#7a5c3a", lineHeight:1.9, fontSize:"0.93rem", marginBottom:"2rem" }}>Alongside our cafe and snack bar, we operate a full fuel and gas station so you never have to make two stops. We're always open — rain or shine, day or night.</p>
          <div style={{ display:"flex", gap:"2rem", flexWrap:"wrap" }}>
            {[["24/7","Always Open"],["3","Services in 1"],["100+","Menu Items"]].map(([n,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.5rem", fontWeight:700, color:"#6b8e5a", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#9a7a5a", marginTop:"0.3rem", fontWeight:500 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
          {[
            { e:"☕", t:"Cafe & Drinks", d:"Coffee, fresh juices, coconut water, lemon soda and more. Hot or cold, we have it all." },
            { e:"🍱", t:"Food & Snacks", d:"Cambodian classics, grilled snacks, baguettes, and quick bites — fresh and affordable." },
            { e:"⛽", t:"Fuel & Gas Station", d:"Full service fuel and gas station attached. Petrol, diesel, and LPG available 24 hours." },
          ].map(s => (
            <div key={s.t} style={{ backgroundColor:"white", borderRadius:10, padding:"1.3rem", display:"flex", gap:"1rem", alignItems:"flex-start", boxShadow:"0 2px 8px rgba(74,53,32,0.07)" }}>
              <div style={{ fontSize:"1.8rem", flexShrink:0 }}>{s.e}</div>
              <div>
                <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", fontWeight:700, color:"#2d2015", marginBottom:"0.3rem" }}>{s.t}</h4>
                <p style={{ fontSize:"0.82rem", color:"#9a7a5a", lineHeight:1.6 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ── */
export function Contact() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name:"", phone:"", message:"" });

  return (
    <section id="contact" style={{ backgroundColor:"#f0ebe3", padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#6b8e5a", marginBottom:"0.8rem", fontWeight:600 }}>Get In Touch</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3rem)", fontWeight:700, color:"#2d2015" }}>Contact Us</h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", maxWidth:900, margin:"0 auto", alignItems:"start" }}>

          {/* Info */}
          <div>
            {[
              { e:"📍", t:"Address", d:"Takeo, Cambodia" },
              { e:"📞", t:"Phone", d:"085 8888 56" },
              { e:"🕐", t:"Hours", d:"Open 24 hours, 7 days a week" },
              { e:"⛽", t:"Fuel Station", d:"Petrol · Diesel · LPG — Always Open" },
            ].map(c => (
              <div key={c.t} style={{ display:"flex", gap:"1rem", marginBottom:"1.5rem", alignItems:"flex-start" }}>
                <div style={{ width:42, height:42, backgroundColor:"rgba(107,142,90,0.12)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", flexShrink:0 }}>{c.e}</div>
                <div>
                  <div style={{ fontWeight:600, color:"#2d2015", fontSize:"0.88rem", marginBottom:"0.2rem" }}>{c.t}</div>
                  <div style={{ color:"#7a5c3a", fontSize:"0.85rem" }}>{c.d}</div>
                </div>
              </div>
            ))}

            {/* Social media */}
            <div style={{ marginTop:"1.5rem", paddingTop:"1.5rem", borderTop:"1px solid rgba(74,53,32,0.1)" }}>
              <p style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b8e5a", fontWeight:600, marginBottom:"1rem" }}>Follow Us</p>
              <div style={{ display:"flex", gap:"0.8rem" }}>
                <a href="https://t.me/morokotcafe" target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:"0.5rem", backgroundColor:"#229ED9", color:"white", padding:"0.5rem 1rem", borderRadius:6, textDecoration:"none", fontSize:"0.82rem", fontWeight:500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                  Telegram
                </a>
                <a href="https://www.facebook.com/profile.php?id=100080345208914" target="_blank" rel="noreferrer" style={{ display:"flex", alignItems:"center", gap:"0.5rem", backgroundColor:"#1877F2", color:"white", padding:"0.5rem 1rem", borderRadius:6, textDecoration:"none", fontSize:"0.82rem", fontWeight:500 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div style={{ backgroundColor:"white", borderRadius:12, padding:"2.5rem", textAlign:"center", boxShadow:"0 2px 16px rgba(74,53,32,0.08)" }}>
              <div style={{ fontSize:"3rem", marginBottom:"1rem" }}>🌿</div>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:700, color:"#2d2015", marginBottom:"0.5rem" }}>Message Sent!</h3>
              <p style={{ color:"#7a5c3a", fontSize:"0.88rem" }}>Thanks {f.name}! We'll get back to you soon.</p>
            </div>
          ) : (
            <div style={{ backgroundColor:"white", borderRadius:12, padding:"2rem", boxShadow:"0 2px 16px rgba(74,53,32,0.08)" }}>
              <div className="contact-form">
                <div>
                  <label style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b8e5a", fontWeight:600, display:"block", marginBottom:"0.4rem" }}>Your Name</label>
                  <input value={f.name} onChange={e => setF({...f,name:e.target.value})} placeholder="e.g. Sokha" style={{ width:"100%", padding:"0.8rem 1rem", border:"1px solid rgba(74,53,32,0.2)", borderRadius:6, fontFamily:"'Nunito',sans-serif", fontSize:"0.9rem", outline:"none", color:"#2d2015", backgroundColor:"#faf8f5" }} />
                </div>
                <div>
                  <label style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b8e5a", fontWeight:600, display:"block", marginBottom:"0.4rem" }}>Phone Number</label>
                  <input value={f.phone} onChange={e => setF({...f,phone:e.target.value})} placeholder="+855 12 345 678" style={{ width:"100%", padding:"0.8rem 1rem", border:"1px solid rgba(74,53,32,0.2)", borderRadius:6, fontFamily:"'Nunito',sans-serif", fontSize:"0.9rem", outline:"none", color:"#2d2015", backgroundColor:"#faf8f5" }} />
                </div>
                <div>
                  <label style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#6b8e5a", fontWeight:600, display:"block", marginBottom:"0.4rem" }}>Message</label>
                  <textarea value={f.message} onChange={e => setF({...f,message:e.target.value})} placeholder="How can we help you?" rows={4} style={{ width:"100%", padding:"0.8rem 1rem", border:"1px solid rgba(74,53,32,0.2)", borderRadius:6, fontFamily:"'Nunito',sans-serif", fontSize:"0.9rem", outline:"none", color:"#2d2015", backgroundColor:"#faf8f5", resize:"vertical" }} />
                </div>
                <button onClick={() => { if(!f.name||!f.message){alert("Please fill in your name and message.");return;} setSent(true); }} style={{ backgroundColor:"#6b8e5a", color:"white", padding:"0.9rem", borderRadius:6, border:"none", cursor:"pointer", fontFamily:"'Nunito',sans-serif", fontSize:"0.88rem", fontWeight:600 }}>
                  Send Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact responsive fix */}
      <style>{`@media(max-width:768px){section #contact-inner,div.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer style={{ backgroundColor:"#2d2015", padding:"4rem 2rem 2rem", color:"#c4a882" }}>
      <div className="footer-grid">
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1rem" }}>
            <div style={{ width:32, height:32, backgroundColor:"#6b8e5a", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>🌿</div>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:700, color:"#f0ebe3" }}>Morokot <span style={{ color:"#8ab87a" }}>Cafe</span></span>
          </div>
          <p style={{ fontSize:"0.85rem", lineHeight:1.8, color:"#a08060", marginBottom:"1.5rem" }}>Your neighbourhood cafe, snack bar, and fuel station. Open 24 hours so you're never left without.</p>
          {/* Social icons footer */}
          <div style={{ display:"flex", gap:"0.7rem" }}>
            <a href="https://t.me/morokotcafe" target="_blank" rel="noreferrer" style={{ width:34, height:34, backgroundColor:"#229ED9", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100080345208914" target="_blank" rel="noreferrer" style={{ width:34, height:34, backgroundColor:"#1877F2", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
        {[
          { title:"Quick Links", items:[["#home","Home"],["#menu","Menu"],["#specials","Specials"],["#contact","Contact"]] },
          { title:"Services", items:[["#","Cafe & Coffee"],["#","Food & Snacks"],["#","Fuel Station"],["#","24hr Service"]] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize:"0.68rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#8ab87a", marginBottom:"1.2rem", fontWeight:600 }}>{col.title}</h4>
            <ul style={{ listStyle:"none" }}>
              {col.items.map(([h,l]) => (
                <li key={l} style={{ marginBottom:"0.6rem" }}>
                  <a href={h} style={{ color:"#a08060", fontSize:"0.85rem", textDecoration:"none" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth:1100, margin:"0 auto", paddingTop:"2rem", borderTop:"1px solid rgba(255,255,255,0.08)", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:"0.5rem", fontSize:"0.75rem", color:"#705540" }}>
        <span>© {new Date().getFullYear()} Morokot Cafe. All rights reserved.</span>
        <span>vathxmaehg</span>
      </div>
    </footer>
  );
}
