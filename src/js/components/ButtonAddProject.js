import ModalProject from "./ModalProject";

const createButtonAddProject = () => {
  const addProjectButton = document.querySelector('.add-project');

  const eventListener = () => {
    addProjectButton.addEventListener("click", () => {
      if(document.querySelector('.project-form')) {
        return;
      }
      ModalProject.showModal();
    });
  }

  return { eventListener };
}

const ButtonAddProject = createButtonAddProject();

export default ButtonAddProject;