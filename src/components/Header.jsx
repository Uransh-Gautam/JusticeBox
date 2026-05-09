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
            <div>
              <span className="font-semibold text-lg text-slate-800">Company</span>
              <div className="font-bold text-xl text-slate-900 leading-none">JusticeBox ™</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2 pl-6 border-l border-slate-200">
            <span className="material-symbols-outlined text-slate-400 text-xl">home</span>
            <span className="font-medium text-slate-700">Dashboard</span>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm text-slate-500 md:flex">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <span>Updated just now</span>
          </div>
          <button className="flex items-center gap-2 text-slate-700 hover:text-[#fd761a] transition-colors font-medium">
            <span className="material-symbols-outlined text-lg">refresh</span>
            Reload
          </button>
        </div>
      </div>
    </header>
  );
}
