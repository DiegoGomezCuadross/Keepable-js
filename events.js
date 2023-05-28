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
        (note) => note.title === containerNote.querySelector("p")?.textContent
      );
      if (!!currentNote) {
        currentNote.bg = selectedColor;
      }
      loadToStorage();
    });
  });
}

//Eventos de transicion para unapagina
const notesPage = $("#show-notes");
const trashPage = $("#trash-notes");

notesPage.addEventListener("click", () => {
  notesPage.classList.add("active-page");
  trashPage.classList.remove("active-page");

  if (notesPage.classList.contains("active-page")) {
    $("#notes-page").style.display = "block";
    $("#trash-page").style.display = "none";
  }
});

trashPage.addEventListener("click", () => {
  notesPage.classList.remove("active-page");
  trashPage.classList.add("active-page");

  if (trashPage.classList.contains("active-page")) {
    $("#notes-page").style.display = "none";
    $("#trash-page").style.display = "block";
  }
});
