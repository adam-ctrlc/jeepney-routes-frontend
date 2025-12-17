import { MapPin } from "lucide-react";

export default function PopularLocations({ locations, onSelectLocation }) {
  return (
    <section className="text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <MapPin className="w-5 h-5 text-cdo-yellow-dark" />
        <h2 className="text-xl font-bold text-cdo-green-dark uppercase tracking-wide">
          Popular Destinations
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => onSelectLocation(location)}
            className="px-6 py-2 bg-white text-gray-700 font-medium rounded-full border border-gray-200 hover:bg-cdo-yellow hover:border-cdo-yellow hover:text-cdo-green-dark transition-colors duration-200"
          >
            {location}
          </button>
        ))}
      </div>
    </section>
  );
}
