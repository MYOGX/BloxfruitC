import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/favorites', label: 'Favorites', icon: '⭐' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <aside className="w-64 bg-[#0d1117] border-r-2 border-[#30363d] min-h-screen p-6 flex flex-col">
      {/* Logo/Title */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-white mb-1 tracking-tight">
          BLOX FRUITS
        </h1>
        <p className="text-[#ff6b35] text-sm font-bold tracking-wide">COMBO GUIDE</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium ${
                isActive
                  ? 'bg-[#ff6b35] text-white'
                  : 'text-[#8b949e] hover:text-white hover:bg-[#161b22]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Stats Card */}
      <div className="mb-6 bg-[#161b22] rounded-lg p-4 border-2 border-[#30363d]">
        <h3 className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-3">Stats</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#8b949e]">Fruits</span>
            <span className="text-white font-bold">5</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#8b949e]">Combos</span>
            <span className="text-white font-bold">13</span>
          </div>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="bg-[#161b22] rounded-lg p-4 border-2 border-[#30363d]">
        <h3 className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-2">💡 Pro Tip</h3>
        <p className="text-xs text-[#8b949e] leading-relaxed">
          Press <kbd className="px-2 py-1 bg-[#0d1117] border border-[#30363d] rounded text-[#ff6b35] font-mono font-bold">/</kbd> to search
        </p>
      </div>
    </aside>
  );
}
