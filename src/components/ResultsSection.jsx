import React, { useState } from 'react';

export default function ResultsSection({ result }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result.notice);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!result) return null;

  return (
    <section className="w-full max-w-3xl flex flex-col gap-7 animate-fadeInUp">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.18)]">
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-secondary-container via-secondary-container/70 to-transparent rounded-tr-2xl" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-h2 text-h2 text-slate-950 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary-container/10 text-secondary-container">
                  <span className="material-symbols-outlined">gavel</span>
                </span>
                Legal Analysis
              </h2>
              <p className="mt-2 max-w-xl text-body-sm text-slate-600">A clear summary of your case, legal issues, and first steps.</p>
            </div>
          </div>
          <p className="font-body-md text-slate-700 leading-relaxed whitespace-pre-wrap">{result.analysis}</p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.18)]">
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-slate-900 via-primary to-transparent rounded-tr-2xl" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-h2 text-h2 text-slate-950 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900">
                  <span className="material-symbols-outlined">description</span>
                </span>
                Suggested Legal Notice
              </h2>
              <p className="mt-2 text-body-sm text-slate-600">Copy this draft to paste into your notice or legal filing.</p>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-body-sm text-slate-700 transition hover:border-secondary-container hover:bg-secondary-container/10"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="max-h-[420px] overflow-y-auto rounded-[1.5rem] border border-slate-200/70 bg-slate-50 p-6 font-mono-label text-slate-900 whitespace-pre-wrap shadow-inner custom-scrollbar">
            {result.notice}
          </div>
        </div>
      </div>
    </section>
  );
}
