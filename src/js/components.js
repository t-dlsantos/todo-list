import '../css/general.css';
import display from './display.js';
import { addTaskToInbox, getInboxTasks } from './inbox';
import { projectManager } from './projects';

const modalTask = {
  showModal: () => {
    const addButton = document.querySelector('.addButton');
    const content = document.querySelector('.content');

    const form = document.createElement('form');
    form.classList.add('form');

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title *');
    title.required = true;
    title.classList.add('form-title');

    const description = document.createElement('textarea');
    description.setAttribute('placeholder', 'Description');

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('placeholder', 'Due Date');
    dueDate.classList.add('due-date');

    const priority = document.createElement('select');
    priority.innerHTML = `
      <option value="" disabled selected>Priority</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    `;
    priority.setAttribute('placeholder', 'Priority');
    priority.classList.add('priority');
    priority.required = true;

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Add Task';
    submitButton.classList.add('submit-button');

    const close = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    path.setAttribute("d", "M8.5 0A8.5 8.5 0 1 0 8.5 17A8.5 8.5 0 1 0 8.5 0ZM6.34125 5.99875V16.005H10.5688V5.99875H6.34125Z");
    
    close.setAttribute("width", "17");
    close.setAttribute("height", "17");
    close.appendChild(path);
    close.classList.add('close');
    
    form.appendChild(close);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(submitButton);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      closure();
      
      const newTask = {
        name: title.value,
        description: description.value,
        dueDate: dueDate.value,
        priority: priority.value
      }
      console.log(newTask)
      addTaskToInbox(newTask);
      display.addNewTask(newTask);
    });

    close.addEventListener('click', () => {
      closure();
    });

    const closure = () => {
      form.remove();
      addButton.style.display = 'flex';
    }

    addButton.style.display = 'none';

    content.appendChild(form);
  }
};

const buttonAddTask = () => {
  const create = () => {
    const button = document.createElement('button');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const buttonText = document.createElement('span');
    
    path.setAttribute("d", "M6.34125 -0.00499725V5.99875H0V10.0013H6.34125V16.005H10.5688V10.0013H16.91V5.99875H10.5688V-0.00499725H6.34125Z");
    
    svg.setAttribute("width", "17");
    svg.setAttribute("height", "17");
    svg.appendChild(path);
    svg.classList.add('icon');
  
    buttonText.textContent = 'Add Task';
    
    button.appendChild(svg);
    button.appendChild(buttonText);
    button.classList.add('addButton');
  
    return button;
  }

  const eventListener = () => {
    const addButton = document.querySelector(".addButton");

    addButton.addEventListener("click", () => {
      modalTask.showModal();
    });
  }

  return { create, eventListener };
}

const modalProject = {
  showModal() {
    const addProjectButton = document.querySelector('.add-project');
    const sidebarProjects = document.querySelector('.projects');
    const container = document.createElement('div');

    addProjectButton.style.display = 'none';

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title *');
    title.required = true;
    title.classList.add('form-title');

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Add Project';
    submitButton.classList.add('submit-button');
    submitButton.addEventListener("click", () => {
      projectManager.createProject(title.value);
      container.remove();
      addProjectButton.style.display = 'flex';
      display.addNewProject(title.value);
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-button');
    cancelButton.addEventListener("click", () => {
      container.remove();
      addProjectButton.style.display = 'flex';
    });

    container.appendChild(title);
    container.appendChild(submitButton);
    container.appendChild(cancelButton);
    container.classList.add('form-project');

    sidebarProjects.appendChild(container);
  }
}

const buttonAddProject = () => {
  const addProjectButton = document.querySelector('.add-project');

  const eventListener = () => {
    addProjectButton.addEventListener("click", () => {
      modalProject.showModal();
    });
  }

  return { eventListener };
}

const taskItem = (task) => {
  const container = document.createElement('div');
  container.classList.add('task-item');
  container.classList.add(`${task.priority}`);
  container.innerHTML = `
    <div class="left">
      <button class="check ${task.completed ? 'completed' : ''}"></button>
      <div class="info">
        <p>${task.name}</p>
        <p>${task.description}</p>
      </div>
    </div>
    <div class="right">
      <div class="due-date">${task.dueDate || 'no date'}</div>
      <div class="task-options"></div>
    </div>
  `;
  
  return container;
};


export { buttonAddTask, buttonAddProject, taskItem };