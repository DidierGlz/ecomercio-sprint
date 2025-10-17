import { PRODUCTS } from "../data/products";

export default function ProductList({ category, onOpen }) {
  const list = category ? PRODUCTS.filter(p=>p.category===category) : PRODUCTS;
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
      {!list.length && <p>No hay productos en esta categoría.</p>}
    </div>
  );
}
