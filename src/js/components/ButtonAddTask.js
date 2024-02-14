import ModalTask from "./ModalTask";

const createButtonAddTask = () => {
  const create = () => {
    const button = document.createElement('button');
    button.classList.add('addButton');
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" class="icon">
        <path d="M6.34125 -0.00499725V5.99875H0V10.0013H6.34125V16.005H10.5688V10.0013H16.91V5.99875H10.5688V-0.00499725H6.34125Z"></path>
      </svg>
      <span>Add Task</span>
    `;

    return button;
  }

  const eventListener = (pageTitle) => {
    const addButton = document.querySelector(".addButton");

    addButton.addEventListener("click", () => {
      if(document.querySelector('.form')) {
        return;
      }
      ModalTask.showModal(pageTitle);
    });
  }

  return { create, eventListener };
}

const ButtonAddTask = createButtonAddTask();

export default ButtonAddTask;
