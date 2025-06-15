"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const bandas = [
    {
      nombre: "Caifanes",
      genero: "rock",
      año: 1987,
      imagen: "images/caifanes.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Zoé",
      genero: "rock",
      año: 1995,
      imagen: "images/zoe.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Los Ángeles Azules",
      genero: "cumbia",
      año: 1976,
      imagen: "images/angeles.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Celso Piña",
      genero: "cumbia",
      año: 1980,
      imagen: "images/celso.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Wos",
      genero: "rap",
      año: 2018,
      imagen: "images/wos.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Kendric Lamar",
      genero: "rap",
      año: 1999,
      imagen: "images/kendrick2.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Intocable",
      genero: "regional mexicano",
      año: 1994,
      imagen: "images/intocable.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Grupo Frontera",
      genero: "regional mexicano",
      año: 2019,
      imagen: "images/frontera.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Bad Bunny",
      genero: "reggaeton",
      año: 2016,
      imagen: "images/bunny.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Don Omar",
      genero: "reggaeton",
      año: 1999,
      imagen: "images/don.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },

    {
      nombre: "Harry Styles",
      genero: "pop",
      año: 2010,
      imagen: "images/harry.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Julieta Venegas",
      genero: "pop",
      año: 1997,
      imagen: "images/julieta.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Daft Punk",
      genero: "electronica",
      año: 1997,
      imagen: "images/daft.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Avicii",
      genero: "electronica",
      año: 2007,
      imagen: "images/avicii.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Siddhartha",
      genero: "alternativo",
      año: 2008,
      imagen: "images/yuya.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
    {
      nombre: "Soda Stereo",
      genero: "alternativo",
      año: 1982,
      imagen: "images/soda.webp",
      descripcion:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus. ",
    },
  ];

  function renderBandas(genero = "todos") {
    const container = document.getElementById("bandas-container");
    if (!container) return;

    container.innerHTML = "";

    const bandasFiltradas =
      genero === "todos"
        ? bandas
        : bandas.filter((banda) => banda.genero === genero);

    if (bandasFiltradas.length === 0) {
      container.innerHTML =
        '<p class="no-resultados">No se encontraron bandas con este filtro.</p>';
      return;
    }

    bandasFiltradas.forEach((banda) => {
      const card = document.createElement("div");
      card.className = "banda-card";
      card.innerHTML = `
                <img src="${banda.imagen}" alt="${banda.nombre}" loading="lazy">
                <h3>${banda.nombre}</h3>
                <p>${banda.descripcion}</p>
                <small>Año de formación: ${banda.año}</small>
            `;
      container.appendChild(card);
    });
  }

  // Eventos de filtrado
  document.querySelectorAll(".filtro-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remover clase activa de todos los botones
      document.querySelectorAll(".filtro-btn").forEach((b) => {
        b.classList.remove("active");
      });
      // Añadir clase activa al botón clickeado
      btn.classList.add("active");
      renderBandas(btn.dataset.genero);
    });
  });

  // Inicializar
  renderBandas();
});
