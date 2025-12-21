import { Link } from 'react-router-dom';
import type { Fruit } from '../types';

interface FruitCardProps {
  fruit: Fruit;
}

const rarityColors = {
  Common: 'rarity-common',
  Uncommon: 'rarity-uncommon',
  Rare: 'rarity-rare',
  Legendary: 'rarity-legendary',
  Mythical: 'rarity-mythical',
};

const typeColors = {
  Natural: 'bg-green-900/30 text-green-400 border-green-500/50',
  Elemental: 'bg-blue-900/30 text-blue-400 border-blue-500/50',
  Beast: 'bg-red-900/30 text-red-400 border-red-500/50',
};

export default function FruitCard({ fruit }: FruitCardProps) {
  return (
    <Link to={`/fruit/${fruit.id}`}>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer group">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-300" />
          <span className="text-6xl font-bold text-slate-600 group-hover:text-slate-500 transition-colors duration-300">
            {fruit.name.charAt(0)}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {fruit.name}
          </h3>

          {/* Badges */}
          <div className="flex gap-2 flex-wrap">
            <span className={`rarity-badge ${rarityColors[fruit.rarity]}`}>
              {fruit.rarity}
            </span>
            <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide border ${typeColors[fruit.type]}`}>
              {fruit.type}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 line-clamp-2">
            {fruit.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-700/50">
            <span>{fruit.moves.length} Moves</span>
            <span>{fruit.combos.length} Combos</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
