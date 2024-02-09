import '../css/general.css';

export default function AddTaskButton() {
  const button = document.createElement('button');
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("width", "17");
  svg.setAttribute("height", "17");
  path.setAttribute("d", "M6.34125 -0.00499725V5.99875H0V10.0013H6.34125V16.005H10.5688V10.0013H16.91V5.99875H10.5688V-0.00499725H6.34125Z"); // Substitua pelo conteúdo do seu ícone SVG
  svg.appendChild(path);
  svg.classList.add('icon');

  button.appendChild(svg);

  const buttonText = document.createElement('span');
  buttonText.textContent = 'Add Task';

  button.appendChild(buttonText);

  button.classList.add('addButton');
  return button;
}
