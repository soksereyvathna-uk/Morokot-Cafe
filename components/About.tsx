"use client";
export default function About() {
  return (
    <section id="about" style={{ backgroundColor:"#1a1208", padding:"6rem 2rem" }}>
      <div className="about-grid">
        <div>
          <p style={{ fontSize:"0.68rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#d4a84b", marginBottom:"1.2rem" }}>Our Story</p>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3.5rem)", fontWeight:700, lineHeight:1.1, color:"#fdf8f3", marginBottom:"1.4rem" }}>The Art of the Char</h2>
          <p style={{ color:"#9e9289", lineHeight:1.9, fontSize:"0.95rem", marginBottom:"1.2rem" }}>We started with a simple belief — that the best chicken in the world isn't complicated. It's patient. It's fire. It's time. Our pits burn hardwood charcoal sourced from sustainable forests, giving every bird that unmistakable depth of flavour you can't fake.</p>
          <p style={{ color:"#9e9289", lineHeight:1.9, fontSize:"0.95rem", marginBottom:"2.5rem" }}>Over 15 years we've perfected our dry rub, our 12-hour brine, and our low-and-slow cooking ritual. No shortcuts. No liquid smoke. Just the real thing.</p>
          <div style={{ display:"flex", gap:"2rem", flexWrap:"wrap" }}>
            {[["15+","Years Burning"],["200k+","Chickens Served"],["12hr","Marinade Time"]].map(([n,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.8rem", fontWeight:900, color:"#e8702a", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#9e9289", marginTop:"0.3rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ backgroundColor:"#2d1a08", border:"1px solid rgba(212,168,75,0.2)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"5rem", height:240, marginBottom:"1rem" }}>🔥</div>
          <div style={{ backgroundColor:"#1e1208", border:"1px solid rgba(212,168,75,0.2)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", height:130 }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"2.2rem", fontWeight:900, color:"#e8702a" }}>★ 4.9</div>
              <div style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#9e9289", marginTop:"0.3rem" }}>Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
