const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
import { OPTIONS } from "./constants.js";

export const fetchMovies = async () => {
  try {
    const response = await fetch(
      `${BACKEND_URI}/api/v1/movie/get/all-movies`,
      OPTIONS
    );
    const data = await response.json();
    return data?.data?.movies || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
