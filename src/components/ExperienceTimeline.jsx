import React from 'react';

export default function ExperienceTimeline({ experienceTimeline }) {
  return (
    <div className="p-6 rounded-[1.5rem] bg-white/80 dark:bg-white/5 border border-gray-200/70 dark:border-white/10 shadow-lg">
      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-4">My Professional Experience</h3>
      <ol className="relative border-l border-primary/50 dark:border-primary/50 space-y-8">
        {experienceTimeline.map((item) => (
          <li className="timeline-item ml-6" key={item.title}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-8 ring-background-light dark:ring-background-dark">
              <svg aria-hidden="true" className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 4.414V16a1 1 0 102 0V4.414l5.293 5.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </span>
            <h4 className="flex items-center mb-1 text-base font-semibold text-gray-900 dark:text-white">
              {item.title}
              {item.status && (
                <span className="bg-primary/10 text-primary text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary/20 ml-3">{item.status}</span>
              )}
            </h4>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{item.period}</time>
            {item.description && <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>}
            <p className="text-sm font-normal text-gray-500 dark:text-gray-500">{item.institution}</p>
            {item.level && <p className="mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300">{item.level}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
