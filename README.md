# Portafolio Web con TDD, ORM en JSON y Trabajo Ágil

## Descripción del Proyecto
Este portafolio web despliega proyectos almacenados en un archivo JSON, aplicando conceptos de TDD (Desarrollo Guiado por Pruebas), ORM básico, y principios de Trabajo Ágil.

---

## Componentes Principales

### ORM en JSON
- El archivo `data/projects.json` actúa como una "base de datos" que almacena objetos de proyectos.
- Cada objeto contiene:
  - `id`
  - `name`
  - `description`
  - `url`
- El archivo `js/app.js` lee dinámicamente el JSON y renderiza el contenido en la web.

### TDD (Test Driven Development)
- Se implementa en el archivo `js/tests.js`.
- Antes de cargar los proyectos en la página, se realizan pruebas automáticas para:
  - Confirmar que el JSON es un array.
  - Confirmar que el array no está vacío.
  - Validar que cada objeto contiene `id`, `name`, `description` y `url`.
- Si las pruebas son exitosas, se muestra un mensaje de éxito en la consola del navegador.

### Trabajo Ágil
- Se entrega un MVP funcional en el primer despliegue.
- Se automatiza el flujo de integración y despliegue con GitHub Actions.
- Cada adición o modificación de proyectos sigue un enfoque incremental, asegurando calidad mediante TDD.
- Documentación ligera y eficiente para acelerar el desarrollo.

---

## Flujo de Trabajo

1. Agregar nuevos proyectos en `data/projects.json`.
2. Correr `js/tests.js` para validar la estructura de los datos.
3. GitHub Actions despliega automáticamente el sitio a GitHub Pages.

---

## Requisitos
- Navegador moderno (Chrome, Firefox, Edge).
- GitHub Pages habilitado para despliegue automático.

---
