import loadInboxPage from "./inbox";

const selectMode = document.querySelector('.select-mode');
const inbox = document.querySelector('#inbox')

const body = document.querySelector('body');

selectMode.addEventListener("click", () => {
  body.classList.toggle('light');
});

inbox.addEventListener("click", () => {
  loadInboxPage();
});

