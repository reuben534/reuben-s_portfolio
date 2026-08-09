import React from 'react';
import EducationTimeline from './EducationTimeline';

export default function AboutSection({ educationTimeline }) {
  return (
    <section className="scroll-mt-20 section-surface py-16" id="about">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 space-y-6 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 md:text-lg">I build practical web solutions with a focus on clean interfaces, reliable data flows, and real-world value. My work connects users, systems, and cloud tooling in ways that feel natural and dependable.</p>
        </div>
        <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>Hi, I'm Reuben. I enjoy taking problems that start as ideas and turning them into working web applications. My background includes projects like payment portals, event management solutions, and a growing ecommerce site, and I get the most satisfaction from code that is both useful and easy to maintain.</p>
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-cover bg-center ring-4 ring-primary/50 profile-pic" style={{ backgroundImage: 'url("/images/Profile_Pic.jpeg")' }}></div>
          </div>
          <EducationTimeline educationTimeline={educationTimeline} />
          <p>I studied applications development and systems development, and I apply that foundation to build software with purpose. I enjoy working with React, ASP.NET Core, Node.js, and Azure, and I like when my projects improve business processes or make someone’s day a little easier.</p>
          <p>I'm looking for opportunities where I can contribute to real projects, work closely with a team, and keep learning through hands-on experience. If you'd like to collaborate or discuss a practical solution, feel free to reach out.</p>
        </div>
        <div className="mt-12 text-center">
          <a className="btn-primary inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" href="#contact">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
