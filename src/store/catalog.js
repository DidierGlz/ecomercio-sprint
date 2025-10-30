import { PRODUCTS as BASE } from "../data/products";
const KEY = "ec_catalog";

export function loadCatalog() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}

export function saveCatalog(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
}

export function getAllProducts() {
  const custom = loadCatalog();
  // unir base + custom (si hay duplicado por id en custom, este pisa al base)
  const map = new Map(BASE.map(p => [p.id, p]));
  custom.forEach(p => map.set(p.id, p));
  return Array.from(map.values());
}

export function upsertProduct(prod) {
  const list = loadCatalog();
  const idx = list.findIndex(p => p.id === prod.id);
  if (idx >= 0) list[idx] = prod; else list.push(prod);
  saveCatalog(list);
}

export function removeProduct(id) {
  const list = loadCatalog().filter(p => p.id !== id);
  saveCatalog(list);
}
