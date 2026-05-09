import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilingSteps from './components/FilingSteps';
import ResultsSection from './components/ResultsSection';
import ForumMap from './components/ForumMap';
import { analyzeComplaint } from './api/ai';

export default function App() {
  const [complaint, setComplaint] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!complaint.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await analyzeComplaint(complaint);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to analyze the complaint.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.16),_transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_45%,#fff7ed_100%)] text-slate-950 font-body-md selection:bg-secondary-container/20 selection:text-secondary-container">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_35%)] blur-3xl"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom,_rgba(251,146,60,0.18),_transparent_42%)] blur-3xl"></div>

      <Header />

      <main className="relative z-10 flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-container-padding py-xl gap-xl">
        <section className="w-full max-w-4xl rounded-[2rem] border border-white/70 bg-white/75 backdrop-blur-2xl shadow-[0_40px_120px_-60px_rgba(59,130,246,0.28)] p-xl mb-4 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-secondary-container/20 to-transparent blur-3xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-secondary-container/10 px-4 py-2 text-secondary-container font-semibold text-body-sm mb-4 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
                Smart consumer complaint generator
              </p>
              <h2 className="font-h1 text-h1 text-slate-950 tracking-tight">Build a strong legal notice in minutes</h2>
              <p className="mt-4 font-body-lg text-on-surface-variant leading-relaxed">
                JusticeBox converts your case details into professional notice language, provides jurisdiction guidance, and makes filing easier.
              </p>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-800 to-indigo-600 p-6 text-white shadow-[0_25px_75px_-35px_rgba(15,23,42,0.65)] max-w-sm w-full">
              <p className="font-body-sm uppercase tracking-[0.18em] text-slate-200/85">Ready to file?</p>
              <p className="font-h2 text-[2rem] mt-3">3 min setup</p>
              <p className="mt-3 text-body-sm text-slate-200/80 leading-relaxed">
                Describe your issue and get a polished notice with a jurisdiction recommendation.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-3xl bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-slate-200/70 p-xl shadow-[0_28px_80px_-40px_rgba(15,23,42,0.18)]">
          <div className="flex flex-col gap-4 text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-body-sm font-semibold shadow-sm">Legal confidence meets fast clarity</span>
            <h1 className="font-h1 text-h1 text-slate-950 tracking-tight">What happened?</h1>
            <p className="mx-auto max-w-2xl font-body-lg text-on-surface-variant leading-relaxed">
              Describe your experience and our assistant will craft a strong complaint draft for the correct consumer forum.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <textarea
              className="w-full min-h-[170px] rounded-3xl border border-slate-300/70 bg-slate-50/90 p-5 text-body-md text-slate-900 shadow-inner focus:border-secondary-container focus:bg-white focus:ring-4 focus:ring-secondary-container/10 transition-all duration-300 resize-none placeholder:text-slate-400 custom-scrollbar"
              id="complaint-input"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder="E.g., Swiggy delivered my food 2 hours late, cold, and customer support refused a refund..."
              rows={6}
            />

            {error && (
              <div className="flex items-center gap-2 rounded-2xl border border-error/20 bg-error-container/60 px-4 py-3 text-error text-body-sm font-medium shadow-sm">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={loading || !complaint.trim()}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-secondary-container to-primary px-6 py-4 text-white font-cta text-cta shadow-lg shadow-secondary-container/20 transition duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <div className="relative flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Analyzing Case...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">magic_button</span>
                    Formulate Legal Notice
                  </>
                )}
              </div>
            </button>
          </div>
        </section>

        <ResultsSection result={result} />

        <div className="w-full grid grid-cols-1 gap-8 xl:grid-cols-[1.2fr_0.8fr] mt-8">
          <section className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/85 p-8 shadow-[0_24px_75px_-40px_rgba(15,23,42,0.18)]">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br from-secondary-container/15 to-transparent blur-3xl" />
            <div className="relative z-10 flex flex-col gap-4">
              <div>
                <h2 className="font-h3 text-h3 text-slate-950 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container">location_on</span>
                  Nearest Consumer Forum
                </h2>
                <p className="mt-2 text-body-sm text-slate-600">Locate the appropriate jurisdiction for your case.</p>
              </div>
              <div className="grid gap-5">
                <div className="relative rounded-3xl border border-slate-200/70 bg-slate-50/80 p-4 shadow-sm">
                  <span className="material-symbols-outlined text-slate-400 absolute left-5 top-5">search</span>
                  <input
                    className="w-full rounded-3xl border border-slate-200 bg-white/90 py-3 pl-12 pr-4 text-body-sm text-slate-900 shadow-sm focus:border-secondary-container focus:outline-none focus:ring-4 focus:ring-secondary-container/10"
                    placeholder="Search your city or zip code"
                    type="text"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200/60 shadow-inner">
                  <ForumMap center={[28.6139, 77.2090]} />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-black/5" />
                </div>
              </div>
            </div>
          </section>

          <FilingSteps />
        </div>
      </main>

      <Footer />
    </div>
  );
}
