//utils
const $ = (selector) => document.querySelector(selector);
// Obtener elementos del DOM

const colorIcon = document.querySelectorAll(".color-icon");
// const colorPalette = $("#color-palette");
const colors = document.querySelectorAll(".color");
const noteContent = document.getElementById("note-content");
const array = [...colorIcon];

// Mostrar/ocultar paleta de colores al hacer clic en el icono
console.log(array);
array.map((el) => {
  el.addEventListener("click", (e) => {
    e.target.querySelector(".color-palette").style.display === "none"
      ? "flex"
      : "none";
    console.log(e.target);
    // colorPalette.style.display === "none" ? "block" : "none";
  });
});
// colorIcon.addEventListener("click", (e) => {
//   console.log(e.target);
//
// });

// Cambiar color de la nota al hacer clic en un color de la paleta
colors.forEach((color) => {
  color.addEventListener("click", () => {
    const selectedColor = color.getAttribute("data-color");
    noteContent.style.backgroundColor = selectedColor;
    colorPalette.style.display = "none";
  });
});
