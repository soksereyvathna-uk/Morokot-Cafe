"use client";
import { useEffect, useState } from "react";
import { supabase, type MenuItem } from "@/lib/supabase";

const CATS = ["all","drinks","food","snacks","specials"] as const;
const CAT_LABELS: Record<string,string> = { all:"All", drinks:"☕ Drinks", food:"🍱 Food", snacks:"🍡 Snacks", specials:"⭐ Specials" };

export default function MenuSection() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("menu_items").select("*").eq("available",true)
      .order("category").order("created_at")
      .then(({ data }) => { if (data) setItems(data); setLoading(false); });
  }, []);

  const list = filter === "all" ? items : items.filter(i => i.category === filter);

  return (
    <section id="menu" style={{ backgroundColor:"#f0ebe3", padding:"5rem 1.5rem" }}>
      {/* Header */}
      <div style={{ textAlign:"center", maxWidth:560, margin:"0 auto 2.5rem" }}>
        <p style={{ fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#6b8e5a", marginBottom:"0.8rem", fontWeight:600 }}>What We Offer</p>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3rem)", fontWeight:700, color:"#2d2015", marginBottom:"0.8rem" }}>Our Menu</h2>
        <p style={{ color:"#7a5c3a", fontSize:"0.9rem", lineHeight:1.7 }}>Fresh, affordable, and available any time — day or night.</p>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"0.5rem", marginBottom:"2.5rem" }}>
        {CATS.map(c => (
          <button key={c} onClick={() => setFilter(c)} style={{ padding:"0.55rem 1.1rem", backgroundColor: filter===c ? "#6b8e5a" : "transparent", border: filter===c ? "1px solid #6b8e5a" : "1px solid rgba(74,53,32,0.2)", color: filter===c ? "white" : "#7a5c3a", cursor:"pointer", fontSize:"0.8rem", fontWeight:500, fontFamily:"'Nunito',sans-serif", borderRadius:20 }}>
            {CAT_LABELS[c]}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <p style={{ textAlign:"center", color:"#7a5c3a", padding:"3rem" }}>Loading menu...</p>
      ) : list.length === 0 ? (
        <p style={{ textAlign:"center", color:"#7a5c3a", padding:"3rem" }}>No items here yet.</p>
      ) : (
        <div className="menu-grid">
          {list.map(item => (
            <div key={item.id} style={{ backgroundColor:"white", borderRadius:10, overflow:"hidden", display:"flex", flexDirection:"column", boxShadow:"0 2px 12px rgba(74,53,32,0.08)" }}>
              <div className="menu-card-img" style={{ width:"100%", height:170, backgroundColor:"#e8dfd4", flexShrink:0, position:"relative", overflow:"hidden" }}>
                {item.image_url
                  ? <img src={item.image_url} alt={item.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  : <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"3rem" }}>🍽️</div>
                }
                {item.tag && (
                  <span style={{ position:"absolute", top:10, left:10, backgroundColor:"#6b8e5a", color:"white", fontSize:"0.6rem", letterSpacing:"0.08em", textTransform:"uppercase", padding:"0.2rem 0.6rem", borderRadius:10, fontWeight:600 }}>
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="menu-card-body" style={{ padding:"1rem 1.1rem", flex:1, display:"flex", flexDirection:"column" }}>
                <h3 className="menu-card-name" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", fontWeight:700, color:"#2d2015", margin:"0 0 0.4rem" }}>{item.name}</h3>
                <p className="menu-card-desc" style={{ fontSize:"0.78rem", color:"#9a7a5a", lineHeight:1.6, flex:1, margin:"0 0 0.8rem" }}>{item.description}</p>
                <p className="menu-card-price" style={{ fontSize:"1rem", fontWeight:700, color:"#6b8e5a", margin:0 }}>${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
