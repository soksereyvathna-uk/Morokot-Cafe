"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, backgroundColor:"rgba(247,243,238,0.96)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(107,142,90,0.2)" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 2rem", maxWidth:1200, margin:"0 auto" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration:"none" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
            <div style={{ width:36, height:36, backgroundColor:"#6b8e5a", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem" }}>🌿</div>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:700, color:"#4a3520" }}>
              Morokot <span style={{ color:"#6b8e5a" }}>Cafe</span>
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <ul className="nav-links" style={{ gap:"2.5rem", listStyle:"none", alignItems:"center" }}>
          {[["#home","Home"],["#menu","Menu"],["#specials","Specials"],["#contact","Contact"]].map(([h,l]) => (
            <li key={h}>
              <a href={h} style={{ color:"#4a3520", textDecoration:"none", fontSize:"0.85rem", letterSpacing:"0.05em", fontWeight:500 }}>{l}</a>
            </li>
          ))}
          <li>
            <div style={{ display:"flex", gap:"0.6rem", alignItems:"center", paddingLeft:"1rem", borderLeft:"1px solid rgba(107,142,90,0.3)" }}>
              {/* Telegram */}
              <a href="https://t.me/morokotcafe" target="_blank" rel="noreferrer" title="Telegram" style={{ width:32, height:32, backgroundColor:"#229ED9", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100080345208914" target="_blank" rel="noreferrer" title="Facebook" style={{ width:32, height:32, backgroundColor:"#1877F2", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
             <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noreferrer"
              style={{width:32,height:32,background:"#000",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-1.9V16.3a5.3 5.3 0 1 1-5.3-5.3v2.6a2.7 2.7 0 1 0 2.7 2.7V0h2.6a4.8 4.8 0 0 0 3.3 4.6v2.1z"/>
              </svg>
            </a>
            </div>
          </li>
        </ul>

        {/* Burger */}
        <button className="nav-burger" onClick={() => setOpen(!open)} style={{ background:"none", border:"none", color:"#4a3520", fontSize:"1.6rem", cursor:"pointer", lineHeight:1 }}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor:"#f7f3ee", borderTop:"1px solid rgba(107,142,90,0.2)", padding:"1.5rem 2rem 2rem", display:"flex", flexDirection:"column", gap:"1.2rem" }}>
          {[["#home","Home"],["#menu","Menu"],["#specials","Specials"],["#contact","Contact"]].map(([h,l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{ color:"#4a3520", textDecoration:"none", fontSize:"1.1rem", fontWeight:500 }}>{l}</a>
          ))}
          {/* Social icons mobile */}
          <div style={{ display:"flex", gap:"0.8rem", paddingTop:"0.5rem", borderTop:"1px solid rgba(107,142,90,0.2)" }}>
            <a href="https://t.me/morokotcafe" target="_blank" rel="noreferrer" style={{ width:36, height:36, backgroundColor:"#229ED9", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://facebook.com/morokotcafe" target="_blank" rel="noreferrer" style={{ width:36, height:36, backgroundColor:"#1877F2", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com/morokotcafe" target="_blank" rel="noreferrer" style={{ width:36, height:36, background:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
