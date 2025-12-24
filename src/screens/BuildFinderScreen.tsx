import { useState, useMemo } from 'react';
import ComboCard from '../components/ComboCard';
import type { Fruit } from '../types';
import fruitsData from '../data/fruits.json';

const fruits: Fruit[] = fruitsData as Fruit[];

// Extract unique items from all combos
const allSwords = Array.from(new Set(fruits.flatMap(f => f.combos.flatMap(c => c.recommendedPairings.swords)))).sort();
const allFightingStyles = Array.from(new Set(fruits.flatMap(f => f.combos.flatMap(c => c.recommendedPairings.fightingStyles)))).sort();
const allGuns = Array.from(new Set(fruits.flatMap(f => f.combos.flatMap(c => c.recommendedPairings.guns)))).sort();

export default function BuildFinderScreen() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);
  const [selectedSwords, setSelectedSwords] = useState<string[]>([]);
  const [selectedFightingStyles, setSelectedFightingStyles] = useState<string[]>([]);
  const [selectedGuns, setSelectedGuns] = useState<string[]>([]);

  // Toggle selection handlers
  const toggleFruit = (fruitId: string) => {
    setSelectedFruits(prev =>
      prev.includes(fruitId) ? prev.filter(id => id !== fruitId) : [...prev, fruitId]
    );
  };

  const toggleSword = (sword: string) => {
    setSelectedSwords(prev =>
      prev.includes(sword) ? prev.filter(s => s !== sword) : [...prev, sword]
    );
  };

  const toggleFightingStyle = (style: string) => {
    setSelectedFightingStyles(prev =>
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  const toggleGun = (gun: string) => {
    setSelectedGuns(prev =>
      prev.includes(gun) ? prev.filter(g => g !== gun) : [...prev, gun]
    );
  };

  const matchingCombos = useMemo(() => {
    const results: Array<{ fruit: Fruit; combo: typeof fruits[0]['combos'][0] }> = [];

    fruits.forEach(fruit => {
      fruit.combos.forEach(combo => {
        const matches = {
          fruit: selectedFruits.length === 0 || selectedFruits.includes(fruit.id),
          sword: selectedSwords.length === 0 || selectedSwords.some(sword => combo.recommendedPairings.swords.includes(sword)),
          fighting: selectedFightingStyles.length === 0 || selectedFightingStyles.some(style => combo.recommendedPairings.fightingStyles.includes(style)),
          gun: selectedGuns.length === 0 || selectedGuns.some(gun => combo.recommendedPairings.guns.includes(gun)),
        };

        if (matches.fruit && matches.sword && matches.fighting && matches.gun) {
          results.push({ fruit, combo });
        }
      });
    });

    return results;
  }, [selectedFruits, selectedSwords, selectedFightingStyles, selectedGuns]);

  const hasSelections = selectedFruits.length > 0 || selectedSwords.length > 0 || selectedFightingStyles.length > 0 || selectedGuns.length > 0;

  const resetSelections = () => {
    setSelectedFruits([]);
    setSelectedSwords([]);
    setSelectedFightingStyles([]);
    setSelectedGuns([]);
  };

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-10 pt-16 lg:pt-10">
      {/* Header */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight leading-tight">
          Build Finder
        </h1>
        <p className="text-base sm:text-lg text-[#8b949e] font-medium">
          Select items to see available combos based on your selections
        </p>
      </div>

      {/* Equipment Selector */}
      <div className="mb-6 sm:mb-8 lg:mb-10 bg-[#161b22] rounded-xl border-2 border-[#30363d] p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-white">Your Equipment</h2>
          {hasSelections && (
            <button
              onClick={resetSelections}
              className="px-5 py-3 text-sm sm:text-base font-bold text-white bg-[#ff6b35] hover:bg-[#ff8555] active:bg-[#ff4515] rounded-lg transition-colors w-full sm:w-auto"
            >
              Reset All
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fruit Selection */}
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              🍎 Your Fruits {selectedFruits.length > 0 && `(${selectedFruits.length})`}
            </label>
            <div className="border-2 border-[#30363d] rounded-lg bg-[#0d1117] max-h-64 overflow-y-auto">
              {fruits.map(fruit => (
                <label
                  key={fruit.id}
                  className="flex items-center px-4 py-3.5 sm:py-4 hover:bg-[#161b22] active:bg-[#161b22] cursor-pointer border-b border-[#30363d] last:border-b-0 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedFruits.includes(fruit.id)}
                    onChange={() => toggleFruit(fruit.id)}
                    className="w-5 h-5 sm:w-4 sm:h-4 text-[#ff6b35] bg-[#0d1117] border-[#30363d] rounded focus:ring-[#ff6b35] focus:ring-2"
                  />
                  <span className="ml-3 text-white font-medium text-base sm:text-sm">{fruit.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sword Selection */}
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              ⚔️ Your Swords {selectedSwords.length > 0 && `(${selectedSwords.length})`}
            </label>
            <div className="border-2 border-[#30363d] rounded-lg bg-[#0d1117] max-h-64 overflow-y-auto">
              {allSwords.map(sword => (
                <label
                  key={sword}
                  className="flex items-center px-4 py-3.5 sm:py-4 hover:bg-[#161b22] active:bg-[#161b22] cursor-pointer border-b border-[#30363d] last:border-b-0 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedSwords.includes(sword)}
                    onChange={() => toggleSword(sword)}
                    className="w-5 h-5 sm:w-4 sm:h-4 text-[#ff6b35] bg-[#0d1117] border-[#30363d] rounded focus:ring-[#ff6b35] focus:ring-2"
                  />
                  <span className="ml-3 text-white font-medium text-base sm:text-sm">{sword}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Fighting Style Selection */}
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              🥊 Fighting Styles {selectedFightingStyles.length > 0 && `(${selectedFightingStyles.length})`}
            </label>
            <div className="border-2 border-[#30363d] rounded-lg bg-[#0d1117] max-h-64 overflow-y-auto">
              {allFightingStyles.map(style => (
                <label
                  key={style}
                  className="flex items-center px-4 py-3.5 sm:py-4 hover:bg-[#161b22] active:bg-[#161b22] cursor-pointer border-b border-[#30363d] last:border-b-0 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedFightingStyles.includes(style)}
                    onChange={() => toggleFightingStyle(style)}
                    className="w-5 h-5 sm:w-4 sm:h-4 text-[#ff6b35] bg-[#0d1117] border-[#30363d] rounded focus:ring-[#ff6b35] focus:ring-2"
                  />
                  <span className="ml-3 text-white font-medium text-base sm:text-sm">{style}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Gun Selection */}
          <div>
            <label className="block text-sm sm:text-base font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              🔫 Your Guns {selectedGuns.length > 0 && `(${selectedGuns.length})`}
            </label>
            <div className="border-2 border-[#30363d] rounded-lg bg-[#0d1117] max-h-64 overflow-y-auto">
              {allGuns.map(gun => (
                <label
                  key={gun}
                  className="flex items-center px-4 py-3.5 sm:py-4 hover:bg-[#161b22] active:bg-[#161b22] cursor-pointer border-b border-[#30363d] last:border-b-0 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedGuns.includes(gun)}
                    onChange={() => toggleGun(gun)}
                    className="w-5 h-5 sm:w-4 sm:h-4 text-[#ff6b35] bg-[#0d1117] border-[#30363d] rounded focus:ring-[#ff6b35] focus:ring-2"
                  />
                  <span className="ml-3 text-white font-medium text-base sm:text-sm">{gun}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {hasSelections ? 'Matching Combos' : 'All Available Combos'}
            <span className="ml-2 sm:ml-3 text-[#ff6b35]">({matchingCombos.length})</span>
          </h2>
        </div>

        {matchingCombos.length > 0 ? (
          <div className="space-y-4 sm:space-y-6">
            {matchingCombos.map(({ fruit, combo }, idx) => (
              <div key={`${fruit.id}-${combo.id}-${idx}`}>
                {/* Fruit Label */}
                <div className="mb-3 flex items-center gap-2 sm:gap-3">
                  <span className={`rarity-badge rarity-${fruit.rarity.toLowerCase()} text-xs sm:text-sm`}>
                    {fruit.rarity}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{fruit.name}</h3>
                </div>
                <ComboCard combo={combo} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-20 bg-[#161b22] rounded-xl border-2 border-[#30363d]">
            <div className="text-5xl sm:text-6xl mb-4">🔍</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No Combos Found</h3>
            <p className="text-sm sm:text-base text-[#8b949e] px-4">
              Try selecting different equipment or reset your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
