import { CATEGORIES } from "../data/products";
import { useState, useEffect } from "react";

export default function Filters({ value, onChange }) {
  const [min, setMin] = useState(value?.min ?? "");
  const [max, setMax] = useState(value?.max ?? "");
  const [cat, setCat] = useState(value?.category ?? "");

  useEffect(() => {
    onChange?.({ min, max, category: cat });
  }, [min, max, cat]);

  return (
    <div style={{display:"flex", gap:8, flexWrap:"wrap", marginTop:12, alignItems:"center"}}>
      <select value={cat} onChange={e=>setCat(e.target.value)}>
        <option value="">Todas (filtro)</option>
        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <label>Min $
        <input type="number" inputMode="numeric" style={{width:100}}
               value={min} onChange={e=>setMin(e.target.value)} />
      </label>

      <label>Max $
        <input type="number" inputMode="numeric" style={{width:100}}
               value={max} onChange={e=>setMax(e.target.value)} />
      </label>

      <small style={{color:"#666"}}>Filtros aplican en tiempo real</small>
    </div>
  );
}
