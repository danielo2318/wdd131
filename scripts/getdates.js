document.getElementById("currentyear").textContent = new Date().getFullYear();

// Obtiene la fecha de última modificación y la inserta en el párrafo con id "lastModified"
document.getElementById(
  "lastModified"
).textContent = `Última modificación: ${document.lastModified}`;
