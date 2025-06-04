export const saveStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data)); // Guarda los datos como una cadena JSON
};