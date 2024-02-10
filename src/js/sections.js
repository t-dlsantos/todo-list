import '../css/general.css'
import { buttonAddTask } from './components';

const createPageContent = (pageTitle) => {
  const content = document.querySelector('.content');
  const title = document.createElement('h1');

  title.textContent = pageTitle;
  title.classList.add('pageTitle');

  content.textContent = '';
  content.appendChild(title);
  content.appendChild(buttonAddTask().create());

  buttonAddTask().eventListener();
};

const loadInboxPage = () => {
  createPageContent('Inbox');
};

const loadTodayPage = () => {
  createPageContent('Today');
};

const loadWeekPage = () => {
  createPageContent('This week');
};

export { loadInboxPage, loadWeekPage, loadTodayPage };