import type { Rarity, FruitType, Difficulty } from '../types';

interface FilterPanelProps {
  selectedRarities: Rarity[];
  selectedTypes: FruitType[];
  selectedDifficulties: Difficulty[];
  onRarityToggle: (rarity: Rarity) => void;
  onTypeToggle: (type: FruitType) => void;
  onDifficultyToggle: (difficulty: Difficulty) => void;
  onReset: () => void;
}

const rarities: Rarity[] = ['Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical'];
const types: FruitType[] = ['Natural', 'Elemental', 'Beast'];
const difficulties: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

export default function FilterPanel({
  selectedRarities,
  selectedTypes,
  selectedDifficulties,
  onRarityToggle,
  onTypeToggle,
  onDifficultyToggle,
  onReset,
}: FilterPanelProps) {
  const hasActiveFilters = selectedRarities.length > 0 || selectedTypes.length > 0 || selectedDifficulties.length > 0;

  return (
    <div className="sticky top-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border-2 border-slate-700/50 p-6 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-2">
          <span className="text-2xl">🎯</span> FILTERS
        </h2>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="px-3 py-1.5 text-xs font-bold text-purple-300 hover:text-white bg-purple-900/30 hover:bg-purple-800/50 border border-purple-500/50 rounded-lg transition-all"
          >
            RESET
          </button>
        )}
      </div>

      {/* Rarity Filter */}
      <div>
        <h3 className="text-sm font-bold text-purple-300 mb-3 uppercase tracking-wide flex items-center gap-2">
          <span>✨</span> RARITY
        </h3>
        <div className="space-y-2">
          {rarities.map((rarity) => {
            const isSelected = selectedRarities.includes(rarity);
            return (
              <button
                key={rarity}
                onClick={() => onRarityToggle(rarity)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm font-bold text-left transition-all duration-200 border-2 ${
                  isSelected
                    ? `rarity-${rarity.toLowerCase()} scale-105 shadow-lg`
                    : 'border-slate-700/50 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600'
                }`}
              >
                {rarity}
              </button>
            );
          })}
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <h3 className="text-sm font-bold text-cyan-300 mb-3 uppercase tracking-wide flex items-center gap-2">
          <span>🌀</span> TYPE
        </h3>
        <div className="space-y-2">
          {types.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                key={type}
                onClick={() => onTypeToggle(type)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm font-bold text-left transition-all duration-200 border-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/30 scale-105'
                    : 'border-slate-700/50 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600'
                }`}
              >
                {type === 'Natural' && '🌿'} {type === 'Elemental' && '⚡'} {type === 'Beast' && '🦁'} {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <h3 className="text-sm font-bold text-pink-300 mb-3 uppercase tracking-wide flex items-center gap-2">
          <span>⚔️</span> DIFFICULTY
        </h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => {
            const isSelected = selectedDifficulties.includes(difficulty);
            const gradients = {
              Beginner: 'from-green-600 to-emerald-600 border-green-400 shadow-green-500/30',
              Intermediate: 'from-yellow-600 to-orange-600 border-yellow-400 shadow-yellow-500/30',
              Advanced: 'from-red-600 to-rose-600 border-red-400 shadow-red-500/30',
            };
            return (
              <button
                key={difficulty}
                onClick={() => onDifficultyToggle(difficulty)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm font-bold text-left transition-all duration-200 border-2 ${
                  isSelected
                    ? `bg-gradient-to-r ${gradients[difficulty]} text-white shadow-lg scale-105`
                    : 'border-slate-700/50 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600'
                }`}
              >
                {difficulty}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Filter Count */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-slate-700/50">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-3 border border-purple-500/30">
            <p className="text-xs text-purple-300 font-bold">
              {selectedRarities.length + selectedTypes.length + selectedDifficulties.length} filter(s) active
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
