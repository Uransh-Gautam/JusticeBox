import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950/5 backdrop-blur-sm border-t border-slate-200/60 w-full mt-auto py-lg px-container-padding transition-colors duration-300">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 text-body-sm text-slate-600 justify-center md:justify-start">
          <span className="material-symbols-outlined text-[18px] text-secondary-container">copyright</span>
          2024 JusticeBox Consumer Rights Protection.
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-body-sm text-slate-600">
          {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((item) => (
            <a key={item} href="#" className="relative transition-colors duration-300 hover:text-secondary-container">
              {item}
              <span className="absolute left-0 -bottom-1 h-[1px] w-full origin-left scale-x-0 bg-secondary-container transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
