import React, { useState } from 'react';

// results dikhane ke liye section
export default function ResultsSection({ result }) {
  const [copied, setCopied] = useState(false);

  // notice copy button function
  const handleCopy = () => {
    navigator.clipboard.writeText(result.notice);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!result) return null;

  return (
    <section className="w-full max-w-full flex flex-col gap-6 animate-fadeInUp mt-2">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#fd761a]" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-h2 text-h2 text-slate-950 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fd761a]/10 text-[#fd761a]">
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

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-slate-800" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-h2 text-h2 text-slate-950 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <span className="material-symbols-outlined">description</span>
                </span>
                Suggested Legal Notice
              </h2>
              <p className="mt-2 text-body-sm text-slate-600">Copy this draft to paste into your notice or legal filing.</p>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#fd761a] hover:bg-[#fd761a]/5"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="max-h-[420px] overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-6 font-mono-label text-slate-900 whitespace-pre-wrap custom-scrollbar">
            {result.notice}
          </div>
        </div>
      </div>
    </section>
  );
}
