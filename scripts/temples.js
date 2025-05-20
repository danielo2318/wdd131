document.querySelector(
  "#lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

// Menú Hamburguesa
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.textContent = navigation.classList.contains("show") ? "✕" : "☰";
});
