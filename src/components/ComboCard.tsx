import type { Combo } from '../types';

interface ComboCardProps {
  combo: Combo;
}

const difficultyColors = {
  Beginner: 'from-green-600 to-emerald-700 border-green-400 shadow-green-500/30',
  Intermediate: 'from-yellow-600 to-orange-600 border-yellow-400 shadow-yellow-500/30',
  Advanced: 'from-red-600 to-rose-700 border-red-400 shadow-red-500/30',
};

const playstyleIcons = {
  'Sword Main': '⚔️',
  'Fruit Main': '🍎',
  'Gun Main': '🔫',
  'Hybrid': '🔀',
};

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border-2 border-slate-700/50 p-6 hover:border-purple-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-500 pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-5 gap-4">
        <div className="flex-1">
          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors">{combo.name}</h3>
          <div className="flex gap-2 flex-wrap">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide bg-gradient-to-r ${difficultyColors[combo.difficulty]} text-white border-2 shadow-lg`}>
              {combo.difficulty}
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-slate-600 to-slate-700 text-white border-2 border-slate-400">
              {playstyleIcons[combo.playstyle]} {combo.playstyle}
            </span>
          </div>
        </div>

        {/* Damage Badge */}
        <div className="flex-shrink-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl px-4 py-3 text-center border-2 border-purple-400 shadow-lg shadow-purple-500/40">
          <p className="text-xs text-purple-100 font-bold mb-1">💥 DAMAGE</p>
          <p className="text-xl font-black text-white">{combo.damageEstimate}</p>
        </div>
      </div>

      {/* Notation - Make it POP */}
      <div className="relative mb-5 p-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl border-2 border-purple-500/50 shadow-lg">
        <div className="absolute -top-3 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-2 border-purple-400">
          <p className="text-xs text-white font-bold">⚡ COMBO NOTATION</p>
        </div>
        <code className="text-base text-purple-300 font-mono font-bold mt-2 block">{combo.notation}</code>
      </div>

      {/* Steps - Enhanced */}
      <div className="mb-5">
        <h4 className="text-sm font-bold text-purple-300 mb-3 uppercase tracking-wide flex items-center gap-2">
          <span className="text-lg">📋</span> COMBO STEPS
        </h4>
        <ol className="space-y-2">
          {combo.steps.map((step, index) => (
            <li key={index} className="flex gap-3 items-start group/step">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center text-xs font-black shadow-lg border-2 border-purple-400 group-hover/step:scale-110 transition-transform">
                {index + 1}
              </span>
              <span className="text-sm text-slate-200 leading-relaxed pt-0.5 group-hover/step:text-white transition-colors">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Notes */}
      {combo.notes && (
        <div className="mb-5 p-4 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-xl border-2 border-blue-500/50">
          <p className="text-sm text-blue-300 mb-2 font-bold flex items-center gap-2">
            <span className="text-lg">📝</span> PRO NOTES
          </p>
          <p className="text-sm text-slate-100 leading-relaxed">{combo.notes}</p>
        </div>
      )}

      {/* Recommended Pairings - More visual */}
      <div>
        <h4 className="text-sm font-bold text-purple-300 mb-3 uppercase tracking-wide flex items-center gap-2">
          <span className="text-lg">🎯</span> RECOMMENDED GEAR
        </h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-600/50 hover:border-purple-500/50 transition-all">
            <p className="text-xs text-purple-400 mb-2 font-bold flex items-center gap-1">
              <span>⚔️</span> SWORDS
            </p>
            <div className="space-y-1.5">
              {combo.recommendedPairings.swords.map((sword, idx) => (
                <p key={idx} className="text-xs text-white bg-slate-700/70 px-2.5 py-1.5 rounded-lg font-medium border border-slate-600">
                  {sword}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-600/50 hover:border-purple-500/50 transition-all">
            <p className="text-xs text-cyan-400 mb-2 font-bold flex items-center gap-1">
              <span>🥊</span> FIGHTING
            </p>
            <div className="space-y-1.5">
              {combo.recommendedPairings.fightingStyles.map((style, idx) => (
                <p key={idx} className="text-xs text-white bg-slate-700/70 px-2.5 py-1.5 rounded-lg font-medium border border-slate-600">
                  {style}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-600/50 hover:border-purple-500/50 transition-all">
            <p className="text-xs text-pink-400 mb-2 font-bold flex items-center gap-1">
              <span>🔫</span> GUNS
            </p>
            <div className="space-y-1.5">
              {combo.recommendedPairings.guns.map((gun, idx) => (
                <p key={idx} className="text-xs text-white bg-slate-700/70 px-2.5 py-1.5 rounded-lg font-medium border border-slate-600">
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
