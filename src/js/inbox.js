import Todo from './todo';
const inboxTasks = [];

const addTaskToInbox = (title, description, dueDate, priority) => {
  const task = new Todo(title, description, dueDate, priority);
  inboxTasks.push(task);
  return task;
}

const getInboxTasks = () => {
  return inboxTasks;
}

export { addTaskToInbox, getInboxTasks };