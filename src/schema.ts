import { createSchema } from "graphql-yoga";

import { chaptersService } from "./services/chapters.ts";
import { comicsService } from "./services/comics.ts";
import { pagesService } from "./services/pages.ts";
import { recommendationsService } from "./services/recommendations.ts";
import typeDefs from "./type-defs.gql" with { type: "text" };

export const schema = createSchema({
  typeDefs,
  resolvers: {
    Query: {
      comics: () => comicsService.getAllComics(),
      comic: (_, { id }: { id: string }) => comicsService.getComicById(id),
      chapters: () => chaptersService.getAllChapters(),
      chapter: (_, { id }: { id: string }) =>
        chaptersService.getChapterById(id),
      pages: () => pagesService.getAllPages(),
      page: (_, { id }: { id: string }) => pagesService.getPageById(id),
      recommendations: () => recommendationsService.getAllRecommendations(),
      recommendation: (_, { id }: { id: string }) =>
        recommendationsService.getRecommendationById(id),
    },
    Comic: {
      chapters: (parent: { id: string }) =>
        chaptersService.getChaptersByComicId(parent.id),
    },
    Chapter: {
      comic: (parent: { comicId: string }) =>
        comicsService.getComicById(parent.comicId),
      pages: (parent: { id: string }) =>
        pagesService.getPagesByChapterId(parent.id),
    },
    Page: {
      chapter: (parent: { chapterId: string }) =>
        chaptersService.getChapterById(parent.chapterId),
    },
    Recommendation: {
      chapters: (parent: { chapterIds: Array<string> }) =>
        parent.chapterIds
          .map((id) => chaptersService.getChapterById(id))
          .filter(Boolean),
    },
  },
});
