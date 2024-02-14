import { projectManager } from "../projects";
import display from "../display";

const createModalProjectComponent = () => {
  const showModal = () => {
    const addProjectButton = document.querySelector('.add-project');
    const sidebarProjects = document.querySelector('.projects');
    const formHTML = document.createElement('form');

    addProjectButton.style.display = 'none';
  
    formHTML.classList.add('project-form');
    formHTML.innerHTML = `
      <input type="text" placeholder="Title *" class="form-title" required>
      <button type="submit" class="submit-button">Add Project</button>
      <button type="button" class="cancel-button">Cancel</button>
    `;

    sidebarProjects.appendChild(formHTML);

    const form = document.querySelector('.project-form');
    const cancelButton = formHTML.querySelector('.cancel-button');

    const closeModal = () => {
      form.remove();
      addProjectButton.style.display = 'flex';
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const title = formHTML.querySelector('.form-title');
      
      const newProject = {
        title: title.value,
      }

      projectManager.createProject(newProject.title);
      display.displayNewProject(newProject);

      formHTML.remove();
      addProjectButton.style.display = 'flex';
    };

    form.addEventListener("submit", handleSubmit);
    cancelButton.addEventListener("click", closeModal);
  };

  return { showModal };
}

const ModalProject = createModalProjectComponent();

export default ModalProject;