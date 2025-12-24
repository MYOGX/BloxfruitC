import { useState, useMemo } from 'react';
import FruitCard from '../components/FruitCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import type { Fruit, Rarity, FruitType, Difficulty } from '../types';
import fruitsData from '../data/fruits.json';

const fruits: Fruit[] = fruitsData as Fruit[];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarities, setSelectedRarities] = useState<Rarity[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<FruitType[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<Difficulty[]>([]);

  const filteredFruits = useMemo(() => {
    return fruits.filter((fruit) => {
      // Search filter
      const matchesSearch = fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fruit.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Rarity filter
      const matchesRarity = selectedRarities.length === 0 || selectedRarities.includes(fruit.rarity);

      // Type filter
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(fruit.type);

      // Difficulty filter (check if fruit has combos with selected difficulties)
      const matchesDifficulty = selectedDifficulties.length === 0 ||
                               fruit.combos.some(combo => selectedDifficulties.includes(combo.difficulty));

      return matchesSearch && matchesRarity && matchesType && matchesDifficulty;
    });
  }, [searchQuery, selectedRarities, selectedTypes, selectedDifficulties]);

  const handleRarityToggle = (rarity: Rarity) => {
    setSelectedRarities(prev =>
      prev.includes(rarity) ? prev.filter(r => r !== rarity) : [...prev, rarity]
    );
  };

  const handleTypeToggle = (type: FruitType) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleDifficultyToggle = (difficulty: Difficulty) => {
    setSelectedDifficulties(prev =>
      prev.includes(difficulty) ? prev.filter(d => d !== difficulty) : [...prev, difficulty]
    );
  };

  const handleResetFilters = () => {
    setSelectedRarities([]);
    setSelectedTypes([]);
    setSelectedDifficulties([]);
  };

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-10 pt-16 lg:pt-10">
      {/* Header */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight leading-tight">
          Discover Your Perfect Combo
        </h1>
        <p className="text-base sm:text-lg text-[#8b949e] font-medium">
          Browse <span className="text-[#ff6b35] font-bold">{fruits.length}</span> fruits with
          <span className="text-[#ff6b35] font-bold"> {fruits.reduce((acc, f) => acc + f.combos.length, 0)}</span> deadly PvP combos
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4 sm:mb-6">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search fruits by name or description..."
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Filters Sidebar - Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterPanel
            selectedRarities={selectedRarities}
            selectedTypes={selectedTypes}
            selectedDifficulties={selectedDifficulties}
            onRarityToggle={handleRarityToggle}
            onTypeToggle={handleTypeToggle}
            onDifficultyToggle={handleDifficultyToggle}
            onReset={handleResetFilters}
          />
        </div>

        {/* Fruits Grid */}
        <div className="flex-1">
          {filteredFruits.length > 0 ? (
            <>
              <div className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-400">
                Showing {filteredFruits.length} {filteredFruits.length === 1 ? 'fruit' : 'fruits'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredFruits.map((fruit) => (
                  <FruitCard key={fruit.id} fruit={fruit} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="text-5xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No fruits found</h3>
              <p className="text-sm sm:text-base text-slate-400">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
