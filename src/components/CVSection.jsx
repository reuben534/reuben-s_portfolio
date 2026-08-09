import React from 'react';

export default function CVSection() {
  const baseUrl = import.meta.env.BASE_URL;
  const cvUrl = `${baseUrl}Reuben_Kgobe_CV.pdf`;

  return (
    <section className="mt-16 scroll-mt-20 section-surface py-16" id="cv">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            CV
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            View or download my CV
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Want to learn more about my experience, skills, and projects? Open my CV in a new tab or download a copy for later.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white shadow-2xl shadow-primary/25 transition hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
          >
            View CV
          </a>
          <a
            href={cvUrl}
            download="Reuben_Kgobe_CV.pdf"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark dark:border-white/10 dark:bg-slate-950 dark:text-white dark:hover:border-white/20 dark:hover:bg-slate-900"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
