export function updateLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function loadFromLocalStorage(key) {
    try {
      const localData = localStorage.getItem(key);
      return JSON.parse(localData);
    } catch (error) {
      console.error(error);
    }
  }
  