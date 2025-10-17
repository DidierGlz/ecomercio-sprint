export default function ProductDetail({ product, onAdd, onClose }) {
  if(!product) return null;
  return (
    <div style={{border:"1px solid #bbb", padding:16, marginTop:16, background:"#fafafa"}}>
      <h3>Detalle: {product.name}</h3>
      <img src={product.image} alt={product.name} style={{width:240, height:240, objectFit:"cover"}}/>
      <p style={{marginTop:8}}><b>Precio:</b> ${product.price.toFixed(2)}</p>
      <p><b>Categoría:</b> {product.category}</p>
      <div style={{display:"flex",gap:8,marginTop:8}}>
        <button onClick={()=>onAdd(product)}>Agregar al carrito</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
