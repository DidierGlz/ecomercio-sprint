import { CATEGORIES } from "../data/products";

export default function Categories({ current, onSelect }) {
  return (
    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
      {CATEGORIES.map(cat=>(
        <button
          key={cat}
          onClick={()=>onSelect(cat)}
          style={{
            padding:"8px 12px",
            border:"1px solid #ddd",
            background: current===cat ? "#e6f4ff" : "#fff",
            cursor:"pointer"
          }}
        >
          {cat}
        </button>
      ))}
      <button
        onClick={()=>onSelect(null)}
        style={{
          padding:"8px 12px",
          border:"1px solid #ddd",
          background: current===null ? "#e6f4ff" : "#fff",
          cursor:"pointer"
        }}
      >
        Todas
      </button>
    </div>
  );
}
