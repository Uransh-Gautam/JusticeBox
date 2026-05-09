import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 mt-auto border-t border-slate-200">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-[1440px] mx-auto text-sm text-slate-500">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span>© 2026 JusticeBox</span>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Contact Support'].map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-slate-900">
              {item}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
}
