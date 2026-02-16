import { recommendationsMock } from "#/mocks/recommendations.ts";
import type { Recommendation } from "#/types/recommendations.ts";

export class RecommendationsService {
  private recommendations: Array<Recommendation> = recommendationsMock;

  public getAllRecommendations(): Array<Recommendation> {
    return this.recommendations;
  }

  public getRecommendationById(id: string): Recommendation | undefined {
    return this.recommendations.find(
      (currentRecommendation) => currentRecommendation.id === id,
    );
  }
}

export const recommendationsService = new RecommendationsService();
