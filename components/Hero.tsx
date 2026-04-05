"use client";
export default function Hero() {
  return (
    <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", backgroundColor:"#f7f3ee", paddingTop:80 }}>
      {/* Soft background blobs */}
      <div style={{ position:"absolute", top:"-10%", right:"-5%", width:500, height:500, backgroundColor:"rgba(107,142,90,0.08)", borderRadius:"50%", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-10%", left:"-5%", width:400, height:400, backgroundColor:"rgba(139,90,60,0.07)", borderRadius:"50%", pointerEvents:"none" }} />

      <div className="animate-fade-up" style={{ position:"relative", zIndex:2, textAlign:"center", maxWidth:780, padding:"2rem 1.5rem", width:"100%" }}>

        {/* Badge */}
        <div style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", backgroundColor:"rgba(107,142,90,0.12)", border:"1px solid rgba(107,142,90,0.3)", color:"#4a7a38", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", padding:"0.4rem 1.2rem", borderRadius:20, marginBottom:"2rem" }}>
          <span>🌿</span> Open 24 Hours · 7 Days a Week
        </div>

        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(3rem,10vw,6.5rem)", fontWeight:700, lineHeight:0.95, color:"#2d2015", marginBottom:"1.5rem" }}>
          Morokot<br />
          <em style={{ fontStyle:"italic", color:"#6b8e5a" }}>Cafe</em>
        </h1>

        <p style={{ fontSize:"clamp(0.9rem,2.5vw,1.05rem)", color:"#7a5c3a", lineHeight:1.8, maxWidth:480, margin:"0 auto 1rem" }}>
          Your neighbourhood cafe, snack bar, and fuel station. Good food, good coffee, and a full tank — all in one stop.
        </p>

        {/* Service pills */}
        <div style={{ display:"flex", gap:"0.6rem", justifyContent:"center", flexWrap:"wrap", marginBottom:"2.5rem" }}>
          {["☕ Cafe & Drinks","🍱 Food & Snacks","⛽ Fuel & Gas"].map(s => (
            <span key={s} style={{ backgroundColor:"rgba(139,90,60,0.1)", color:"#7a5c3a", fontSize:"0.78rem", padding:"0.4rem 1rem", borderRadius:20, border:"1px solid rgba(139,90,60,0.2)", fontWeight:500 }}>{s}</span>
          ))}
        </div>

        <div className="hero-btns" style={{ display:"flex", gap:"1rem", justifyContent:"center" }}>
          <a href="#menu" style={{ backgroundColor:"#6b8e5a", color:"white", padding:"0.95rem 2.2rem", borderRadius:6, textDecoration:"none", fontSize:"0.88rem", fontWeight:600, letterSpacing:"0.04em" }}>View Our Menu</a>
          <a href="#contact" style={{ backgroundColor:"transparent", color:"#4a3520", padding:"0.95rem 2.2rem", border:"2px solid rgba(74,53,32,0.25)", borderRadius:6, textDecoration:"none", fontSize:"0.88rem", fontWeight:500 }}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}
