import { useEffect, useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search fruits..." }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Focus search on "/" key
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Clear search on Escape
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        onChange('');
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onChange]);

  return (
    <div className="relative group">
      {/* Glow effect on focus */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-focus-within:opacity-30 transition duration-300"></div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-6 w-6 text-purple-400 group-focus-within:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full pl-12 pr-16 py-4 border-2 border-slate-700/50 rounded-xl bg-slate-800/70 backdrop-blur-sm text-white text-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 transition-all duration-200 font-medium"
          placeholder={placeholder}
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2 pointer-events-none">
          {value && (
            <button
              onClick={() => onChange('')}
              className="pointer-events-auto p-1 hover:bg-slate-700 rounded transition-colors"
            >
              <svg className="w-5 h-5 text-slate-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2.5 py-1.5 text-sm font-bold text-purple-400 bg-slate-900 border-2 border-purple-500/30 rounded-lg shadow-inner">
            /
          </kbd>
        </div>
      </div>
    </div>
  );
}
