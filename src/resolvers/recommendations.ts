import { chaptersService } from "#/services/chapters.ts";
import { recommendationsService } from "#/services/recommendations.ts";

export const recommendationsResolvers = {
  Query: {
    recommendations: () => {
      return recommendationsService.getAllRecommendations();
    },
    recommendation: (_: unknown, { id }: { id: string }) => {
      return recommendationsService.getRecommendationById(id);
    },
  },
  Recommendation: {
    chapters: (parent: { chapterIds: Array<string> }) => {
      return parent.chapterIds
        .map((id) => chaptersService.getChapterById(id))
        .filter(Boolean);
    },
  },
};
