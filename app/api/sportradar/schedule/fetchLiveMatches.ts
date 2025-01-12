import axios from 'axios';
import { LiveSummariesResponse } from '../types/responses'; // Import des types globaux
import { buildSportradarURL } from './utils'; // Fonction utilitaire pour construire l'URL

export async function fetchLiveMatches(): Promise<LiveSummariesResponse> {
  const url = buildSportradarURL('schedules/live/summaries.json'); // Construit l'URL

  try {
    const response = await axios.get<LiveSummariesResponse>(url, {
      params: {
        api_key: process.env.SPORTRADAR_API_KEY,
      },
    });

    return response.data; // Retourne les données typées
  } catch (error) {
    console.error('Erreur lors de l’appel à Sportradar :', error);
    throw new Error('Impossible de récupérer les scores live');
  }
}