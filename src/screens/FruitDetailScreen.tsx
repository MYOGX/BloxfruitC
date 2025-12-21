import { useParams, Link } from 'react-router-dom';
import ComboCard from '../components/ComboCard';
import type { Fruit } from '../types';
import fruitsData from '../data/fruits.json';

const fruits: Fruit[] = fruitsData as Fruit[];

const rarityColors = {
  Common: 'from-rarity-common to-rarity-common/50',
  Uncommon: 'from-rarity-uncommon to-rarity-uncommon/50',
  Rare: 'from-rarity-rare to-rarity-rare/50',
  Legendary: 'from-rarity-legendary to-rarity-legendary/50',
  Mythical: 'from-rarity-mythical to-rarity-mythical/50',
};

const typeColors = {
  Natural: 'bg-green-900/30 text-green-400 border-green-500/50',
  Elemental: 'bg-blue-900/30 text-blue-400 border-blue-500/50',
  Beast: 'bg-red-900/30 text-red-400 border-red-500/50',
};

export default function FruitDetailScreen() {
  const { fruitId } = useParams<{ fruitId: string }>();
  const fruit = fruits.find(f => f.id === fruitId);

  if (!fruit) {
    return (
      <div className="flex-1 p-8">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">❌</div>
          <h3 className="text-xl font-semibold text-white mb-2">Fruit not found</h3>
          <p className="text-slate-400 mb-6">
            The fruit you're looking for doesn't exist
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Fruits
      </Link>

      {/* Fruit Header */}
      <div className={`bg-gradient-to-r ${rarityColors[fruit.rarity]} rounded-lg p-8 mb-8 border border-${fruit.rarity.toLowerCase()}/30`}>
        <div className="flex items-start gap-6">
          {/* Fruit Icon */}
          <div className="w-32 h-32 bg-slate-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-6xl font-bold text-white">
              {fruit.name.charAt(0)}
            </span>
          </div>

          {/* Fruit Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{fruit.name}</h1>
                <div className="flex gap-2">
                  <span className={`rarity-badge rarity-${fruit.rarity.toLowerCase()}`}>
                    {fruit.rarity}
                  </span>
                  <span className={`px-3 py-1 rounded text-sm font-semibold uppercase tracking-wide border ${typeColors[fruit.type]}`}>
                    {fruit.type}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-lg text-white/90">{fruit.description}</p>
          </div>
        </div>
      </div>

      {/* Moves Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Moves</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fruit.moves.map((move) => (
            <div
              key={move.key}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-3 py-1.5 bg-slate-900 border border-slate-600 rounded text-lg font-bold text-purple-400">
                  {move.key}
                </kbd>
                <h3 className="text-lg font-semibold text-white">{move.name}</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">{move.description}</p>
              <div className="flex gap-2">
                {move.stunCapability && (
                  <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 border border-yellow-500/50 rounded text-xs font-semibold">
                    Stun
                  </span>
                )}
                {move.instinctBreak && (
                  <span className="px-2 py-1 bg-red-900/30 text-red-400 border border-red-500/50 rounded text-xs font-semibold">
                    Breaks Instinct
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Combos Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">
          PvP Combos ({fruit.combos.length})
        </h2>
        <div className="space-y-6">
          {fruit.combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>
      </div>
    </div>
  );
}
