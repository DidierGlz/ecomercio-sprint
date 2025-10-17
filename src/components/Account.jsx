import { getUser, listOrders } from "../store/auth";

export default function Account() {
  const user = getUser();
  const orders = listOrders().filter(o => o.user === user?.email);

  if (!user) return <p>No has iniciado sesión.</p>;

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <h3>Mi cuenta</h3>
      <p><b>Email:</b> {user.email}</p>

      <h4>Mis pedidos</h4>
      {!orders.length && <p>Aún no tienes pedidos.</p>}
      {orders.length > 0 && (
        <ul>
          {orders.map(o => (
            <li key={o.id}>
              #{o.id.slice(0,8)} — {new Date(o.createdAt).toLocaleString()} — ${o.total.toFixed(2)} — {o.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
