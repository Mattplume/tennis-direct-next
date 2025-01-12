export interface Competitor {
  id: string;
  name: string;
  country: string;
  seed?: number; // Optionnel : tête de série
  qualifier: string; // "home" ou "away"
}