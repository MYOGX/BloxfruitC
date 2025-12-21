import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/favorites', label: 'Favorites', icon: '⭐' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-r border-slate-700/50 min-h-screen p-6 flex flex-col shadow-2xl">
      {/* Logo/Title */}
      <div className="mb-10">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"></div>

          {/* Logo content */}
          <div className="relative bg-slate-900 rounded-lg px-4 py-3 border border-purple-500/30">
            <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
              BLOX FRUITS
            </h1>
            <p className="text-sm font-semibold text-purple-300 mt-0.5 tracking-wide">PVP COMBO GUIDE</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"></div>
              )}

              {/* Icon */}
              <span className={`text-2xl relative z-10 transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-110'}`}>
                {item.icon}
              </span>

              {/* Label */}
              <span className="font-bold text-base relative z-10">{item.label}</span>

              {/* Arrow for active */}
              {isActive && (
                <svg className="w-5 h-5 ml-auto relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Stats Card */}
      <div className="mb-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-4 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📊</span>
          <h3 className="text-sm font-bold text-blue-300">Quick Stats</h3>
        </div>
        <div className="space-y-1">
          <p className="text-xs text-slate-300"><span className="text-purple-400 font-bold">5</span> Fruits Available</p>
          <p className="text-xs text-slate-300"><span className="text-purple-400 font-bold">13</span> Total Combos</p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">💡</span>
          <p className="text-xs font-bold text-purple-300">PRO TIP</p>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Press <kbd className="px-2 py-1 bg-slate-700 border border-slate-600 rounded font-mono text-purple-400">/</kbd> to quickly search
        </p>
      </div>
    </aside>
  );
}

<style>{`
  @keyframes gradient {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .animate-gradient {
    animation: gradient 3s ease infinite;
  }
`}</style>
