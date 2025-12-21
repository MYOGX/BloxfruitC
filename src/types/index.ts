export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';
export type FruitType = 'Natural' | 'Elemental' | 'Beast';
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Playstyle = 'Sword Main' | 'Fruit Main' | 'Gun Main' | 'Hybrid';

export interface Move {
  name: string;
  key: 'Z' | 'X' | 'C' | 'V' | 'F';
  stunCapability: boolean;
  instinctBreak: boolean;
  description: string;
}

export interface RecommendedPairings {
  swords: string[];
  fightingStyles: string[];
  guns: string[];
}

export interface Combo {
  id: string;
  name: string;
  difficulty: Difficulty;
  playstyle: Playstyle;
  steps: string[];
  notation: string;
  damageEstimate: string;
  notes: string;
  recommendedPairings: RecommendedPairings;
}

export interface Fruit {
  id: string;
  name: string;
  rarity: Rarity;
  type: FruitType;
  imageUrl: string;
  description: string;
  moves: Move[];
  combos: Combo[];
}
