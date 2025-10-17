import { total } from "../store/cart";

export default function Cart({ items, onClear }) {
  return (
    <div>
      <h3>Carrito</h3>
      {!items.length && <p>Tu carrito está vacío.</p>}
      {items.length>0 && (
        <>
          <ul style={{paddingLeft:16}}>
            {items.map(it=>(
              <li key={it.id}>{it.name} x{it.qty} — ${ (it.price*it.qty).toFixed(2) }</li>
            ))}
          </ul>
          <p><b>Total:</b> ${ total(items).toFixed(2) }</p>
          <button onClick={onClear}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}
