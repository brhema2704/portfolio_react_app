import React from 'react';

function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
