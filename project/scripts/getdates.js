const year = document.querySelector("#year");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

let lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified ${document.lastModified}`;
