export function updateLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  return data;
}
