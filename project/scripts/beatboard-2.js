// Menú hamburguesa
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuButton.textContent = navigation.classList.contains("show") ? "✕" : "☰";
});

// Smooth scroll para enlaces del menú
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Cerrar menú en mobile
      if (window.innerWidth <= 768) {
        navigation.classList.remove("show");
        menuButton.textContent = "☰";
      }
    }
  });
});

// Lógica adicional para la app (ej: rejilla de beats)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Beatboard cargado!");
  // Aquí irá la lógica de la rejilla interactiva.
});
