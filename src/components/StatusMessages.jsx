import { Search, Loader2, AlertCircle } from "lucide-react";

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="p-4 bg-white rounded-full border border-gray-200">
        <Loader2 className="w-10 h-10 animate-spin text-cdo-yellow-dark" />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-500">
        Fetching routes...
      </p>
    </div>
  );
}

export function ErrorState({ error }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4">
      <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
      <div>
        <h3 className="text-red-800 font-semibold text-lg">
          Unable to load routes
        </h3>
        <p className="text-red-600 mt-1">
          {typeof error === "string" ? error : error.message || "Unknown error"}
        </p>
        <p className="text-red-500 text-sm mt-4">
          We’re experiencing some issues on our side. Please wait.
        </p>
      </div>
    </div>
  );
}

export function NoResultsState({ searchQuery }) {
  return (
    <div className="text-center py-16 px-6 bg-white border border-gray-200 rounded-3xl">
      <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mb-2">No routes found</h3>
      <p className="text-gray-500 max-w-md mx-auto">
        We couldn't find any jeepneys passing by "
        <span className="text-cdo-green font-semibold">{searchQuery}</span>
        ". Try searching for a broader location or a major landmark.
      </p>
    </div>
  );
}
