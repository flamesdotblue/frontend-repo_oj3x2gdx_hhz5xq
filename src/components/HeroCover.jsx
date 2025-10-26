import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative h-[42vh] min-h-[320px] w-full overflow-hidden rounded-b-3xl border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1437]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top Gradient Overlay (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/10 to-slate-900/80" />

      {/* Headline content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="w-full p-6 sm:p-8">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live tournaments updated in real-time
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              WinZone — Compete. Win. Withdraw.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
              Join daily matches, climb the leaderboard, and cash out securely. Futuristic neon vibes, real rewards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
