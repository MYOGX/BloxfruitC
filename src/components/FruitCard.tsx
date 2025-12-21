import { Link } from 'react-router-dom';
import type { Fruit } from '../types';

interface FruitCardProps {
  fruit: Fruit;
}

const typeColors = {
  Natural: 'from-emerald-500 to-green-600',
  Elemental: 'from-cyan-500 to-blue-600',
  Beast: 'from-rose-500 to-red-600',
};

const typeIcons = {
  Natural: '🌿',
  Elemental: '⚡',
  Beast: '🦁',
};

export default function FruitCard({ fruit }: FruitCardProps) {
  return (
    <Link to={`/fruit/${fruit.id}`} className="block group">
      <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl overflow-hidden border-2 border-slate-700/50 hover:border-purple-500/80 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />

        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${typeColors[fruit.type]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Image placeholder with gradient */}
        <div className={`relative h-52 bg-gradient-to-br ${typeColors[fruit.type]} flex items-center justify-center overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
          </div>

          {/* Large letter */}
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">
              {fruit.name.charAt(0)}
            </span>
            <div className="mt-2 px-4 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white text-sm font-bold">{typeIcons[fruit.type]} {fruit.type}</span>
            </div>
          </div>

          {/* Corner glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="relative p-5 space-y-4">
          {/* Title with rarity badge */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
              {fruit.name}
            </h3>
            <span className={`rarity-badge rarity-${fruit.rarity.toLowerCase()} flex-shrink-0`}>
              {fruit.rarity}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-2 group-hover:text-white transition-colors duration-300">
            {fruit.description}
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5 text-purple-400 font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                <span>{fruit.moves.length} Moves</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span>{fruit.combos.length} Combos</span>
              </div>
            </div>

            {/* Arrow indicator */}
            <div className="flex items-center text-purple-400 group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
