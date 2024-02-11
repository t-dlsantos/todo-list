class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    const task = new Todo(title, description, dueDate, priority);
    this.tasks.push(task);
    return task;
  }

  getTasks() {
    return this.tasks;
  }
}

export default Project;