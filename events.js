const addForm = document.querySelector("#note-content");

listActive.addEventListener("click", eventPallete);
addForm.addEventListener("click", eventPallete);

noteTitle.addEventListener("keyup", () => {
  if (noteTitle.value.trim() === "") {
    addNote.disabled = true;
  } else {
    addNote.disabled = false;
  }
});

function eventPallete({ target }) {
  if (target.classList.contains("color-icon")) {
    console.log(target);
    const colorPalette = target.parentNode.querySelector(".paleta");
    colorPalette.classList.toggle("active");
    changeContentColor(colorPalette);
  }
}

function changeContentColor(colorPalette) {
  const colors = colorPalette.querySelectorAll(".color");

  colors.forEach((color) => {
    color.addEventListener("click", () => {
      const selectedColor = window.getComputedStyle(color).backgroundColor;
      const containerNote = color.parentNode.parentNode.parentNode;
      containerNote.style.backgroundColor = selectedColor;
      colorPalette.classList.remove("active");

      const currentNote = activeNotes.find(
        (note) => note.title === containerNote.querySelector("p").textContent
      );

      currentNote.bg = selectedColor;
      loadToStorage();
    });
  });
}
