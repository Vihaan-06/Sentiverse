export type CountryCoordinates = {
  country: string;
  coordinates: [number, number];
};

const SAMPLE_TEXTS = [
  "I love this new update",
  "This is terrible",
  "Feeling great today",
  "This is the worst thing ever",
  "Everything is broken",
];

const COUNTRIES: CountryCoordinates[] = [
  { country: "United States", coordinates: [-98.35, 39.5] },
  { country: "United Kingdom", coordinates: [-3.436, 55.378] },
  { country: "India", coordinates: [78.9629, 20.5937] },
  { country: "Brazil", coordinates: [-51.9253, -14.235] },
  { country: "Japan", coordinates: [138.2529, 36.2048] },
  { country: "Germany", coordinates: [10.4515, 51.1657] },
  { country: "South Africa", coordinates: [22.9375, -30.5595] },
  { country: "Canada", coordinates: [-106.3468, 56.1304] },
  { country: "Australia", coordinates: [133.7751, -25.2744] },
  { country: "Mexico", coordinates: [-102.5528, 23.6345] },
];

const randomItem = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateRandomPost = () => {
  const baseText = randomItem(SAMPLE_TEXTS);
  const countryData = randomItem(COUNTRIES);

  const text =
    Math.random() > 0.4
      ? `${baseText} #${["update", "vibes", "mood", "tech", "news"].at(
          Math.floor(Math.random() * 5)
        )}`
      : baseText;

  return {
    text,
    country: countryData.country,
    coordinates: countryData.coordinates,
    timestamp: Date.now(),
  };
};

