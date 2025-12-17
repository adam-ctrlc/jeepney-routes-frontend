export const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  });

export const API_BASE_URL = "http://localhost:3000/api";

export const ENDPOINTS = {
  ROUTES: `${API_BASE_URL}/routes`,
  POPULAR_LOCATIONS: `${API_BASE_URL}/popular-locations`,
  SEARCH: (query) => `${API_BASE_URL}/search?q=${encodeURIComponent(query)}`,
};
