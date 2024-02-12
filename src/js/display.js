import { taskItem } from "./components";
import { loadProjectPage } from "./sections";

const display =(() => {
  const addNewProject = (nameProject) => {
    const sidebarProjects = document.querySelector('.projects');
    
    const button = document.createElement('button');
    button.classList.add('menu-item');
    button.textContent = nameProject;
    button.addEventListener('click', () => {
      loadProjectPage(nameProject);
    });

    sidebarProjects.appendChild(button);
  }

  const addNewTask = (newTask) => {
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.appendChild(taskItem(newTask));
  }
  
  return { addNewProject, addNewTask };
})();

export default display;