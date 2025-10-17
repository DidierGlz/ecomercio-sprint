import { useState } from "react";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

import Auth from "./components/Auth";         // NUEVO
import Account from "./components/Account";   // NUEVO
import Checkout from "./components/Checkout"; // NUEVO

import { loadCart, addToCart, clearCart } from "./store/cart";
import { isLoggedIn } from "./store/auth";

export default function App(){
  const [view, setView] = useState("categories");
  const [category, setCategory] = useState(null);
  const [detail, setDetail] = useState(null);
  const [cart, setCart] = useState(loadCart());

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
          <Categories current={category} onSelect={setCategory} />
          <ProductList category={category} onOpen={setDetail}/>
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
        <>
          <Auth onAuth={() => setView(isLoggedIn() ? "categories" : "auth")} />
          <div style={{marginTop:16}}>
            <Account />
          </div>
        </>
      )}
    </div>
  );
}
