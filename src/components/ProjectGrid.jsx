import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
