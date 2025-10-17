import { useState } from "react";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { loadCart, addToCart, clearCart } from "./store/cart";

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

  return (
    <div style={{maxWidth:960, margin:"24px auto", padding:16}}>
      <h1>App e-commerce (Sprint 1)</h1>
      <Nav current={view} onChange={setView} />

      {view==="categories" && (
        <>
          <Categories current={category} onSelect={setCategory} />
          <ProductList category={category} onOpen={setDetail}/>
          <ProductDetail product={detail} onAdd={handleAdd} onClose={()=>setDetail(null)}/>
        </>
      )}

      {view==="cart" && (
        <Cart items={cart} onClear={()=>{ clearCart(); setCart([]); }}/>
      )}
    </div>
  );
}
