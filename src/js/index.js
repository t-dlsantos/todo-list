import display from "./display";
import { projectManager } from "./projects";
import { loadInboxPage, loadTodayPage, loadWeekPage } from "./sections";

const selectMode = document.querySelector('.select-mode');

const inbox = document.querySelector('#inbox')
const today = document.querySelector('#today');
const week = document.querySelector('#thisweek');

const body = document.querySelector('body');

let selectedElement = null;

document.addEventListener("DOMContentLoaded", () => {
  handleMenuItem(inbox);
  loadInboxPage();
  display.displayAllProjects(projectManager.getProjects());
});

selectMode.addEventListener("click", () => {
  body.classList.toggle('light');
});

inbox.addEventListener("click", () => {
  handleMenuItem(inbox);
  loadInboxPage();
});

today.addEventListener("click", () => {
  handleMenuItem(today);
  loadTodayPage();
});

week.addEventListener("click", () => {
  handleMenuItem(week);
  loadWeekPage();
});

function handleMenuItem(element) {
  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }
  
  element.classList.add('selected');

  selectedElement = element;
}