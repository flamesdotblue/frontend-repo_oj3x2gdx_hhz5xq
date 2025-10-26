import React from 'react';
import { Clock, Coins, Trophy } from 'lucide-react';

const sampleTournaments = [
  {
    id: 't1',
    title: 'Battle Royale — Neon Night',
    startsAt: 'Today 7:30 PM',
    entryFee: 50,
    prize: 1000,
    banner:
      'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 't2',
    title: 'Squad Clash — Blue Storm',
    startsAt: 'Today 9:00 PM',
    entryFee: 30,
    prize: 600,
    banner:
      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 't3',
    title: 'Solo Snipers — Ice Field',
    startsAt: 'Tomorrow 5:00 PM',
    entryFee: 20,
    prize: 300,
    banner:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
  },
];

const MatchCard = ({ item, onJoin }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 shadow-xl backdrop-blur">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={item.banner}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/0 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/50 px-2 py-1 text-[11px] text-slate-200 backdrop-blur">
          <Clock className="h-3.5 w-3.5 text-sky-400" /> {item.startsAt}
        </div>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-white">{item.title}</h3>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-sky-200">
            <Coins className="h-4 w-4 text-amber-300" /> Entry ₹{item.entryFee}
          </div>
          <div className="inline-flex items-center justify-end gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-emerald-200">
            <Trophy className="h-4 w-4 text-emerald-300" /> Prize ₹{item.prize}
          </div>
        </div>

        <button
          onClick={() => onJoin(item)}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-sky-600/30 transition hover:brightness-110"
        >
          Join Match
        </button>
      </div>
    </div>
  );
};

const TournamentList = ({ onJoin }) => {
  return (
    <section className="mx-auto -mt-8 max-w-5xl px-4 pb-32 sm:px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white/90">Upcoming Tournaments</h2>
        <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 hover:bg-white/10">
          View all
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleTournaments.map((t) => (
          <MatchCard key={t.id} item={t} onJoin={onJoin} />
        ))}
      </div>
    </section>
  );
};

export default TournamentList;
