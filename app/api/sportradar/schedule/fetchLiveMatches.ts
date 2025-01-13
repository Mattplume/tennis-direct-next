import axios from "axios";
import { LiveSummariesResponse } from "../types/responses";
import { buildSportradarURL } from "../utils"; // Assure-toi que cette fonction inclut bien la clé API

export async function fetchLiveMatches(): Promise<LiveSummariesResponse> {
  console.log("FETCH OK")
  // Construire l'URL complète avec la clé API incluse
  const url = buildSportradarURL("schedules/live/summaries.json");
  console.log("URL", url)

  try {
    // Faire l'appel API avec Axios
    const response = await axios.get<LiveSummariesResponse>(url);

    return response.data; // Retourne les données typées
  } catch (error) {
    console.error("Erreur lors de l’appel à Sportradar :", error);
    throw new Error("Impossible de récupérer les scores live");
  }
}