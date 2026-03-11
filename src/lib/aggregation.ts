export type SentimentCategory = "positive" | "neutral" | "negative";

export type RawSentimentPost = {
  id: string;
  text: string;
  country: string;
  coordinates: [number, number];
  sentimentScore: number;
  sentiment: SentimentCategory;
  timestamp: number;
};

export type CountryAggregate = {
  country: string;
  coordinates: [number, number];
  totalScore: number;
  count: number;
};

export type TrendingKeyword = {
  word: string;
  score: number;
};

export type AggregatedStats = {
  globalMoodScore: number;
  globalCategory: SentimentCategory;
  happiestCountry: string | null;
  happiestScore: number | null;
  mostNegativeCountry: string | null;
  mostNegativeScore: number | null;
  totalMessages: number;
  trendingKeywords: TrendingKeyword[];
};

const keywordWeights: Record<string, number> = {};
const countryAggregates: Record<string, CountryAggregate> = {};

export const resetAggregation = () => {
  Object.keys(keywordWeights).forEach((k) => delete keywordWeights[k]);
  Object.keys(countryAggregates).forEach((k) => delete countryAggregates[k]);
};

const extractKeywords = (text: string): string[] => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9#\s]/g, "")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !["this", "the", "and"].includes(token));
};

export const updateAggregation = (post: RawSentimentPost): AggregatedStats => {
  const { country, sentimentScore, text, coordinates } = post;

  const existing = countryAggregates[country] ?? {
    country,
    coordinates,
    totalScore: 0,
    count: 0,
  };
  existing.coordinates = coordinates;
  existing.totalScore += sentimentScore;
  existing.count += 1;
  countryAggregates[country] = existing;

  const keywords = extractKeywords(text);
  const decay = 0.98;
  Object.keys(keywordWeights).forEach((key) => {
    keywordWeights[key] *= decay;
    if (keywordWeights[key] < 0.01) {
      delete keywordWeights[key];
    }
  });
  const delta = sentimentScore >= 0 ? 1 : -1;
  keywords.forEach((word) => {
    keywordWeights[word] = (keywordWeights[word] ?? 0) + delta;
  });

  let happiestCountry: string | null = null;
  let happiestScore: number | null = null;
  let mostNegativeCountry: string | null = null;
  let mostNegativeScore: number | null = null;
  let globalTotalScore = 0;
  let totalMessages = 0;

  Object.values(countryAggregates).forEach((agg) => {
    const avg = agg.totalScore / agg.count;
    globalTotalScore += agg.totalScore;
    totalMessages += agg.count;

    if (happiestScore === null || avg > happiestScore) {
      happiestCountry = agg.country;
      happiestScore = avg;
    }

    if (mostNegativeScore === null || avg < mostNegativeScore) {
      mostNegativeCountry = agg.country;
      mostNegativeScore = avg;
    }
  });

  const globalMoodScore = totalMessages ? globalTotalScore / totalMessages : 0;

  const trendingKeywords: TrendingKeyword[] = Object.entries(keywordWeights)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([word, score]) => ({ word, score }));

  const globalCategory: SentimentCategory =
    globalMoodScore > 0 ? "positive" : globalMoodScore < 0 ? "negative" : "neutral";

  return {
    globalMoodScore,
    globalCategory,
    happiestCountry,
    happiestScore,
    mostNegativeCountry,
    mostNegativeScore,
    totalMessages,
    trendingKeywords,
  };
};

export const buildGeoJsonFromCountries = () => {
  const features = Object.values(countryAggregates).map((agg) => {
    const avg = agg.totalScore / agg.count;
    const intensity = Math.max(-3, Math.min(3, avg));
    return {
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: agg.coordinates,
      },
      properties: {
        country: agg.country,
        intensity,
      },
    };
  });

  return {
    type: "FeatureCollection" as const,
    features,
  };
};

