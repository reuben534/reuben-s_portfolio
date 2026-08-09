import React from 'react';
import EducationTimeline from './EducationTimeline';

export default function AboutSection({ educationTimeline }) {
  return (
    <section className="scroll-mt-20 section-surface py-16" id="about">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 space-y-6 text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 md:text-lg">I design and build modern, scalable applications across web and cloud environments with clean user experiences, stable APIs, and strong security practices.</p>
        </div>
        <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>Reuben Kgobe is a systems and applications developer with a passion for building innovative and efficient solutions. His journey combines strong technical foundations with an eye for intuitive product design and real business impact.</p>
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-cover bg-center ring-4 ring-primary/50 profile-pic" style={{ backgroundImage: 'url("/images/Profile_Pic.jpeg")' }}></div>
          </div>
          <EducationTimeline educationTimeline={educationTimeline} />
          <p>My education has armed me with a robust understanding of software development principles and practices. I'm especially drawn to designing and building scalable, efficient systems that tackle real-world problems. I am eager to apply my skills and knowledge in a professional environment, where I can contribute to impactful projects and continue my growth as a developer.</p>
          <p>I'm truly excited by the possibilities that lie ahead and look forward to connecting with like-minded professionals, mentors, and potential collaborators. If you'd like to discuss technology, exciting projects, or opportunities, please feel free to reach out.</p>
        </div>
        <div className="mt-12 text-center">
          <a className="btn-primary inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" href="#contact">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
