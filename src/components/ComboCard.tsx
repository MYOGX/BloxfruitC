import type { Combo } from '../types';

interface ComboCardProps {
  combo: Combo;
}

const difficultyColors = {
  Beginner: 'bg-emerald-600 border-emerald-500',
  Intermediate: 'bg-yellow-600 border-yellow-500',
  Advanced: 'bg-red-600 border-red-500',
};

const playstyleIcons = {
  'Sword Main': '⚔️',
  'Fruit Main': '🍎',
  'Gun Main': '🔫',
  'Hybrid': '🔀',
};

export default function ComboCard({ combo }: ComboCardProps) {
  return (
    <div className="bg-[#161b22] rounded-xl border-2 border-[#30363d] p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-3xl font-black text-white mb-4">{combo.name}</h3>
          <div className="flex gap-3 flex-wrap">
            <span className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide ${difficultyColors[combo.difficulty]} text-white border-2`}>
              {combo.difficulty}
            </span>
            <span className="px-4 py-2 rounded-lg text-sm font-bold bg-[#0d1117] text-white border-2 border-[#30363d]">
              {playstyleIcons[combo.playstyle]} {combo.playstyle}
            </span>
          </div>
        </div>

        {/* Damage Badge */}
        <div className="flex-shrink-0 bg-[#ff6b35] rounded-xl px-6 py-4 text-center border-2 border-[#ff8555] min-w-[140px]">
          <p className="text-xs text-white/80 font-bold mb-1 uppercase tracking-wide">Damage</p>
          <p className="text-2xl font-black text-white">{combo.damageEstimate}</p>
        </div>
      </div>

      {/* Notation */}
      <div className="p-5 bg-[#0d1117] rounded-lg border-2 border-[#30363d]">
        <p className="text-xs font-bold text-[#8b949e] uppercase tracking-wide mb-2">Combo Notation</p>
        <code className="text-base text-[#00d9ff] font-mono font-bold">{combo.notation}</code>
      </div>

      {/* Steps */}
      <div>
        <h4 className="text-sm font-bold text-[#8b949e] uppercase tracking-wide mb-4">Steps</h4>
        <ol className="space-y-3">
          {combo.steps.map((step, index) => (
            <li key={index} className="flex gap-4 items-start">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff6b35] text-white flex items-center justify-center text-sm font-black">
                {index + 1}
              </span>
              <span className="text-base text-[#e6edf3] leading-relaxed pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Notes */}
      {combo.notes && (
        <div className="p-5 bg-[#0d1117] rounded-lg border-2 border-[#00d9ff]/30">
          <p className="text-sm font-bold text-[#00d9ff] mb-2 uppercase tracking-wide">📝 Pro Notes</p>
          <p className="text-sm text-[#e6edf3] leading-relaxed">{combo.notes}</p>
        </div>
      )}

      {/* Recommended Pairings */}
      <div>
        <h4 className="text-sm font-bold text-[#8b949e] uppercase tracking-wide mb-4">Recommended Gear</h4>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#0d1117] rounded-lg p-4 border-2 border-[#30363d]">
            <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">⚔️ Swords</p>
            <div className="space-y-2">
              {combo.recommendedPairings.swords.map((sword, idx) => (
                <p key={idx} className="text-sm text-white bg-[#161b22] px-3 py-2 rounded font-medium border border-[#30363d]">
                  {sword}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-[#0d1117] rounded-lg p-4 border-2 border-[#30363d]">
            <p className="text-xs font-bold text-[#00d9ff] uppercase tracking-wide mb-3">🥊 Fighting</p>
            <div className="space-y-2">
              {combo.recommendedPairings.fightingStyles.map((style, idx) => (
                <p key={idx} className="text-sm text-white bg-[#161b22] px-3 py-2 rounded font-medium border border-[#30363d]">
                  {style}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-[#0d1117] rounded-lg p-4 border-2 border-[#30363d]">
            <p className="text-xs font-bold text-[#6bcf7f] uppercase tracking-wide mb-3">🔫 Guns</p>
            <div className="space-y-2">
              {combo.recommendedPairings.guns.map((gun, idx) => (
                <p key={idx} className="text-sm text-white bg-[#161b22] px-3 py-2 rounded font-medium border border-[#30363d]">
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
