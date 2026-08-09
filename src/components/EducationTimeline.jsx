import React from 'react';

export default function EducationTimeline({ educationTimeline }) {
  return (
    <div className="p-6 rounded-[1.5rem] bg-white/80 dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-lg">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">My Educational Journey</h3>
      <ol className="relative border-l border-primary/50 dark:border-primary/50 space-y-8">
        {educationTimeline.map((item) => (
          <li className="timeline-item ml-6" key={item.title}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-8 ring-background-light dark:ring-background-dark">
              <svg aria-hidden="true" className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"></path>
                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
              </svg>
            </span>
            <h4 className="flex items-center mb-1 text-base font-semibold text-gray-900 dark:text-white">
              {item.title}
              {item.status && (
                <span className="bg-primary/10 text-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary/20 ml-3">{item.status}</span>
              )}
            </h4>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{item.period}</time>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{item.institution}</p>
            {item.level && <p className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">{item.level}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
