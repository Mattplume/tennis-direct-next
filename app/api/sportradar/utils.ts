/**
 * Construit dynamiquement une URL pour les appels à l'API Sportradar.
 * @param endpoint - L'endpoint spécifique à appeler (ex. : "schedules/live/summaries.json").
 * @returns Une URL complète de l'API Sportradar avec la clé API incluse.
 */
export function buildSportradarURL(endpoint: string): string {
  // Lecture des variables d'environnement
  const SPORTRADAR_ACCESS_LEVEL = process.env.SPORTRADAR_ACCESS_LEVEL || "trial";
  const SPORTRADAR_LANGUAGE_CODE = process.env.SPORTRADAR_LANGUAGE_CODE || "en";
  const API_KEY = process.env.SPORTRADAR_API_KEY;

  console.log("API KEY", API_KEY)
  console.log("LOCALE", SPORTRADAR_LANGUAGE_CODE)

  // Validation de la clé API
  if (!API_KEY) {
    throw new Error(
      "La clé API Sportradar (SPORTRADAR_API_KEY) est manquante dans les variables d’environnement."
    );
  }

  // Base URL de l'API Sportradar
  const BASE_URL = "https://api.sportradar.com/tennis";

  // Construction de l'URL complète avec la clé API en paramètre
  return `${BASE_URL}/${SPORTRADAR_ACCESS_LEVEL}/v3/${SPORTRADAR_LANGUAGE_CODE}/${endpoint}?api_key=${API_KEY}`;
}