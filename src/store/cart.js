const KEY = "ec_cart";

export function loadCart(){ try{ return JSON.parse(localStorage.getItem(KEY))||[] }catch{ return [] } }
export function saveCart(items){ localStorage.setItem(KEY, JSON.stringify(items)); }
export function addToCart(item){
  const cart = loadCart();
  const found = cart.find(x=>x.id===item.id);
  if(found){ found.qty += 1; } else { cart.push({...item, qty:1}); }
  saveCart(cart);
  return cart;
}
export function clearCart(){ saveCart([]); }
export function total(cart){ return cart.reduce((s,i)=>s+i.price*i.qty,0); }
