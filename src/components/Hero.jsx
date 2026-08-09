import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(81, 148, 255, 0.28), transparent 24%), radial-gradient(circle at 80% 18%, rgba(97, 196, 255, 0.18), transparent 20%), linear-gradient(180deg, rgba(8, 20, 40, 0.9), rgba(8, 20, 40, 0.22)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBA9bTmw8PTMXTtUq-zVOlPsj_s-4PWkIRiZB5Z2pq0NHI-PpD7USu9LnJs5CIHhyCvtRduK0lj2l5EkP6Up6I1Aw88VueHPD2-_xHhs33GAMMoKs7z-ZLrf7LeJXj3S7qE3o048fPrufgKsKzHSLEI33a749fUeUVtgr5zueKHccZSuW1zjXd_0no4iTo0cU0-cq0Lna74f32-0REky6X_Av_jxA_8AiiwQx_uUtHYfxNui0TFUvIl9TBYDRQ5UntPOkVZ75ZPxrsv")' }}></div>
      <div className="relative z-10 mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 px-8 py-16 shadow-[0_40px_120px_rgba(15,23,42,0.18)] backdrop-blur-[24px] text-center text-white sm:px-12">
        <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.18em] text-white/80">2026 Portfolio</span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Reuben Kgobe</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-xl">Modern full-stack developer blending MERN and ASP.NET Core MVC with polished UX, strong cloud skills, and fast delivery.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white shadow-2xl shadow-primary/25 transition hover:bg-primary-strong focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark" href="#projects">View Projects</a>
          <a className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-base font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/15" href="#contact">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  );
}
