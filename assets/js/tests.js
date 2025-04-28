fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    console.assert(Array.isArray(projects), 'Projects should be an array');
    console.assert(projects.length > 0, 'There should be at least one project');
    projects.forEach(project => {
      console.assert(project.name, 'Each project should have a name');
      console.assert(project.description, 'Each project should have a description');
      console.assert(project.url, 'Each project should have a URL');
    });
  });
