fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
      const div = document.createElement('div');
      div.className = 'project';
      div.innerHTML = `<h2>${project.name}</h2><p>${project.description}</p><a href="${project.url}" target="_blank">View Project</a>`;
      container.appendChild(div);
    });
  });
