import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl text-slate-950 py-5 px-container-padding shadow-sm transition-all duration-300">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-gradient-to-br from-secondary-container to-orange-500 text-white shadow-[0_15px_35px_-20px_rgba(253,118,26,0.7)]">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
          </div>
          <div>
            <span className="font-h2 text-h2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-indigo-700 to-secondary-container">JusticeBox</span>
            <p className="mt-1 text-body-sm text-slate-600">Consumer rights, simplified.</p>
          </div>
        </div>

        <div className="hidden items-center gap-5 text-body-sm text-slate-600 md:flex">
          {['How it works', 'Forum Finder', 'Support'].map((item) => (
            <a key={item} href="#" className="transition-colors duration-300 hover:text-secondary-container">
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
