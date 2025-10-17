export default function Nav({ current, onChange }) {
  const tabs = [
    { key:"categories", label:"Categorías" },
    { key:"cart", label:"Carrito" },
    { key:"checkout", label:"Checkout" },  // NUEVO
    { key:"auth", label:"Cuenta" },        // NUEVO (login/registro/mi cuenta)
  ];
  return (
    <nav style={{display:"flex",gap:8,margin:"12px 0",flexWrap:"wrap"}}>
      {tabs.map(t=>(
        <button key={t.key}
          onClick={()=>onChange(t.key)}
          style={{padding:"8px 12px",border:"1px solid #ddd",background:current===t.key?"#eee":"#fff"}}>
          {t.label}
        </button>
      ))}
    </nav>
  );
}
