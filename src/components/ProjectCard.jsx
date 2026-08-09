import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card group flex flex-col overflow-hidden rounded-[1.5rem] border border-gray-200/40 bg-white/80 shadow-xl transition-shadow hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
      <div className="project-image aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url("${project.image}")` }}></div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          {project.link ? (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Live</span>
          ) : (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Soon</span>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
        {project.link && (
          <div className="mt-6">
            <a className="btn-primary inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" href={project.link} rel="noopener noreferrer" target="_blank">
              {project.cta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
