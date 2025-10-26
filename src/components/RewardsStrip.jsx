import React from 'react';
import { Trophy, Crown } from 'lucide-react';

const winners = [
  { id: 'w1', name: 'ShadowX', rank: 1, match: 'Neon Night', reward: 500 },
  { id: 'w2', name: 'BlazeKing', rank: 2, match: 'Blue Storm', reward: 300 },
  { id: 'w3', name: 'NovaAce', rank: 3, match: 'Ice Field', reward: 200 },
];

const RewardsStrip = () => {
  return (
    <section className="mx-auto -mt-6 max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-100">
        <div className="mb-2 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-emerald-300" />
          <p className="text-sm font-medium">Latest Winners</p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {winners.map((w) => (
            <div
              key={w.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-200">
                  {w.rank === 1 ? <Crown className="h-4 w-4 text-amber-300" /> : w.rank}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{w.name}</p>
                  <p className="text-xs text-emerald-200/80">{w.match}</p>
                </div>
              </div>
              <div className="text-right text-emerald-200">₹{w.reward}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsStrip;
