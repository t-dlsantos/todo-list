import { getInboxTasks, getTasksInDateRange, getTodayInboxTasks } from './inbox';
import { projectManager } from './projects';

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}

const taskManager = (() => {
  const getTodayTasks = () => {
    const inboxTasks = getTodayInboxTasks();
    const projectsTasks = projectManager.getTodayProjectsTasks()
    
    const combinedTasks = [...inboxTasks, ...projectsTasks];

    return combinedTasks;
  };
  
  const getThisWeekTasks = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
  
    const endOfWeek = new Date(today);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
  
    const inboxTasks = getTasksInDateRange(startOfWeek, endOfWeek);
    const projectsTasks = projectManager.getTasksInDateRange(startOfWeek, endOfWeek);
  
    const combinedTasks = [...inboxTasks, ...projectsTasks];
  
    return combinedTasks;
  };
  
  const getProjectTasks= (pageTitle) => {
    return projectManager.getProjectTasks(pageTitle);
  }

  return {
    getTodayTasks,
    getThisWeekTasks,
    getInboxTasks,
    getProjectTasks,
  };
})();

export { Task, taskManager };
