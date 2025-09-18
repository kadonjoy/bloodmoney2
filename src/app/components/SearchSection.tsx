import { useState, useRef } from "react";
interface SearchSectionProps {
  onSearch?: (query: string) => void;
}
export default function SearchSection({ onSearch }: SearchSectionProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");

  // clear input
  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
    if (onSearch) onSearch(""); // clear search also triggers search
  };

  // trigger enter search
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(query.trim());
    }
  };

  return (
    <section className="max-w-xl mx-auto mb-12 px-4 sm:px-0">
      <div className="relative group">
        {/* left search icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 
              1110.89 3.476l4.817 4.817a1 1 0 
              01-1.414 1.414l-4.816-4.816A6 6 0 
              012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* input box*/}
        <input
          ref={inputRef}
          type="text"
          id="searchInput"
          placeholder="Search BloodMoney 2 games, Human Expenditure Program guides..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // trigger enter search
          className="w-full pl-12 pr-12 py-4 bg-gray-900/80 backdrop-blur-sm border-2 
          border-indigo-500/30 hover:border-indigo-400/50 focus:border-indigo-400 
          rounded-xl text-gray-200 placeholder-gray-400 text-lg shadow-lg 
          shadow-indigo-500/10 focus:shadow-indigo-500/20 focus:outline-none 
          focus:ring-2 focus:ring-indigo-500/40 transition-all duration-300"
        />

        {/* clean button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 
            text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 
                16zM8.707 7.293a1 1 0 00-1.414 
                1.414L8.586 10l-1.293 1.293a1 1 0 
                101.414 1.414L10 11.414l1.293 
                1.293a1 1 0 001.414-1.414L11.414 
                10l1.293-1.293a1 1 0 00-1.414-1.414L10 
                8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
