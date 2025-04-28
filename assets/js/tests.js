async function runTests() {
  const resultsDiv = document.createElement('div');
  resultsDiv.id = 'test-results';
  resultsDiv.style.padding = '1rem';
  resultsDiv.style.backgroundColor = '#f8f9fa';
  resultsDiv.style.border = '1px solid #ccc';
  resultsDiv.style.margin = '1rem';
  resultsDiv.style.fontFamily = 'monospace';

  const addResult = (message, success) => {
    const p = document.createElement('p');
    p.innerHTML = success ? `✅ ${message}` : `❌ ${message}`;
    p.style.color = success ? 'green' : 'red';
    resultsDiv.appendChild(p);
  };

  document.body.prepend(resultsDiv);

  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();

    addResult("El archivo JSON fue cargado correctamente.", true);

    if (Array.isArray(projects)) {
      addResult("Los proyectos están en un array.", true);
    } else {
      addResult("Los proyectos NO están en un array.", false);
    }

    if (projects.length > 0) {
      addResult("El array de proyectos no está vacío.", true);
    } else {
      addResult("El array de proyectos está vacío.", false);
    }

    projects.forEach((project, index) => {
      addResult(`Proyecto ${index + 1} tiene un ID: ${!!project.id}`, !!project.id);
      addResult(`Proyecto ${index + 1} tiene un nombre: ${!!project.name}`, !!project.name);
      addResult(`Proyecto ${index + 1} tiene una descripción: ${!!project.description}`, !!project.description);
      addResult(`Proyecto ${index + 1} tiene una URL: ${!!project.url}`, !!project.url);
    });

    console.log("✅ All tests completed.");
  } catch (error) {
    addResult(`❌ Error al cargar proyectos: ${error}`, false);
    console.error(error);
  }
}

runTests();
