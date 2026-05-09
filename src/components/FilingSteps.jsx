import React from 'react';

// How to file section apna
const steps = [
  { id: 1, title: 'Prepare Notice', desc: 'Draft a formal legal notice to the opposing party detailing your grievances.'},
  { id: 2, title: 'Send via Post', desc: 'Dispatch the notice via registered post with acknowledgment due.'},
  { id: 3, title: 'File in Forum', desc: 'Submit your official complaint and evidentiary documents to the appropriate consumer court.'}
];

export default function FilingSteps() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8">
      <div className="relative z-10 flex flex-col gap-6">
        <div>
          
          <h1 className="font-h1 font-bold text-h1 text-slate-950 flex items-center gap-3">
            How to File
          </h1>
          <p className="mt-2 text-sm text-slate-500">A simplified guide to the legal process.</p>
        </div>
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-slate-300">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
                <span className="font-bold text-lg">{step.id}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-slate-900">
                  <h3 className="font-medium text-base">{step.title}</h3>
                </div>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
