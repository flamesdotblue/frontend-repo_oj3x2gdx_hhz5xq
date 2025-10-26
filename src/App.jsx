import React, { useState } from 'react';
import HeroCover from './components/HeroCover';
import TournamentList from './components/TournamentList';
import BottomNav from './components/BottomNav';
import RewardsStrip from './components/RewardsStrip';
import { Wallet, Bell, User } from 'lucide-react';

const SectionCard = ({ title, icon: Icon, children, accent = 'from-sky-600/20 to-indigo-600/20' }) => (
  <section className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
    <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${accent} p-5 text-slate-200`}> 
      <div className="mb-3 flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-sky-300" />}
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  const [tab, setTab] = useState('home');

  const handleJoin = (match) => {
    alert(`Join request for: ${match.title}\nEntry: ₹${match.entryFee}\nPrize: ₹${match.prize}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Home */}
      {tab === 'home' && (
        <>
          <HeroCover />
          <RewardsStrip />
          <TournamentList onJoin={handleJoin} />
        </>
      )}

      {/* Wallet */}
      {tab === 'wallet' && (
        <>
          <HeroCover />
          <SectionCard title="Wallet Balance" icon={Wallet}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-300">Available</p>
                <p className="mt-1 text-2xl font-bold text-white">₹1,250</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-300">Pending</p>
                <p className="mt-1 text-2xl font-bold text-white">₹200</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-300">Lifetime Earned</p>
                <p className="mt-1 text-2xl font-bold text-white">₹7,940</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 hover:brightness-110">Add Balance</button>
              <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Withdraw</button>
            </div>
          </SectionCard>
          <SectionCard title="Recent Transactions" accent="from-emerald-600/20 to-teal-600/20">
            <ul className="divide-y divide-white/10">
              {[
                { id: 1, type: 'Entry Fee', amount: -50, time: 'Today, 6:10 PM' },
                { id: 2, type: 'Reward — Neon Night', amount: 300, time: 'Yesterday, 9:22 PM' },
                { id: 3, type: 'Add Balance — UPI', amount: 500, time: 'Yesterday, 5:01 PM' },
              ].map((t) => (
                <li key={t.id} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-slate-300">{t.type}</span>
                  <span className={t.amount > 0 ? 'text-emerald-300' : 'text-rose-300'}>
                    {t.amount > 0 ? '+' : ''}₹{t.amount}
                  </span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </>
      )}

      {/* Rewards */}
      {tab === 'rewards' && (
        <>
          <HeroCover />
          <SectionCard title="Top Winners" icon={Bell} accent="from-amber-600/20 to-pink-600/20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Player #{i}</p>
                  <p className="text-xs text-slate-300">Neon Night — Rank {i}</p>
                  <p className="mt-2 text-sm text-emerald-300">Reward: ₹{(7 - i) * 100}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </>
      )}

      {/* Profile */}
      {tab === 'profile' && (
        <>
          <HeroCover />
          <SectionCard title="Profile" icon={User}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-300">Player</p>
                <p className="mt-1 text-lg font-semibold text-white">WinZone Warrior</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-300">UID</p>
                <p className="mt-1 text-lg font-semibold text-white">FF-928361</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-xs text-slate-300">Matches / Wins</p>
                <p className="mt-1 text-lg font-semibold text-white">142 / 37</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Edit Profile</button>
              <button className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-200 hover:bg-rose-500/20">Logout</button>
            </div>
          </SectionCard>
        </>
      )}

      <BottomNav current={tab} onChange={setTab} />
    </div>
  );
}
