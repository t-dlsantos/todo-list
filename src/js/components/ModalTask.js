import { addTaskToInbox } from '../inbox';
import display from '../display';
import { projectManager } from '../projects';

const createModalTaskComponent = () => {
  const showModal = (pageTitle) => {
    const addButton = document.querySelector('.addButton');
    const formHTML = document.createElement('form');
    
    formHTML.classList.add('form');
    formHTML.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" class="close">
        <path d="M8.5 0A8.5 8.5 0 1 0 8.5 17A8.5 8.5 0 1 0 8.5 0ZM6.34125 5.99875V16.005H10.5688V5.99875H6.34125Z"></path>
      </svg>
      <input type="text" placeholder="Title *" class="form-title" required>
      <textarea placeholder="Description"></textarea>
      <input type="date" placeholder="Due Date" class="due-date">
      <select class="priority" required>
        <option value="" disabled selected>Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" class="submit-button">Add Task</button>
    `;

    const content = document.querySelector('.content');
    content.appendChild(formHTML);

    const form = content.querySelector('.form');
    const close = content.querySelector('.close');

    const closeModal = () => {
      form.remove();
      addButton.style.display = 'flex';
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const newTask = {
        title: form.querySelector('.form-title').value,
        description: form.querySelector('textarea').value,
        dueDate: form.querySelector('.due-date').value,
        priority: form.querySelector('.priority').value
      };
      
      if (pageTitle === 'Inbox') {
        addTaskToInbox(newTask);
      } else {
        projectManager.addTaskToProject(newTask, pageTitle);
      }
      
      closeModal();
      display.displayNewTask(newTask);
    };

    form.addEventListener('submit', handleSubmit);
    close.addEventListener('click', closeModal);
  };

  return {
    showModal,
  };
};

const ModalTask = createModalTaskComponent();

export default ModalTask;