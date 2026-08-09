import React from 'react';

export default function SectionCard({ section }) {
  return (
    <section className="rounded-[1.5rem] border border-gray-200/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/5">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
        <span className="material-symbols-outlined text-primary">{section.icon}</span>
        {section.heading}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
        {section.skills.map((skill) => (
          <div key={skill.title} className="skill-card group flex flex-col gap-4 rounded-3xl border border-gray-200/50 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-white/10 dark:bg-slate-950/80 dark:hover:border-primary/50">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{skill.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
