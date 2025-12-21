export default function AboutScreen() {
  return (
    <div className="flex-1 p-8">
      <h1 className="text-4xl font-bold text-white mb-6">About</h1>

      <div className="space-y-6">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Blox Fruits Combo Guide</h2>
          <p className="text-slate-300 mb-4">
            Welcome to the ultimate Blox Fruits PvP Combo Guide! This application helps both beginners
            and advanced players master PvP combat by providing detailed combo guides for each fruit
            in the Roblox game Blox Fruits.
          </p>
          <p className="text-slate-300">
            Each fruit includes detailed move descriptions, multiple combo variations for different
            playstyles, and recommended weapon pairings to maximize your effectiveness in battle.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Features</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>Comprehensive combo guides for all major fruits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>Difficulty ratings from Beginner to Advanced</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>Playstyle variations (Sword Main, Fruit Main, Gun Main, Hybrid)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>Recommended weapon and fighting style pairings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>Damage estimates for each combo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>Keyboard shortcuts for power users (press "/" to search)</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-4">How to Use</h3>
          <ol className="space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>Browse fruits on the home page or use the search bar (press "/" for quick access)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>Filter by rarity, type, or combo difficulty to find fruits that match your needs</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>Click on a fruit to view its detailed moves and combo guides</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>Practice the combos in-game and adjust based on your playstyle</span>
            </li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg border border-purple-500/30 p-6">
          <h3 className="text-xl font-bold text-white mb-2">💡 Pro Tip</h3>
          <p className="text-slate-300">
            Start with Beginner difficulty combos to learn the basics, then progress to Intermediate
            and Advanced combos as you improve. Remember that timing and positioning are just as
            important as knowing the combo notation!
          </p>
        </div>
      </div>
    </div>
  );
}
