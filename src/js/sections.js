import '../css/general.css'
import { buttonAddProject, buttonAddTask } from './components';
// import displayTasks from './display';

const createPageContent = (pageTitle) => {
  const content = document.querySelector('.content');
  const title = document.createElement('h1');

  title.textContent = pageTitle;
  title.classList.add('page-title');

  content.textContent = '';
  const tasks = document.createElement('div');
  tasks.id = 'tasks';

  content.appendChild(title);
  content.appendChild(tasks);
  if (pageTitle !== 'Today' && pageTitle !== 'This Week') { 
    content.appendChild(buttonAddTask().create());
  }
  
  buttonAddTask().eventListener();
  buttonAddProject().eventListener();
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

const loadProjectPage = (nameProject) => {
  createPageContent(nameProject);
}

export { loadInboxPage, loadWeekPage, loadTodayPage, loadProjectPage };