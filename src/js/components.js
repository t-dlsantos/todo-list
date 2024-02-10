import '../css/general.css';

const modal = {
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
      console.log('Formulário enviado!');
    });

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
  
  const popUpForm = () => {
  }

  const eventListener = () => {
    const addButton = document.querySelector(".addButton");
    
    addButton.addEventListener("click", () => {
      modal.showModal();
    });
  }

  return { create, popUpForm, eventListener };
}

export { buttonAddTask };