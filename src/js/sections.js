import '../css/general.css';
import { taskManager } from './task';
import { projectManager } from './projects';
import ButtonAddProject from './components/ButtonAddProject';
import ButtonAddTask from './components/ButtonAddTask';
import display from './display';

const createPageContent = (pageTitle) => {
  const content = document.querySelector('.content');
  let tasks;
  
  content.textContent = '';
  content.innerHTML = `
    <h1 class="page-title">${pageTitle}</h1>
    <div id="tasks"></div>
  `;

   switch(pageTitle) {
    case 'Inbox': {
      tasks = taskManager.getInboxTasks();
      break;
    }
    
    case 'Today': {
      tasks = taskManager.getTodayTasks();
      break;
    }

    case 'This week': {
      tasks = taskManager.getThisWeekTasks();
      break;
    }

    default: {
      tasks = taskManager.getProjectTasks(pageTitle);
      break;
    }
   }

  if (tasks ) {
    display.displayAllTasks(tasks);
  }

  if (pageTitle !== 'Today' && pageTitle !== 'This week') {
    content.appendChild(ButtonAddTask.create());
    ButtonAddTask.eventListener(pageTitle);
  }
  
  ButtonAddProject.eventListener();
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