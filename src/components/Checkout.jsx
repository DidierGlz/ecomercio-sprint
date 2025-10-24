import { useState } from "react";
import { isLoggedIn, addOrder, getUser } from "../store/auth";
import { loadCart, total, clearCart } from "../store/cart";

export default function Checkout({ onDone }) {
  const [cart] = useState(loadCart());
  const [form, setForm] = useState({ name: "", card: "", exp: "", cvv: "" });

  if (!isLoggedIn()) {
    return <p>Necesitas iniciar sesión para pagar.</p>;
  }
  if (!cart.length) {
    return <p>Tu carrito está vacío.</p>;
  }

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const pay = (e) => {
    e.preventDefault();
    if (!form.name || form.card.length < 12 || form.cvv.length < 3) {
      return alert("Revisa los datos de pago.");
    }
    const order = {
      id: crypto.randomUUID(),
      user: getUser()?.email,
      items: cart,
      total: total(cart),
      createdAt: new Date().toISOString(),
      status: "PAID"
    };
    addOrder(order);
    clearCart();
    alert("Pago procesado (simulado). ¡Gracias por tu compra!");
    onDone?.();
  };

  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 460 }}>
      <h3>Checkout</h3>
      <div><b>Total:</b> ${total(cart).toFixed(2)}</div>
      <form onSubmit={pay} style={{ display: "grid", gap: 8 }}>
        <label>Nombre en la tarjeta
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>Número de tarjeta
          <input name="card" value={form.card} onChange={onChange} inputMode="numeric" required />
        </label>
        <label>Expiración (MM/AA)
          <input name="exp" value={form.exp} onChange={onChange} placeholder="12/28" required />
        </label>
        <label>CVV
          <input name="cvv" value={form.cvv} onChange={onChange} inputMode="numeric" required />
        </label>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}
