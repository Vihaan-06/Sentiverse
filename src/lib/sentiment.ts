import Sentiment from "sentiment";

const analyzer = new Sentiment();

export const analyzeSentimentScore = (text: string): number => {
  const { score } = analyzer.analyze(text);
  return score;
};

export const categorizeSentiment = (
  score: number
): "positive" | "neutral" | "negative" => {
  if (score > 0) return "positive";
  if (score < 0) return "negative";
  return "neutral";
};

