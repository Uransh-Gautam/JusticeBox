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
  const [mapCenter, setMapCenter] = useState([28.6139, 77.2090]); // Default New Delhi
  const [searchTerm, setSearchTerm] = useState('');
  const [mapLoading, setMapLoading] = useState(false);

  // Map search logic
  const handleSearch = async (e) => {
    if (e.key !== 'Enter' || !searchTerm.trim()) return;
    
    setMapLoading(true);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}&countrycodes=in`);
      const data = await response.json();
      
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setMapCenter([parseFloat(lat), parseFloat(lon)]);
      }
    } catch (err) {
      console.error('Geocoding error:', err);
    } finally {
      setMapLoading(false);
    }
  };

  // analyze button press hone pe call hoga ye
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
    <div className="min-h-screen flex flex-col relative bg-slate-100 text-slate-900 font-body-md selection:bg-slate-200 selection:text-slate-900">
      <Header />
      <main className="relative z-10 flex-grow flex flex-col items-center w-full max-w-[1440px] mx-auto px-8 py-8 gap-6">
        <section className="w-full bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-[#ff9966] px-4 py-1.5 text-white font-semibold text-sm mb-6">
                Smart consumer complaint generator
              </div>
              <h2 className="font-h1 text-h1 text-slate-950 tracking-tight">Build a strong legal notice in minutes</h2>
              <p className="mt-4 font-body-lg text-on-surface-variant leading-relaxed">
                JusticeBox converts your case details into professional notice language, provides jurisdiction guidance, and makes filing easier.
              </p>
            </div>
            <div className="rounded-2xl bg-[#e6f2ff] border border-[#cce4ff] p-6 text-slate-800 max-w-sm w-full flex flex-col justify-center">
              <p className="font-semibold uppercase tracking-wider text-slate-500 text-xs">Ready to file?</p>
              <p className="font-bold text-2xl mt-2 text-slate-900">3 min setup</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Describe your issue and get a polished notice with a jurisdiction recommendation.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-3xl bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="font-h1 text-3xl font-bold text-slate-900 tracking-tight">What happened?</h1>
            <p className="mx-auto max-w-xl text-slate-600 leading-relaxed">
              Describe your experience and our assistant will craft a strong complaint draft for the correct consumer forum.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <textarea
              className="w-full min-h-[120px] rounded-xl border border-slate-300 bg-slate-50 p-4 text-slate-900 focus:border-[#fd761a] focus:bg-white focus:ring-2 focus:ring-[#fd761a]/20 transition-all duration-300 resize-none placeholder:text-slate-400 custom-scrollbar"
              id="complaint-input"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder="E.g., Swiggy delivered my food 2 hours late, cold, and customer support refused a refund..."
              rows={4}
            />

            {error && (
              <div className="flex items-center gap-2 rounded-2xl border border-error/20 bg-error-container/60 px-4 py-3 text-error text-body-sm font-medium">
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={loading || !complaint.trim()}
              className="relative overflow-hidden rounded-xl bg-[#fd761a] px-6 py-4 text-white font-medium text-base transition duration-300 hover:bg-[#e86a16] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="relative flex items-center justify-center gap-3">
                {loading ? (
                  <>
                    Analyzing Case...
                  </>
                ) : (
                  <>
                    Formulate Legal Notice
                  </>
                )}
              </div>
            </button>
          </div>
        </section>
        <ResultsSection result={result} />
        <div className="w-full grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_0.8fr] mt-2">
          <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8">
            <div className="relative z-10 flex flex-col gap-4">
              <div>
                <h2 className="font-h3 text-h3 text-slate-950 flex items-center gap-3">
                  Nearest Consumer Forum
                </h2>
                <p className="mt-2 text-body-sm text-slate-600">Locate the appropriate jurisdiction for your case.</p>
              </div>
              <div className="grid gap-5">
                <div className="relative rounded-3xl border border-slate-200/70 bg-slate-50/80 p-4">
                  <input
                    className="w-full rounded-3xl border border-slate-200 bg-white/90 py-3 pl-4 pr-4 text-body-sm text-slate-900 focus:border-secondary-container focus:outline-none focus:ring-4 focus:ring-secondary-container/10"
                    placeholder="Type city or pincode and press Enter"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleSearch}
                    disabled={mapLoading}
                  />
                </div>
                <div className={`overflow-hidden rounded-[1.5rem] border border-slate-200/60 relative ${mapLoading ? 'opacity-50' : ''}`}>
                  <ForumMap center={mapCenter} />
                  {mapLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/20 z-10">
                      <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
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
