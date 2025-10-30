// Reemplaza la importación anterior de PRODUCTS:
import { getAllProducts } from "../store/catalog";

export default function ProductList({ category, filters, onOpen }) {
  let list = getAllProducts(); // <-- ahora del catálogo combinado

  if (category) list = list.filter(p => p.category === category);

  const min = Number(filters?.min || 0);
  const max = Number(filters?.max || 0);
  if (min) list = list.filter(p => p.price >= min);
  if (max) list = list.filter(p => p.price <= max);
  if (filters?.category) list = list.filter(p => p.category === filters.category);

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",gap:12,marginTop:12}}>
      {list.map(p=>(
        <div key={p.id} style={{border:"1px solid #ddd",padding:12}}>
          <img src={p.image} alt={p.name} style={{width:"100%",height:120,objectFit:"cover"}}/>
          <h4 style={{margin:"8px 0"}}>{p.name}</h4>
          <div>${p.price.toFixed(2)}</div>
          <button onClick={()=>onOpen(p)} style={{marginTop:8}}>Ver detalle</button>
        </div>
      ))}
      {!list.length && (
        <p style={{gridColumn:"1 / -1", textAlign:"center", color:"#666"}}>
          No hay productos que coincidan con los filtros.
        </p>
      )}
    </div>
  );
}
