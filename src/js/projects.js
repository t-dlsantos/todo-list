class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}

const projectManager = (() => {
  const projects = [];

  // function saveProjectsToLocalStorage() {
  //   const projectsJSON = JSON.stringify(projects);
  //   localStorage.setItem('projects', projectsJSON);
  // }

  const createProject = (title) => {
    const project = new Project(title);
    projects.push(project);
  }

  // function updateProject(project, updatedData) {
  //   // Implement project updating logic
  //   saveProjectsToLocalStorage();
  // }

  // function deleteProject(project) {
  //   // Implement project deletion logic
  //   const index = projects.indexOf(project);
  //   if (index !== -1) {
  //     projects.splice(index, 1);
  //     saveProjectsToLocalStorage();
  //   }
  // }

  // const storedProjects = localStorage.getItem('projects');
  // if (storedProjects) {
  //   projects.push(...JSON.parse(storedProjects));
  // }

  return { createProject };
})();

export { projectManager };

  // updateProject,
  // deleteProject,