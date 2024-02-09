import '../css/general.css'
import '../css/inbox.css';
import AddTaskButton from './addTaskButton.js';

function loadInboxPage() {
  const content = document.querySelector('.content');
  const title = document.createElement('h1');

  title.textContent = 'Inbox';
  title.classList.add('pageTitle');

  content.textContent = '';
  content.appendChild(title);
  content.appendChild(AddTaskButton());
}

export default loadInboxPage;