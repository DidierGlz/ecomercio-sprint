import { useState } from "react";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Filters from "./components/Filters";
import AdminInventory from "./components/AdminInventory";
import Notifications from "./components/Notifications";

import Auth from "./components/Auth";
import Account from "./components/Account";
import Checkout from "./components/Checkout";

import { loadCart, addToCart, clearCart } from "./store/cart";
import { isLoggedIn } from "./store/auth";

export default function App(){
  const [view, setView] = useState("categories"); // "categories" | "cart" | "checkout" | "auth"
  const [category, setCategory] = useState(null);
  const [detail, setDetail] = useState(null);
  const [cart, setCart] = useState(loadCart());
  const [filters, setFilters] = useState({});

  const handleAdd = (prod)=>{
    const updated = addToCart(prod);
    setCart(updated);
    alert(`Añadido: ${prod.name}`);
  };

  const goCheckout = () => {
    if (!cart.length) return alert("Tu carrito está vacío.");
    setView("checkout");
  };

  return (
    <div style={{maxWidth:960, margin:"24px auto", padding:16}}>
      <h1>App e-commerce (Sprint 2)</h1>
      <Nav current={view} onChange={setView} />

      {view==="categories" && (
        <>
          <Categories
            current={category}
            onSelect={(c)=>{ setCategory(c); setFilters(f=>({ ...f, category:"" })); }}
          />
          <Filters value={filters} onChange={setFilters} />
          <ProductList category={category} filters={filters} onOpen={setDetail}/>
          <ProductDetail product={detail} onAdd={handleAdd} onClose={()=>setDetail(null)}/>
          <div style={{marginTop:12}}>
            <button onClick={goCheckout}>Ir a Checkout</button>
          </div>
        </>
      )}

      {view==="cart" && (
        <Cart items={cart} onClear={()=>{ clearCart(); setCart([]); }}/>
      )}

      {view==="checkout" && (
        <Checkout onDone={() => { setCart([]); setView("auth"); }} />
      )}

      {view==="auth" && (
        <div style={{display:"grid", gap:16}}>
          <Auth onAuth={() => setView(isLoggedIn() ? "categories" : "auth")} />
          <Account />
        </div>
      )}
      {view==="admin" && <AdminInventory />}
      {view==="notifs" && <Notifications />}
    </div>
  );
}
