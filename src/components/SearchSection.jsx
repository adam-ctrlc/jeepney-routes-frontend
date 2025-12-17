import { Search, Info } from "lucide-react";

export default function SearchSection({ searchQuery, setSearchQuery }) {
  return (
    <div className="max-w-2xl mx-auto relative z-10">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <Search className="w-6 h-6 text-cdo-green" />
        </div>
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Where are you going? (e.g., Centrio, Cogon, Bulua...)"
          className="w-full pl-14 pr-4 py-5 text-lg rounded-2xl bg-white border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cdo-yellow focus:border-cdo-yellow transition-colors duration-200"
        />
      </div>

      {!searchQuery && (
        <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
          <Info className="w-4 h-4 text-cdo-green" />
          <span>Try searching for a mall, barangay, or street name.</span>
        </div>
      )}
    </div>
  );
}
