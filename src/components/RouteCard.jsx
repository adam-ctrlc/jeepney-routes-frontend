import { Navigation } from "lucide-react";

export default function RouteCard({ route, searchQuery = "" }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-0 overflow-hidden flex flex-col h-full hover:border-cdo-yellow transition-colors duration-200">
      <div className="bg-cdo-green-dark p-5 relative overflow-hidden">
        <div className="flex justify-between items-start relative z-10">
          <div>
            <span className="inline-block bg-white text-cdo-green-dark text-xl font-black px-3 py-1 rounded-lg mb-2">
              {route.code}
            </span>
            <h3 className="text-white text-xl font-bold leading-tight">
              {route.name}
            </h3>
          </div>
        </div>
        <p className="text-cdo-green-light text-sm mt-3 relative z-10">
          {route.description}
        </p>
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-start gap-3 mb-4">
          <Navigation className="w-5 h-5 text-cdo-green flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Key Stops
            </p>
            <div className="flex flex-wrap gap-2">
              {route.stops.map((stop) => {
                const isMatch =
                  searchQuery &&
                  stop.toLowerCase().includes(searchQuery.toLowerCase());
                return (
                  <span
                    key={stop}
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      isMatch
                        ? "bg-cdo-yellow text-cdo-green-dark border-cdo-yellow-dark"
                        : "bg-gray-100 text-gray-600 border-gray-200"
                    }`}
                  >
                    {stop}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
