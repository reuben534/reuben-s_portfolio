import React from 'react';

export default function ContactForm({ handleFormSubmit, isSending }) {
  return (
    <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" className="mt-12 space-y-6" onSubmit={handleFormSubmit}>
      <input type="hidden" name="access_key" value="66c48468-fd9d-43fa-be31-6c8c0de4c60a" />
      <div>
        <label className="mb-2 block text-sm font-medium text-black/80 dark:text-white/80" htmlFor="name">Name</label>
        <input autoComplete="name" className="form-input block w-full rounded-lg border-white/10 bg-black/5 p-3 text-black transition focus:border-primary focus:ring-primary dark:bg-white/5 dark:text-white" id="name" name="name" placeholder="Your Name" required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-black/80 dark:text-white/80" htmlFor="email">Email</label>
        <input autoComplete="email" className="form-input block w-full rounded-lg border-white/10 bg-black/5 p-3 text-black transition focus:border-primary focus:ring-primary dark:bg-white/5 dark:text-white" id="email" name="email" placeholder="Your Email" type="email" required />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-black/80 dark:text-white/80" htmlFor="subject">Subject</label>
        <input className="form-input block w-full rounded-lg border-white/10 bg-black/5 p-3 text-black transition focus:border-primary focus:ring-primary dark:bg-white/5 dark:text-white" id="subject" name="subject" placeholder="Subject" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-black/80 dark:text-white/80" htmlFor="message">Message</label>
        <textarea className="form-textarea block w-full rounded-lg border-white/10 bg-black/5 p-3 text-black transition focus:border-primary focus:ring-primary dark:bg-white/5 dark:text-white" id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
      </div>
      <div className="flex justify-end">
        <button className="btn-primary rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark flex items-center gap-2" type="submit" disabled={isSending}>
          {isSending ? (
            <>Sending...</>
          ) : (
            <>Send Message</>
          )}
        </button>
      </div>
    </form>
  );
}
