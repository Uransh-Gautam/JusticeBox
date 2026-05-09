import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white py-4 px-8 shadow-sm transition-all duration-300">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fd761a] text-white">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
                <div className="w-2 h-2 bg-white/60 rounded-sm"></div>
              </div>
            </div>
            <div className="font-bold text-2xl text-slate-900 leading-none">JusticeBox</div>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <button className="font-medium text-slate-600 hover:text-slate-900 transition-colors">Sign in</button>
          <button className="font-medium rounded-lg bg-[#fd761a] px-4 py-2 text-white hover:bg-[#e86a16] transition-colors">Sign up</button>
          
          <div className="h-8 w-px bg-slate-200 mx-2"></div>
          
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors border border-slate-200">
            <span className="material-symbols-outlined text-xl">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}
