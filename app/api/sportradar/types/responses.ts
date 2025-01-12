import { SportEvent } from './sport-event-status';

export interface LiveSummariesResponse {
  sport_events: SportEvent[]; // Liste des événements sportifs
}