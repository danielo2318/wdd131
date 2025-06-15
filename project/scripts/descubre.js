"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const recomendaciones = {
    rock: {
      "80s": {
        nombre: "Caifanes",
        descripcion:
          "Pioneros del rock alternativo en México con sonidos oscuros y líricas poéticas.",
        imagen: "images/caifanes.webp",
      },
      "2000s": {
        nombre: "Zoé",
        descripcion:
          "Banda de rock alternativo y psicodélico con influencias británicas.",
        imagen: "images/zoe.webp",
      },
    },
    cumbia: {
      "80s": {
        nombre: "Celso Piña",
        descripcion:
          "El 'Rebelde del acordeón', mezcló cumbia con ritmos urbanos.",
        imagen: "images/celso.webp",
      },
      "2000s": {
        nombre: "Los Ángeles Azules",
        descripcion:
          "Innovadores de la cumbia sonidera con colaboraciones modernas.",
        imagen: "images/angeles.webp",
      },
    },
    rap: {
      "80s": {
        nombre: "Kendric Lamar",
        descripcion:
          "Rapero innovador con letras sociales y un enfoque artístico único.",
        imagen: "images/kendrick2.webp",
      },
      "2000s": {
        nombre: "Wos",
        descripcion: "Freestyler argentino que revolucionó el rap en español.",
        imagen: "images/wos.webp",
      },
    },
    "regional mexicano": {
      "80s": {
        nombre: "Intocable",
        descripcion:
          "Grupo icónico del regional mexicano con letras románticas.",
        imagen: "images/intocable.webp",
      },
      "2000s": {
        nombre: "Grupo Frontera",
        descripcion:
          "Banda joven que revitalizó el sonido norteño con nuevas colaboraciones.",
        imagen: "images/frontera.webp",
      },
    },
    reggaeton: {
      "80s": {
        nombre: "Don Omar",
        descripcion:
          "Uno de los pioneros del reggaeton con letras pegajosas y estilo único.",
        imagen: "images/don.webp",
      },
      "2000s": {
        nombre: "Bad Bunny",
        descripcion:
          "Superestrella global que ha redefinido el reggaeton moderno.",
        imagen: "images/bunny.webp",
      },
    },
    pop: {
      "80s": {
        nombre: "Julieta Venegas",
        descripcion:
          "Cantautora mexicana con una mezcla dulce de pop y acordeón.",
        imagen: "images/julieta.webp",
      },
      "2000s": {
        nombre: "Harry Styles",
        descripcion:
          "Ex integrante de One Direction convertido en icono pop internacional.",
        imagen: "images/harry.webp",
      },
    },
    electronica: {
      "80s": {
        nombre: "Daft Punk",
        descripcion: "Dúo francés legendario en el mundo de la electrónica.",
        imagen: "images/daft.webp",
      },
      "2000s": {
        nombre: "Avicii",
        descripcion:
          "Productor sueco que mezcló electrónica con melodías emocionales.",
        imagen: "images/avicii.webp",
      },
    },
    alternativo: {
      "80s": {
        nombre: "Soda Stereo",
        descripcion:
          "Banda argentina que marcó el inicio del rock alternativo en Latinoamérica.",
        imagen: "images/soda.webp",
      },
      "2000s": {
        nombre: "Siddhartha",
        descripcion:
          "Cantautor mexicano con estilo introspectivo y alternativo.",
        imagen: "images/yuya.webp",
      },
    },
  };

  const form = document.getElementById("recomendador-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const genero = document.getElementById("genero").value;
      const epoca = document.getElementById("epoca").value;

      if (!genero || !epoca) {
        alert("Por favor selecciona tanto género como época");
        return;
      }

      const recomendacion = recomendaciones[genero]?.[epoca];
      if (!recomendacion) {
        document.getElementById("resultado").innerHTML = `
                    <p class="error">No se encontró recomendación para estos filtros.</p>
                `;
        return;
      }

      const resultadoHTML = `
                <div class="recomendacion">
                    <img src="${recomendacion.imagen}" alt="${recomendacion.nombre}" loading="lazy">
                    <h2>${recomendacion.nombre}</h2>
                    <p>${recomendacion.descripcion}</p>
                </div>
            `;

      document.getElementById("resultado").innerHTML = resultadoHTML;
      localStorage.setItem(
        "ultimaRecomendacion",
        JSON.stringify(recomendacion)
      );
    });
  }

  // Cargar última recomendación al cargar la página
  const ultimaRecomendacion = localStorage.getItem("ultimaRecomendacion");
  if (ultimaRecomendacion) {
    try {
      const recomendacion = JSON.parse(ultimaRecomendacion);
      document.getElementById("resultado").innerHTML = `
                <h3>Última recomendación:</h3>
                <div class="recomendacion">
                    <img src="${recomendacion.imagen}" alt="${recomendacion.nombre}">
                    <h4>${recomendacion.nombre}</h4>
                    <p>${recomendacion.descripcion}</p>
                </div>
            `;
    } catch (e) {
      console.error("Error al parsear última recomendación:", e);
    }
  }
});
