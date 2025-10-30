const KEY = "ec_notifications_optin";

export function isOptIn() {
  return localStorage.getItem(KEY) === "1";
}
export function setOptIn(val) {
  localStorage.setItem(KEY, val ? "1" : "0");
}
