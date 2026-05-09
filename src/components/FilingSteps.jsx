import React from 'react';

const steps = [
  { id: 1, title: 'Prepare Notice', desc: 'Draft a formal legal notice to the opposing party detailing your grievances.', icon: 'edit_document' },
  { id: 2, title: 'Send via Post', desc: 'Dispatch the notice via registered post with acknowledgment due.', icon: 'local_post_office' },
  { id: 3, title: 'File in Forum', desc: 'Submit your official complaint and evidentiary documents to the appropriate consumer court.', icon: 'account_balance' }
];

export default function FilingSteps() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_25px_65px_-35px_rgba(15,23,42,0.18)]">
      <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-6">
        <div>
          <h2 className="font-h3 text-h3 text-slate-950 flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary-container">assignment</span>
            How to File
          </h2>
          <p className="mt-2 text-body-sm text-slate-600">A simplified guide to the legal process.</p>
        </div>
        <div className="space-y-5">
          {steps.map((step, index) => (
            <div key={step.id} className="flex gap-4 rounded-[1.75rem] border border-slate-200/70 bg-slate-50 px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary-container/70">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-sm">
                <span className="font-mono-label text-mono-label">{step.id}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-slate-950">
                  <h3 className="font-cta text-cta">{step.title}</h3>
                  <span className="material-symbols-outlined text-secondary-container">{step.icon}</span>
                </div>
                <p className="mt-2 text-body-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
