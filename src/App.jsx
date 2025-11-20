import { useState } from "react";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Filters from "./components/Filters";

import Auth from "./components/Auth";
import Account from "./components/Account";
import Checkout from "./components/Checkout";
import AdminInventory from "./components/AdminInventory";
import Notifications from "./components/Notifications";
import NotificationBar from "./components/NotificationBar";

import { loadCart, addToCart, clearCart } from "./store/cart";
import { isLoggedIn } from "./store/auth";

export default function App() {
  const [view, setView] = useState("categories"); // "categories" | "cart" | "checkout" | "auth" | "admin" | "notifs"
  const [category, setCategory] = useState(null);
  const [detail, setDetail] = useState(null);
  const [cart, setCart] = useState(loadCart());
  const [filters, setFilters] = useState({});

  //  estado global de notificacion
  const [notification, setNotification] = useState({ message: "", type: "info" });

  const showNotification = (message, type = "info") => {
    setNotification({ message, type });
    // auto-ocultar despues de unos segundos
    setTimeout(() => {
      setNotification({ message: "", type: "info" });
    }, 4000);
  };

  const handleAdd = (prod) => {
    const updated = addToCart(prod);
    setCart(updated);
    showNotification(`Añadido al carrito: ${prod.name}`, "success");
  };

  const goCheckout = () => {
    if (!cart.length) {
      showNotification("Tu carrito está vacío.", "error");
      return;
    }
    setView("checkout");
  };

  return (
    <div style={{ maxWidth: 960, margin: "24px auto", padding: 16 }}>
      {/*  barra de notificaciones global */}
      <NotificationBar
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "info" })}
      />

      <h1>App e-commerce (Sprint 3)</h1>
      <Nav current={view} onChange={setView} />

      {view === "categories" && (
        <>
          <Categories
            current={category}
            onSelect={(c) => {
              setCategory(c);
              setFilters((f) => ({ ...f, category: "" }));
            }}
          />
          <Filters value={filters} onChange={setFilters} />
          <ProductList category={category} filters={filters} onOpen={setDetail} />
          <ProductDetail
            product={detail}
            onAdd={handleAdd}
            onClose={() => setDetail(null)}
          />
          <div style={{ marginTop: 12 }}>
            <button onClick={goCheckout}>Ir a Checkout</button>
          </div>
        </>
      )}

      {view === "cart" && (
        <Cart
          items={cart}
          onClear={() => {
            clearCart();
            setCart([]);
            showNotification("Carrito vaciado.", "info");
          }}
        />
      )}

      {view === "checkout" && (
        <Checkout
          onDone={() => {
            setCart([]);
            setView("auth");
          }}
          onNotify={showNotification} 
        />
      )}

      {view === "auth" && (
        <div style={{ display: "grid", gap: 16 }}>
          <Auth onAuth={() => setView(isLoggedIn() ? "categories" : "auth")} />
          <Account />
        </div>
      )}

      {view === "admin" && <AdminInventory />}

      {view === "notifs" && <Notifications />}
    </div>
  );
}
