import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Fruit } from '../types';
import fruitsData from '../data/fruits.json';

const fruits: Fruit[] = fruitsData as Fruit[];
const totalFruits = fruits.length;
const totalCombos = fruits.reduce((sum, fruit) => sum + fruit.combos.length, 0);

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/build-finder', label: 'Build Finder', icon: '🔧' },
    { path: '/favorites', label: 'Favorites', icon: '⭐' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#ff6b35] text-white p-3 rounded-lg shadow-lg active:scale-95 transition-transform"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-[#0d1117] border-r-2 border-[#30363d] min-h-screen p-4 sm:p-6 flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo/Title */}
        <div className="mb-6 sm:mb-10 mt-12 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
            BLOX FRUITS
          </h1>
          <p className="text-[#ff6b35] text-xs sm:text-sm font-bold tracking-wide">COMBO GUIDE</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-4 py-4 rounded-lg transition-all font-medium text-base ${
                  isActive
                    ? 'bg-[#ff6b35] text-white'
                    : 'text-[#8b949e] hover:text-white hover:bg-[#161b22] active:bg-[#161b22]'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Stats Card */}
        <div className="mb-4 sm:mb-6 bg-[#161b22] rounded-lg p-4 border-2 border-[#30363d]">
          <h3 className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-3">Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#8b949e]">Fruits</span>
              <span className="text-white font-bold">{totalFruits}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8b949e]">Combos</span>
              <span className="text-white font-bold">{totalCombos}</span>
            </div>
          </div>
        </div>

        {/* Pro Tip - Hidden on small mobile */}
        <div className="hidden sm:block bg-[#161b22] rounded-lg p-4 border-2 border-[#30363d]">
          <h3 className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-2">💡 Pro Tip</h3>
          <p className="text-xs text-[#8b949e] leading-relaxed">
            Press <kbd className="px-2 py-1 bg-[#0d1117] border border-[#30363d] rounded text-[#ff6b35] font-mono font-bold">/</kbd> to search
          </p>
        </div>
      </aside>
    </>
  );
}
