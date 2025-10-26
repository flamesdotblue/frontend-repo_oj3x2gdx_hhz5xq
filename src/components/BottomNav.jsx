import React from 'react';
import { Home, Wallet, Trophy, User } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'wallet', label: 'Wallet', icon: Wallet },
  { key: 'rewards', label: 'Rewards', icon: Trophy },
  { key: 'profile', label: 'Profile', icon: User },
];

const BottomNav = ({ current, onChange }) => {
  return (
    <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto w-[92%] max-w-2xl rounded-2xl border border-white/10 bg-slate-900/70 p-2 text-slate-300 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <ul className="grid grid-cols-4 gap-1">
        {tabs.map((t) => {
          const ActiveIcon = t.icon;
          const isActive = current === t.key;
          return (
            <li key={t.key}>
              <button
                onClick={() => onChange(t.key)}
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-2 py-2 text-xs transition ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-600/30 to-indigo-600/30 text-white'
                    : 'hover:bg-white/5'
                }`}
                aria-label={t.label}
              >
                <ActiveIcon className={`h-5 w-5 ${isActive ? 'text-sky-400' : 'text-slate-300'}`} />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
