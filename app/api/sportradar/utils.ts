/**
 * Construit dynamiquement une URL pour les appels à l'API Sportradar.
 * @param endpoint - L'endpoint spécifique à appeler (ex. : "schedules/live/summaries.json").
 * @returns Une URL complète de l'API Sportradar.
 */
export function buildSportradarURL(endpoint: string): string {
  const SPORTRADAR_ACCESS_LEVEL = process.env.SPORTRADAR_ACCESS_LEVEL || 'trial';
  const SPORTRADAR_LANGUAGE_CODE = process.env.SPORTRADAR_LANGUAGE_CODE || 'en';
  const BASE_URL = 'https://api.sportradar.com/tennis';

  return `${BASE_URL}/${SPORTRADAR_ACCESS_LEVEL}/v3/${SPORTRADAR_LANGUAGE_CODE}/${endpoint}`;
}

/**
 * Vérifie si une clé API Sportradar est configurée dans les variables d'environnement.
 * @throws Une erreur si la clé API est manquante.
 */
export function validateSportradarAPIKey(): void {
  if (!process.env.SPORTRADAR_API_KEY) {
    throw new Error('La clé API Sportradar (SPORTRADAR_API_KEY) est manquante dans les variables d’environnement.');
  }
}