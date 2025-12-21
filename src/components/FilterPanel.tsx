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
    <div className="sticky top-8 bg-[#161b22] rounded-xl border-2 border-[#30363d] p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-white uppercase tracking-wide">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#ff6b35] hover:bg-[#ff8555] rounded-lg transition-colors"
          >
            RESET
          </button>
        )}
      </div>

      {/* Rarity Filter */}
      <div>
        <h3 className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-3">Rarity</h3>
        <div className="space-y-2">
          {rarities.map((rarity) => {
            const isSelected = selectedRarities.includes(rarity);
            return (
              <button
                key={rarity}
                onClick={() => onRarityToggle(rarity)}
                className={`w-full px-4 py-2.5 rounded-lg text-sm font-bold text-left transition-all border-2 ${
                  isSelected
                    ? `rarity-${rarity.toLowerCase()}`
                    : 'border-[#30363d] bg-[#0d1117] text-[#8b949e] hover:bg-[#161b22] hover:text-white'
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
        <h3 className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-3">Type</h3>
        <div className="space-y-2">
          {types.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                key={type}
                onClick={() => onTypeToggle(type)}
                className={`w-full px-4 py-2.5 rounded-lg text-sm font-bold text-left transition-all border-2 ${
                  isSelected
                    ? 'bg-[#00d9ff] border-[#00d9ff] text-white'
                    : 'border-[#30363d] bg-[#0d1117] text-[#8b949e] hover:bg-[#161b22] hover:text-white'
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
        <h3 className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-3">Difficulty</h3>
        <div className="space-y-2">
          {difficulties.map((difficulty) => {
            const isSelected = selectedDifficulties.includes(difficulty);
            const colors = {
              Beginner: 'bg-emerald-600 border-emerald-500',
              Intermediate: 'bg-yellow-600 border-yellow-500',
              Advanced: 'bg-red-600 border-red-500',
            };
            return (
              <button
                key={difficulty}
                onClick={() => onDifficultyToggle(difficulty)}
                className={`w-full px-4 py-2.5 rounded-lg text-sm font-bold text-left transition-all border-2 ${
                  isSelected
                    ? `${colors[difficulty]} text-white`
                    : 'border-[#30363d] bg-[#0d1117] text-[#8b949e] hover:bg-[#161b22] hover:text-white'
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
        <div className="pt-4 border-t-2 border-[#30363d]">
          <p className="text-xs text-[#8b949e] font-medium">
            {selectedRarities.length + selectedTypes.length + selectedDifficulties.length} filter(s) active
          </p>
        </div>
      )}
    </div>
  );
}
