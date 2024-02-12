import Task from './task';
const inboxTasks = [];

const addTaskToInbox = (newTask) => {
  const task = new Task(newTask.title, newTask.description, newTask.dueDate, newTask.priority);
  inboxTasks.push(task);
}

const getInboxTasks = () => {
  return inboxTasks;
}

export { addTaskToInbox, getInboxTasks };