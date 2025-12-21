import type { Combo } from '../types';

interface ComboCardProps {
  combo: Combo;
}

const difficultyColors = {
  Beginner: 'bg-green-900/30 text-green-400 border-green-500/50',
  Intermediate: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/50',
  Advanced: 'bg-red-900/30 text-red-400 border-red-500/50',
};

const playstyleIcons = {
  'Sword Main': '⚔️',
  'Fruit Main': '🍎',
  'Gun Main': '🔫',
  'Hybrid': '🔀',
};

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{combo.name}</h3>
          <div className="flex gap-2 flex-wrap">
            <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide border ${difficultyColors[combo.difficulty]}`}>
              {combo.difficulty}
            </span>
            <span className="px-2 py-1 rounded text-xs font-semibold bg-slate-700/50 text-slate-300 border border-slate-600/50">
              {playstyleIcons[combo.playstyle]} {combo.playstyle}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400">Damage</p>
          <p className="text-lg font-bold text-purple-400">{combo.damageEstimate}</p>
        </div>
      </div>

      {/* Notation */}
      <div className="mb-4 p-3 bg-slate-900/50 rounded border border-slate-700/50">
        <p className="text-xs text-slate-400 mb-1">Combo Notation</p>
        <code className="text-sm text-purple-300 font-mono">{combo.notation}</code>
      </div>

      {/* Steps */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-slate-300 mb-2">Steps:</h4>
        <ol className="space-y-2">
          {combo.steps.map((step, index) => (
            <li key={index} className="flex gap-3 text-sm text-slate-300">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Notes */}
      {combo.notes && (
        <div className="mb-4 p-3 bg-blue-900/10 rounded border border-blue-500/20">
          <p className="text-xs text-blue-400 mb-1 font-semibold">📝 Notes</p>
          <p className="text-sm text-slate-300">{combo.notes}</p>
        </div>
      )}

      {/* Recommended Pairings */}
      <div>
        <h4 className="text-sm font-semibold text-slate-300 mb-3">Recommended Pairings:</h4>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-xs text-slate-400 mb-1">⚔️ Swords</p>
            <div className="space-y-1">
              {combo.recommendedPairings.swords.map((sword, idx) => (
                <p key={idx} className="text-xs text-slate-300 bg-slate-700/30 px-2 py-1 rounded">
                  {sword}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">🥊 Fighting</p>
            <div className="space-y-1">
              {combo.recommendedPairings.fightingStyles.map((style, idx) => (
                <p key={idx} className="text-xs text-slate-300 bg-slate-700/30 px-2 py-1 rounded">
                  {style}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-1">🔫 Guns</p>
            <div className="space-y-1">
              {combo.recommendedPairings.guns.map((gun, idx) => (
                <p key={idx} className="text-xs text-slate-300 bg-slate-700/30 px-2 py-1 rounded">
                  {gun}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
