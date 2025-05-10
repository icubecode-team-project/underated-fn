// store the constants in a separate file

export const POSTER_CDN = "https://image.tmdb.org/t/p/original/"; // for hardcoded data

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTcxYTkyMzFiYjYzMWRjZmU3MmM4NCIsImlhdCI6MTc0NjM1NTMxNSwiZXhwIjoxNzQ2MzY2MTE1fQ.PfbMuNKf7M8_sHL9x4CzHfHRcQbGZzZWU2BenGhpW7s";

export const OPTIONS = {
  method: "GET",
  headers: {
    Authorization: "Bearer " + TOKEN,
    "Content-Type": "application/json",
  },
};
