"use strict";

// Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navigation = document.getElementById("navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("show");
      menuButton.textContent = navigation.classList.contains("show")
        ? "✕"
        : "☰";
    });
  }
});
