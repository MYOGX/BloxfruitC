import { Link } from 'react-router-dom';
import type { Fruit } from '../types';

interface FruitCardProps {
  fruit: Fruit;
}

const typeColors = {
  Natural: 'from-emerald-500 to-green-500',
  Elemental: 'from-cyan-500 to-blue-500',
  Beast: 'from-orange-500 to-red-500',
};

export default function FruitCard({ fruit }: FruitCardProps) {
  return (
    <Link to={`/fruit/${fruit.id}`} className="block group">
      <div className="bg-[#161b22] rounded-xl overflow-hidden border-2 border-[#30363d] hover:border-[#ff6b35] transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">
        {/* Image/Header Section */}
        <div className={`relative h-48 bg-gradient-to-br ${typeColors[fruit.type]} p-6 flex items-center justify-center`}>
          <div className="text-center">
            <div className="text-8xl font-black text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] mb-3">
              {fruit.name.charAt(0)}
            </div>
            <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg border border-white/20">
              <span className="text-white text-sm font-bold tracking-wide">{fruit.type}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title and Rarity */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-white leading-tight flex-1">
              {fruit.name}
            </h3>
            <span className={`rarity-badge rarity-${fruit.rarity.toLowerCase()} flex-shrink-0`}>
              {fruit.rarity}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#8b949e] text-sm leading-relaxed line-clamp-2">
            {fruit.description}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 pt-3 border-t border-[#30363d]">
            <div className="flex items-center gap-2 text-sm font-medium text-[#ff6b35]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
              <span>{fruit.moves.length} Moves</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#00d9ff]">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span>{fruit.combos.length} Combos</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
