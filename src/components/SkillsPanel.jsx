import React from 'react';
import SectionCard from './SectionCard';

export default function SkillsPanel({ skillsSections, technologies }) {
  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
      <div className="space-y-12">
        {skillsSections.map((section) => (
          <SectionCard key={section.heading} section={section} />
        ))}
      </div>
      <div className="rounded-[1.5rem] border border-gray-200/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Key technologies</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {technologies.map((tech) => (
            <div key={tech.title} className="rounded-3xl border border-gray-200/50 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/70">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{tech.title}</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tech.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
