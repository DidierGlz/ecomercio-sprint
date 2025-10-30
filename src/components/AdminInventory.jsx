import { useState } from "react";
import { getAllProducts, upsertProduct, removeProduct } from "../store/catalog";
import { CATEGORIES } from "../data/products";

const blank = { id:"", name:"", price:"", category:"", image:"" };

export default function AdminInventory() {
  const [items, setItems] = useState(getAllProducts());
  const [form, setForm] = useState(blank);
  const [editing, setEditing] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name) return alert("ID y nombre son obligatorios");
    const price = Number(form.price || 0);
    if (price <= 0) return alert("El precio debe ser mayor a 0");
    const prod = { ...form, price };
    upsertProduct(prod);
    setItems(getAllProducts());
    setForm(blank);
    setEditing(false);
  };

  const edit = (p) => {
    setForm({ ...p, price: String(p.price) });
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const del = (id) => {
    if (!confirm("¿Eliminar este producto?")) return;
    removeProduct(id);
    setItems(getAllProducts());
  };

  return (
    <div style={{display:"grid", gap:16}}>
      <h3>Inventario (Admin)</h3>

      <form onSubmit={submit} style={{display:"grid", gap:8, maxWidth:520}}>
        <label>ID
          <input name="id" value={form.id} onChange={onChange} required disabled={editing}/>
        </label>
        <label>Nombre
          <input name="name" value={form.name} onChange={onChange} required/>
        </label>
        <label>Precio
          <input name="price" type="number" inputMode="numeric" value={form.price} onChange={onChange} required/>
        </label>
        <label>Categoría
          <select name="category" value={form.category} onChange={onChange} required>
            <option value="">Seleccionar</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label>Imagen (ruta pública o import)
          <input name="image" value={form.image} onChange={onChange} placeholder="/img/productos/nuevo.jpg"/>
        </label>

        <div style={{display:"flex", gap:8}}>
          <button type="submit">{editing ? "Guardar cambios" : "Agregar"}</button>
          {editing && <button type="button" onClick={()=>{ setForm(blank); setEditing(false); }}>Cancelar</button>}
        </div>
      </form>

      <div>
        <h4>Productos</h4>
        {!items.length && <p>No hay productos.</p>}
        {items.length>0 && (
          <table style={{borderCollapse:"collapse", width:"100%"}}>
            <thead>
              <tr>
                <th style={{border:"1px solid #ccc", padding:6}}>ID</th>
                <th style={{border:"1px solid #ccc", padding:6}}>Nombre</th>
                <th style={{border:"1px solid #ccc", padding:6}}>Precio</th>
                <th style={{border:"1px solid #ccc", padding:6}}>Categoría</th>
                <th style={{border:"1px solid #ccc", padding:6}}>Imagen</th>
                <th style={{border:"1px solid #ccc", padding:6}}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.map(p=>(
                <tr key={p.id}>
                  <td style={{border:"1px solid #ccc", padding:6}}>{p.id}</td>
                  <td style={{border:"1px solid #ccc", padding:6}}>{p.name}</td>
                  <td style={{border:"1px solid #ccc", padding:6}}>${p.price.toFixed(2)}</td>
                  <td style={{border:"1px solid #ccc", padding:6}}>{p.category}</td>
                  <td style={{border:"1px solid #ccc", padding:6}}><small>{p.image}</small></td>
                  <td style={{border:"1px solid #ccc", padding:6, whiteSpace:"nowrap"}}>
                    <button onClick={()=>edit(p)}>Editar</button>{" "}
                    <button onClick={()=>del(p.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
