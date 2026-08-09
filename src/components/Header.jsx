import React from 'react';

export default function Header({ theme, toggleTheme, mobileOpen, setMobileOpen }) {
  const mobileMenuClass = mobileOpen ? 'flex flex-col gap-4 px-4 py-2' : 'hidden flex-col gap-4 px-4 py-2';

  return (
    <>
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-primary/20 bg-background-light/80 px-4 py-4 backdrop-blur-sm dark:bg-background-dark/80 sm:px-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Reuben Kgobe</h2>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#about">About</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#skills">Skills</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#projects">Projects</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="Visit Reuben Kgobe on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-gray-700 hover:bg-primary/20 dark:bg-primary/20 dark:text-white dark:hover:bg-primary/30" href="https://www.linkedin.com/in/reuben-kgobe-aa10742a1/" rel="noopener noreferrer" target="_blank">
            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          </a>
          <button aria-label="Toggle dark mode" id="theme-toggle" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-gray-700 hover:bg-primary/20 dark:bg-primary/20 dark:text-white dark:hover:bg-primary/30" onClick={toggleTheme}>
            <svg id="theme-toggle-dark-icon" className={theme === 'dark' ? 'hidden h-5 w-5' : 'h-5 w-5'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-toggle-light-icon" className={theme === 'dark' ? 'h-5 w-5' : 'hidden h-5 w-5'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 18a1 1 0 011-1v-1a1 1 0 11-2 0v1a1 1 0 011 1zM5.05 14.464L4.343 13.757a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414zM14.95 5.536l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zM4.95 5.536L4.243 4.828a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414z"></path></svg>
          </button>
          <button aria-label="Toggle mobile menu" className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-gray-700 hover:bg-primary/20 dark:bg-primary/20 dark:text-white dark:hover:bg-primary/30" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={mobileMenuClass}>
        <nav>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
          <a className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary" href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        </nav>
      </div>
    </>
  );
}
