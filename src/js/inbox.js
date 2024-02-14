import { Task } from './task';

const inboxTasksKey = 'inboxTasks';

const storedInboxTasks = localStorage.getItem(inboxTasksKey);
const inboxTasks = storedInboxTasks ? JSON.parse(storedInboxTasks) : [];

const addTaskToInbox = (newTask) => {
  const task = new Task(newTask.title, newTask.description, newTask.dueDate, newTask.priority);
  inboxTasks.push(task);

  saveInboxTasksToLocalStorage();
};

const getInboxTasks = () => {
  return inboxTasks;
};

const getTodayInboxTasks = () => {
  const today = new Date();
  const todayTasks = [];

  inboxTasks.forEach((task) => {
    const taskDueDate = new Date(task.dueDate);

    taskDueDate.setUTCHours(23, 59, 59, 999);

    const todayDateString = today.toLocaleDateString();
    const taskDueDateString = taskDueDate.toLocaleDateString();

    if (todayDateString === taskDueDateString) {
      todayTasks.push(task);
    }
  });

  return todayTasks;
}

const getTasksInDateRange = (startOfWeek, endOfWeek) => {
  const tasksInDateRange = [];

  inboxTasks.forEach((task) => {
    const taskDueDate = new Date(task.dueDate);

    taskDueDate.setUTCHours(23, 59, 59, 999);

    if (taskDueDate >= startOfWeek && taskDueDate <= endOfWeek) {
      tasksInDateRange.push(task);
    }
  });

  return tasksInDateRange;
};

const saveInboxTasksToLocalStorage = () => {
  const inboxTasksJSON = JSON.stringify(inboxTasks);
  localStorage.setItem(inboxTasksKey, inboxTasksJSON);
};

export { addTaskToInbox, getInboxTasks, getTodayInboxTasks, getTasksInDateRange };