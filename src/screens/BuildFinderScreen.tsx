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
  const [selectedFruit, setSelectedFruit] = useState<string>('');
  const [selectedSword, setSelectedSword] = useState<string>('');
  const [selectedFightingStyle, setSelectedFightingStyle] = useState<string>('');
  const [selectedGun, setSelectedGun] = useState<string>('');

  const matchingCombos = useMemo(() => {
    const results: Array<{ fruit: Fruit; combo: typeof fruits[0]['combos'][0] }> = [];

    fruits.forEach(fruit => {
      fruit.combos.forEach(combo => {
        const matches = {
          fruit: !selectedFruit || fruit.id === selectedFruit,
          sword: !selectedSword || combo.recommendedPairings.swords.includes(selectedSword),
          fighting: !selectedFightingStyle || combo.recommendedPairings.fightingStyles.includes(selectedFightingStyle),
          gun: !selectedGun || combo.recommendedPairings.guns.includes(selectedGun),
        };

        if (matches.fruit && matches.sword && matches.fighting && matches.gun) {
          results.push({ fruit, combo });
        }
      });
    });

    return results;
  }, [selectedFruit, selectedSword, selectedFightingStyle, selectedGun]);

  const hasSelections = selectedFruit || selectedSword || selectedFightingStyle || selectedGun;

  const resetSelections = () => {
    setSelectedFruit('');
    setSelectedSword('');
    setSelectedFightingStyle('');
    setSelectedGun('');
  };

  return (
    <div className="flex-1 p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
          Build Finder
        </h1>
        <p className="text-lg text-[#8b949e] font-medium">
          Select your equipment to find the best combos for your build
        </p>
      </div>

      {/* Equipment Selector */}
      <div className="mb-10 bg-[#161b22] rounded-xl border-2 border-[#30363d] p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white">Your Equipment</h2>
          {hasSelections && (
            <button
              onClick={resetSelections}
              className="px-4 py-2 text-sm font-bold text-white bg-[#ff6b35] hover:bg-[#ff8555] rounded-lg transition-colors"
            >
              Reset All
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fruit Selection */}
          <div>
            <label className="block text-sm font-bold text-[#8b949e] uppercase tracking-wide mb-3">
              🍎 Your Fruit
            </label>
            <select
              value={selectedFruit}
              onChange={(e) => setSelectedFruit(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#30363d] rounded-lg bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent transition-all font-medium"
            >
              <option value="">Any Fruit</option>
              {fruits.map(fruit => (
                <option key={fruit.id} value={fruit.id}>{fruit.name}</option>
              ))}
            </select>
          </div>

          {/* Sword Selection */}
          <div>
            <label className="block text-sm font-bold text-[#8b949e] uppercase tracking-wide mb-3">
              ⚔️ Your Sword
            </label>
            <select
              value={selectedSword}
              onChange={(e) => setSelectedSword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#30363d] rounded-lg bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent transition-all font-medium"
            >
              <option value="">Any Sword</option>
              {allSwords.map(sword => (
                <option key={sword} value={sword}>{sword}</option>
              ))}
            </select>
          </div>

          {/* Fighting Style Selection */}
          <div>
            <label className="block text-sm font-bold text-[#8b949e] uppercase tracking-wide mb-3">
              🥊 Fighting Style
            </label>
            <select
              value={selectedFightingStyle}
              onChange={(e) => setSelectedFightingStyle(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#30363d] rounded-lg bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent transition-all font-medium"
            >
              <option value="">Any Fighting Style</option>
              {allFightingStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          {/* Gun Selection */}
          <div>
            <label className="block text-sm font-bold text-[#8b949e] uppercase tracking-wide mb-3">
              🔫 Your Gun
            </label>
            <select
              value={selectedGun}
              onChange={(e) => setSelectedGun(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#30363d] rounded-lg bg-[#0d1117] text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent transition-all font-medium"
            >
              <option value="">Any Gun</option>
              {allGuns.map(gun => (
                <option key={gun} value={gun}>{gun}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-white">
            {hasSelections ? 'Matching Combos' : 'All Available Combos'}
            <span className="ml-3 text-[#ff6b35]">({matchingCombos.length})</span>
          </h2>
        </div>

        {matchingCombos.length > 0 ? (
          <div className="space-y-6">
            {matchingCombos.map(({ fruit, combo }, idx) => (
              <div key={`${fruit.id}-${combo.id}-${idx}`}>
                {/* Fruit Label */}
                <div className="mb-3 flex items-center gap-3">
                  <span className={`rarity-badge rarity-${fruit.rarity.toLowerCase()}`}>
                    {fruit.rarity}
                  </span>
                  <h3 className="text-xl font-bold text-white">{fruit.name}</h3>
                </div>
                <ComboCard combo={combo} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#161b22] rounded-xl border-2 border-[#30363d]">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Combos Found</h3>
            <p className="text-[#8b949e]">
              Try selecting different equipment or reset your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
