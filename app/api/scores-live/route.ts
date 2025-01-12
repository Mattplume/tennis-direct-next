import { NextResponse } from 'next/server';
import { fetchLiveMatches } from '@/api/sportradar/schedule/fetchLiveMatches';
import { NextRequest } from 'next/server'; // Type pour une requête Next.js

export async function GET(_: NextRequest): Promise<NextResponse> {
  try {
    const data = await fetchLiveMatches(); // Appel à la fonction métier
    return NextResponse.json(data); // Retourne les données JSON typées
  } catch (error: unknown) {
    console.error('Erreur dans /api/scores-live :', error);

    // Typage explicite pour l'erreur si on souhaite inspecter son contenu
    const errorMessage =
      error instanceof Error ? error.message : 'Erreur inconnue';

    return NextResponse.json(
      { error: `Erreur lors de la récupération des scores live : ${errorMessage}` },
      { status: 500 }
    );
  }
}