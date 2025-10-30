import { useState, useEffect } from "react";
import { isOptIn, setOptIn } from "../store/notifications";

export default function Notifications() {
  const [enabled, setEnabled] = useState(isOptIn());
  const [message, setMessage] = useState("");

  useEffect(()=>{ setOptIn(enabled); }, [enabled]);

  const sendSample = () => {
    if (!enabled) return alert("Activa las notificaciones para ver el ejemplo.");
    setMessage("🔔 Promo: 10% de descuento en Electrónica este fin de semana.");
    setTimeout(()=> setMessage(""), 4000);
  };

  return (
    <div style={{display:"grid", gap:12, maxWidth:560}}>
      <h3>Notificaciones</h3>
      <label style={{display:"flex", gap:8, alignItems:"center"}}>
        <input type="checkbox" checked={enabled} onChange={e=>setEnabled(e.target.checked)} />
        Activar notificaciones (opt-in)
      </label>
      <button onClick={sendSample}>Probar notificación</button>
      {message && (
        <div style={{background:"#e8f5e9", border:"1px solid #a5d6a7", padding:10}}>
          {message}
        </div>
      )}
      <small style={{color:"#666"}}>Nota: Simulación dentro de la app; no usa push del navegador.</small>
    </div>
  );
}
