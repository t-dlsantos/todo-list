import { Task } from "./task";

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  addTask(newTask) {
    const task = new Task(newTask.title, newTask.description, newTask.dueDate, newTask.priority);
    this.tasks.push(task);
  }
}

const storedProjects = localStorage.getItem('projects');
const projects = storedProjects ? JSON.parse(storedProjects) : [];

const projectManager = (() => {
  const getProjects = () => {
    return projects;
  }

  const getProjectTasks = (projectName) => {
    const project = projects.find(proj => proj.title === projectName);
  
    return project ? project.tasks : [];
  };  

  const addTaskToProject = (newTask, projectName) => {
    const project = projects.find(proj => proj.title === projectName);
  
    if (project) {
      const task = new Task(newTask.title, newTask.description, newTask.dueDate, newTask.priority);
      project.tasks.push(task);
  
      saveProjectsToLocalStorage();
    }
  }
  
  const saveProjectsToLocalStorage = () => {
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem('projects', projectsJSON);
  }

  const createProject = (title) => {
    const project = new Project(title);
    projects.push(project);
  
    saveProjectsToLocalStorage();
  }

  const getTodayProjectsTasks = () => {
    const today = new Date();
    const todayTasks = [];
  
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        const taskDueDate = new Date(task.dueDate);
        taskDueDate.setUTCHours(23, 59, 59, 999);
  
        const todayDateString = today.toLocaleDateString();
        const taskDueDateString = taskDueDate.toLocaleDateString();
  
        if (todayDateString === taskDueDateString) {
          todayTasks.push(task);
        }
      });
    });
  
    return todayTasks;
  };  

  const getTasksInDateRange = (startOfWeek, endOfWeek) => {
    const tasksInDateRange = [];
  
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        const taskDueDate = new Date(task.dueDate);
  
        taskDueDate.setUTCHours(23, 59, 59, 999);
  
        if (taskDueDate >= startOfWeek && taskDueDate <= endOfWeek) {
          tasksInDateRange.push(task);
        }
      });
    });
  
    return tasksInDateRange;
  };
  
  return { addTaskToProject, getProjects, getProjectTasks, createProject, getTodayProjectsTasks, getTasksInDateRange };
})();

export { projectManager };