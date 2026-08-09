import React from 'react';

export default function SectionSummary({ title, subtitle, description, children }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 space-y-4 text-center">
        <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{title}</span>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">{subtitle}</h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      {children}
    </div>
  );
}
