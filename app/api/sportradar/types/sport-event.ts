import { Category } from './category';
import { Competitor } from './competitor';
import { SportEventStatus } from './sport-event-status';

export interface SportEvent {
  id: string; // ID unique de l’événement
  start_time: string; // Heure de début (ISO 8601)
  category: Category; // Catégorie (ex. : ATP, WTA)
  competition: Competition; // Compétition (ex. : Wimbledon)
  competitors: Competitor[]; // Liste des joueurs ou équipes
  sport_event_status: SportEventStatus; // Statut de l’événement
}