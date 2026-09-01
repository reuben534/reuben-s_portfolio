import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import SectionSummary from './components/SectionSummary';
import SkillsPanel from './components/SkillsPanel';
import ProjectGrid from './components/ProjectGrid';
import ContactForm from './components/ContactForm';
import CVSection from './components/CVSection';
import Toast from './components/Toast';
import { educationTimeline, experienceTimeline, skillsSections, technologies, projects } from './data/portfolioData';

function App() {
  const [theme, setTheme] = useState('light');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme === 'dark' || (!storedTheme && prefersDark) ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const showToast = (title, message, type = 'success') => {
    setToast({ title, message, type });
    window.setTimeout(() => setToast(null), 5000);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('color-theme', nextTheme);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        event.currentTarget.reset();
        showToast('Message Sent Successfully! 🎉', "Thank you for reaching out. I'll get back to you soon!", 'success');
      } else {
        const data = await response.json();
        const errorMsg = data?.errors?.map((error) => error.message).join(', ') || 'There was a problem submitting your form.';
        showToast('Submission Failed', errorMsg, 'error');
      }
    } catch (error) {
      showToast('Error', 'Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsSending(false);
    }
  };

  const mobileMenuClass = mobileOpen ? 'flex flex-col gap-4 px-4 py-2' : 'hidden flex-col gap-4 px-4 py-2';

  return (
    <div className="relative min-h-screen w-full">
      <Toast toast={toast} onClose={() => setToast(null)} />
      <div className="layout-container flex h-full grow flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main className="flex-1">
          <Hero />
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <AboutSection educationTimeline={educationTimeline} />
            <section className="mt-16 scroll-mt-20 section-surface py-16" id="experience">
              <SectionSummary
                title="Experience"
                subtitle="My professional journey"
                description="From control room operations to full-stack development. Leveraging my background to build innovative solutions."
              >
                <ExperienceTimeline experienceTimeline={experienceTimeline} />
              </SectionSummary>
            </section>
            <section className="mt-16 scroll-mt-20 section-surface py-16" id="skills">
              <SectionSummary
                title="Skills"
                subtitle="What I build"
                description="Practical web and API solutions built for real teams, reliable workflows, and measurable business outcomes."
              >
                <SkillsPanel skillsSections={skillsSections} technologies={technologies} />
              </SectionSummary>
            </section>
            <section className="mt-16 scroll-mt-20" id="projects">
              <SectionSummary
                title="Projects"
                subtitle="Showcasing selected work"
                description="Web apps and full-stack systems built with performance, security, and modern tooling in mind."
              >
                <ProjectGrid projects={projects} />
              </SectionSummary>
            </section>
            <CVSection />
            <section className="mt-16 scroll-mt-20 section-surface py-16" id="contact">
              <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                  <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Me</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">Let's build something great together. Whether you have a question, a project idea, or want to connect, my inbox is always open. Fill out the form below or call me at <span className="text-primary">061 489 3124</span>.</p>
                </div>
                <ContactForm handleFormSubmit={handleFormSubmit} isSending={isSending} />
              </div>
            </section>
          </div>
          <footer className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="mx-auto max-w-5xl text-center text-sm text-gray-500 dark:text-gray-400">© 2026 Reuben Kgobe. Designed for modern teams and ambitious products.</div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
