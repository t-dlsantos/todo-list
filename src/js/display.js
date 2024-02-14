import TaskItem  from "./components/TaskItem";
import { loadProjectPage } from "./sections";

const display = (() => {
  const displayNewProject = (project) => {
    const sidebarProjects = document.querySelector('.projects');
    
    const button = document.createElement('button');
    button.classList.add('menu-item');
    button.textContent = project.title;

    button.addEventListener('click', () => {
      loadProjectPage(project.title);
    });

    sidebarProjects.appendChild(button);
  }

  const displayNewTask = (newTask) => {
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.appendChild(TaskItem(newTask));
  }

  const displayAllTasks = (tasks) => {  
    tasks.forEach(element => {
      displayNewTask(element);  
    });
  };
  
  const displayAllProjects = (projects) => { 
    projects.forEach(element => {
      displayNewProject(element);  
    });
  };

  return { displayNewProject, displayNewTask, displayAllTasks, displayAllProjects };
})();

export default display;