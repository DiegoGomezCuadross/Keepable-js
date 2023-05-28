// //utils
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const addNote = $("#add-note");
const noteTitle = $("#note-title");
const noteDescription = $("#note-description");
const nodeTrash = $$(".delete-note");
const listActive = $("#list-notes");
const listTrash = $("#list-trash-notes");
let activeNotes = [];
let deletedNotes = [];

loadListeners();

function loadListeners() {
  addNote.addEventListener("click", addNewNote);

  listActive.addEventListener("click", trashCurrentNote);

  listTrash.addEventListener("click", restoreCurrentNote);

  listTrash.addEventListener("click", deleteCurrentNote);

  document.addEventListener("DOMContentLoaded", () => {
    activeNotes = JSON.parse(localStorage.getItem("notes")) || [];
    deletedNotes = JSON.parse(localStorage.getItem("trash")) || [];
    printToActiveHtml();
    printToTrashHtml();
  });
}

function loadToStorage() {
  localStorage.setItem("notes", JSON.stringify(activeNotes));
}

function loadToTrashStorage() {
  localStorage.setItem("trash", JSON.stringify(deletedNotes));
}

function addNewNote({ target }) {
  const color = window.getComputedStyle(
    target.parentElement.parentElement
  ).backgroundColor;
  const title = noteTitle.value;
  const description = noteDescription.value;
  buildNewNote(title, description, color);
}

function buildNewNote(title, description, color) {
  const note = {
    title,
    description,
    bg: color,
  };

  const existNote = activeNotes.some((value) => value.title === note.title);

  if (existNote) {
    alert("Ya existe una nota con ese título");
    noteTitle.value = "";
    addNote.disabled = true;
  } else {
    activeNotes = [...activeNotes, note];
    printToActiveHtml();
    loadToStorage();
    noteTitle.value = "";
    addNote.disabled = true;
  }
  noteDescription.value = "";
}

function printToActiveHtml() {
  listActive.innerHTML = "";
  if (activeNotes.length === 0) {
    listActive.innerHTML = '<p class="message-note">No notes to keep</p>';
  } else {
    activeNotes.map((note) => {
      const divElement = document.createElement("div");
      divElement.classList.add("container-note");
      divElement.style.backgroundColor = note.bg;

      divElement.innerHTML = `
        <li>
          <div>
              <p>${note.title}</p>
              <p>${note.description}</p>
          </div>
        </li>
        <div class="container-icon-note">
            <div class="paleta">
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
              <span class="color"></span>
            </div>
            <img class="color-icon" src="images/palette.svg">
            <img class="delete-note" src="images/trash-can.svg">
        </div>
        <img class="pinned-note" src="images/pinned.svg">
      `;

      listActive.appendChild(divElement);
    });
  }
}

function printToTrashHtml() {
  listTrash.innerHTML = "";
  deletedNotes.map((note) => {
    const divElement = document.createElement("div");
    divElement.classList.add("container-note");
    divElement.style.backgroundColor = note.bg;

    divElement.innerHTML = `
      <li>
        <div>
            <p>${note.title}</p>
            <p>${note.description}</p>
        </div>
      </li>
      <div class="container-icon-note">
          <img class="delete-note" src="images/trash-can.svg">
          <img class="restore-note" src="images/restore.svg">
      </div>
    `;

    listTrash.appendChild(divElement);
  });
}

function trashCurrentNote({ target }) {
  if (target.classList.contains("delete-note")) {
    const title =
      target.parentElement.parentElement.querySelector("p").textContent;
    const deletedNote = activeNotes.find((value) => value.title === title); //traemos objeto
    const index = activeNotes.findIndex((value) => value.title === title); //traemos indice
    activeNotes.splice(index, 1);
    deletedNotes = [...deletedNotes, deletedNote];

    printToActiveHtml();
    printToTrashHtml();
    loadToStorage();
    loadToTrashStorage();
  }
}

function restoreCurrentNote({ target }) {
  if (target.classList.contains("restore-note")) {
    const title =
      target.parentElement.parentElement.querySelector("p").textContent;
    const retoredNote = deletedNotes.find((value) => value.title === title); //traemos objeto
    const index = deletedNotes.findIndex((value) => value.title === title); //traemos indice
    deletedNotes.splice(index, 1);
    activeNotes = [...activeNotes, retoredNote];

    printToActiveHtml();
    printToTrashHtml();
    loadToStorage();
    loadToTrashStorage();
  }
}

function deleteCurrentNote({ target }) {
  if (target.classList.contains("delete-note")) {
    const title =
      target.parentElement.parentElement.querySelector("p").textContent;
    const index = deletedNotes.findIndex((value) => value.title === title); //traemos indice
    deletedNotes.splice(index, 1);

    printToTrashHtml();
    loadToTrashStorage();
  }
}
