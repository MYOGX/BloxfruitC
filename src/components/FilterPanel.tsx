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

const rarityColors = {
  Common: 'border-rarity-common hover:bg-rarity-common/20',
  Uncommon: 'border-rarity-uncommon hover:bg-rarity-uncommon/20',
  Rare: 'border-rarity-rare hover:bg-rarity-rare/20',
  Legendary: 'border-rarity-legendary hover:bg-rarity-legendary/20',
  Mythical: 'border-rarity-mythical hover:bg-rarity-mythical/20',
};

const rarityActiveColors = {
  Common: 'bg-rarity-common/30 border-rarity-common',
  Uncommon: 'bg-rarity-uncommon/30 border-rarity-uncommon',
  Rare: 'bg-rarity-rare/30 border-rarity-rare',
  Legendary: 'bg-rarity-legendary/30 border-rarity-legendary',
  Mythical: 'bg-rarity-mythical/30 border-rarity-mythical',
};

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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Reset
          </button>
        )}
      </div>

      {/* Rarity Filter */}
      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Rarity</h3>
        <div className="space-y-2">
          {rarities.map((rarity) => {
            const isSelected = selectedRarities.includes(rarity);
            return (
              <button
                key={rarity}
                onClick={() => onRarityToggle(rarity)}
                className={`w-full px-3 py-2 rounded border text-sm font-medium text-left transition-all duration-200 ${
                  isSelected
                    ? rarityActiveColors[rarity]
                    : `border-slate-700 ${rarityColors[rarity]}`
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
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Type</h3>
        <div className="space-y-2">
          {types.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                key={type}
                onClick={() => onTypeToggle(type)}
                className={`w-full px-3 py-2 rounded border text-sm font-medium text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-purple-500/30 border-purple-500'
                    : 'border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <h3 className="text-sm font-semibold text-slate-300 mb-3">Difficulty</h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => {
            const isSelected = selectedDifficulties.includes(difficulty);
            return (
              <button
                key={difficulty}
                onClick={() => onDifficultyToggle(difficulty)}
                className={`w-full px-3 py-2 rounded border text-sm font-medium text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-500/30 border-blue-500'
                    : 'border-slate-700 hover:bg-slate-700/50'
                }`}
              >
                {difficulty}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
