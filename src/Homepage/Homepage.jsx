import { useState, useMemo } from "react";
import useSWR from "swr";

import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import RouteCard from "../components/RouteCard";
import PopularLocations from "../components/PopularLocations";
import AllRoutesGrid from "../components/AllRoutesGrid";
import {
  LoadingState,
  ErrorState,
  NoResultsState,
} from "../components/StatusMessages";

import { fetcher, ENDPOINTS } from "../utils/api";

export default function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: routes = [],
    error: routesError,
    isLoading: routesLoading,
  } = useSWR(ENDPOINTS.ROUTES, fetcher);

  const {
    data: popularLocations = [],
    error: locationsError,
    isLoading: locationsLoading,
  } = useSWR(ENDPOINTS.POPULAR_LOCATIONS, fetcher);

  const isLoading = routesLoading || locationsLoading;
  const error = routesError || locationsError;

  const filteredRoutes = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return routes.filter((route) =>
      route.stops.some((stop) => stop.toLowerCase().includes(query))
    );
  }, [searchQuery, routes]);

  return (
    <div className="min-h-screen py-10 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <Header />

        {/* Search Section */}
        <SearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Popular Locations - Always visible for quick access */}
        {!isLoading && !error && routes.length > 0 && (
          <PopularLocations
            locations={popularLocations}
            onSelectLocation={setSearchQuery}
          />
        )}

        {/* Loading State */}
        {isLoading && <LoadingState />}

        {/* Error State */}
        {error && <ErrorState error={error} />}

        {/* Results Section */}
        {!isLoading && !error && searchQuery && (
          <div className="space-y-6">
            {filteredRoutes.length > 0 ? (
              <>
                <div className="flex items-center justify-between px-2">
                  <h2 className="text-2xl font-bold text-cdo-green-dark">
                    Search Results
                  </h2>
                  <span className="bg-cdo-yellow text-cdo-green-dark font-bold px-3 py-1 rounded-full text-sm">
                    {filteredRoutes.length} Found
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {filteredRoutes.map((route) => (
                    <RouteCard
                      key={route.code}
                      route={route}
                      searchQuery={searchQuery}
                    />
                  ))}
                </div>
              </>
            ) : (
              <NoResultsState searchQuery={searchQuery} />
            )}
          </div>
        )}

        {/* All Routes Grid (When Idle) */}
        {!isLoading && !error && !searchQuery && (
          <div className="space-y-12">
            <AllRoutesGrid routes={routes} />
          </div>
        )}
      </div>
    </div>
  );
}
