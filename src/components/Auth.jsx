import { useState } from "react";
import { isLoggedIn, register, login, logout, getUser } from "../store/auth";

export default function Auth({ onAuth }) {
  const [tab, setTab] = useState("login"); // "login" | "register"
  const [form, setForm] = useState({ email: "", password: "" });
  const logged = isLoggedIn();
  const user = getUser();

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (fn) => (e) => {
    e.preventDefault();
    try {
      const u = fn({ email: form.email, password: form.password });
      onAuth?.(u);
      alert(tab === "login" ? "Sesión iniciada" : "Registro exitoso");
    } catch (err) {
      alert(err.message);
    }
  };

  if (logged) {
    return (
      <div style={{ display: "grid", gap: 8, maxWidth: 420 }}>
        <p><b>Sesión iniciada:</b> {user?.email}</p>
        <button onClick={() => { logout(); onAuth?.(null); }}>
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button onClick={() => setTab("login")} style={{ padding: "6px 10px", background: tab==="login"?"#eee":"#fff" }}>Login</button>
        <button onClick={() => setTab("register")} style={{ padding: "6px 10px", background: tab==="register"?"#eee":"#fff" }}>Registro</button>
      </div>

      {tab === "login" && (
        <form onSubmit={submit(login)} style={{ display: "grid", gap: 10 }}>
          <label>Email <input name="email" type="email" required value={form.email} onChange={onChange}/></label>
          <label>Contraseña <input name="password" type="password" minLength={6} required value={form.password} onChange={onChange}/></label>
          <button type="submit">Entrar</button>
        </form>
      )}

      {tab === "register" && (
        <form onSubmit={submit(register)} style={{ display: "grid", gap: 10 }}>
          <label>Email <input name="email" type="email" required value={form.email} onChange={onChange}/></label>
          <label>Contraseña <input name="password" type="password" minLength={6} required value={form.password} onChange={onChange}/></label>
          <button type="submit">Crear cuenta</button>
        </form>
      )}
    </div>
  );
}
