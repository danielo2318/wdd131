const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

let lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified ${document.lastModified}`;

//2° manera utilizando getElementById
/* document.getElementById("currentyear").textContent = new Date().getFullYear();

// Obtiene la fecha de última modificación y la inserta en el párrafo con id "lastModified"
document.getElementById(
  "lastModified"
).textContent = `Last modified: ${document.lastModified}`; */

//3° manera usando toLocaleString()
/* let lastModified = document.querySelector("#lastModified");
let lastmodification = Date.parse(document.lastModified);

// Convertimos el número a una fecha legible
let formattedDate = new Date(lastmodification).toLocaleString();

lastModified.textContent = `Last modified: ${formattedDate}`; */
