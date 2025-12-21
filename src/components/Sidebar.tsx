import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/favorites', label: 'Favorites', icon: '⭐' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
  ];

  return (
    <aside className="w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700/50 min-h-screen p-6">
      {/* Logo/Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Blox Fruits
        </h1>
        <p className="text-sm text-slate-400 mt-1">Combo Guide</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="mt-auto pt-8">
        <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-700/50">
          <p className="text-xs text-slate-400 mb-2">💡 Pro Tip</p>
          <p className="text-xs text-slate-300">
            Press <kbd className="px-1.5 py-0.5 bg-slate-600/50 rounded text-xs">/</kbd> to quickly search fruits
          </p>
        </div>
      </div>
    </aside>
  );
}
