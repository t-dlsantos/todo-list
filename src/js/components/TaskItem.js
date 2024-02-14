const TaskItem = (task) => {
  const container = document.createElement('div');
  container.classList.add('task-item');
  container.classList.add(`${task.priority}`);
  container.innerHTML = `
    <div class="left">
      <button class="check ${task.completed ? 'completed' : ''}"></button>
      <div class="info">
        <p>${task.title}</p>
        <p class="description">${task.description}</p>
      </div>
    </div>
    <div class="right">
      <div class="due-date">${task.dueDate || 'no date'}</div>
      <div class="task-options"></div>
    </div>
  `;
  
  return container;
};

export default TaskItem;