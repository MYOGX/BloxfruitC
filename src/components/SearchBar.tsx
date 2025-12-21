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
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        onChange('');
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onChange]);

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-[#8b949e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full pl-12 pr-14 py-4 border-2 border-[#30363d] rounded-lg bg-[#161b22] text-white placeholder-[#8b949e] focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent transition-all text-base"
        placeholder={placeholder}
      />
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
        {value && (
          <button
            onClick={() => onChange('')}
            className="p-1 hover:bg-[#30363d] rounded transition-colors"
          >
            <svg className="w-4 h-4 text-[#8b949e] hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-bold text-[#ff6b35] bg-[#0d1117] border border-[#30363d] rounded font-mono">
          /
        </kbd>
      </div>
    </div>
  );
}
