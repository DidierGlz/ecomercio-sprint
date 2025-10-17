const KEY_USER = "ec_user";
const KEY_ORDERS = "ec_orders";

export function getUser() {
  try { return JSON.parse(localStorage.getItem(KEY_USER)); }
  catch { return null; }
}

export function isLoggedIn() {
  return !!getUser();
}

export function register({ email, password }) {
  if (!email || !password || password.length < 6) {
    throw new Error("Datos inválidos. Contraseña mínimo 6 caracteres.");
  }
  const user = { email };
  localStorage.setItem(KEY_USER, JSON.stringify(user));
  return user;
}

export function login({ email, password }) {
  // Simulación: aceptamos cualquier combinación válida.
  if (!email || !password || password.length < 6) {
    throw new Error("Credenciales inválidas.");
  }
  const user = { email };
  localStorage.setItem(KEY_USER, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(KEY_USER);
}

export function listOrders() {
  try { return JSON.parse(localStorage.getItem(KEY_ORDERS)) || []; }
  catch { return []; }
}

export function addOrder(order) {
  const orders = listOrders();
  orders.push(order);
  localStorage.setItem(KEY_ORDERS, JSON.stringify(orders));
}
