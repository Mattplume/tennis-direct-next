/**
 * Formatte une date en chaîne ISO 8601 pour les appels à l'API Sportradar.
 * @param date - La date à formatter.
 * @returns Une chaîne ISO 8601 (exemple : "2023-10-01T00:00:00Z").
 */
export function formatDateToISO(date: Date): string {
  return date.toISOString();
}

/**
 * Filtre les matchs en direct à partir d'une liste d'événements sportifs.
 * @param events - Une liste d'événements sportifs.
 * @returns Une liste d'événements sportifs qui sont en direct.
 */
export function filterLiveMatches(events: any[]): any[] {
  return events.filter((event) => event.sport_event_status?.status === 'live');
}

/**
 * Tri les événements sportifs par heure de début.
 * @param events - Une liste d'événements sportifs.
 * @returns Une liste triée des événements sportifs.
 */
export function sortEventsByStartTime(events: any[]): any[] {
  return events.sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());
}