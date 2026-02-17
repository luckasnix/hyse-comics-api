import { chaptersService } from "#/services/chapters.ts";
import { comicsService } from "#/services/comics.ts";
import { pagesService } from "#/services/pages.ts";

export const chaptersResolvers = {
  Query: {
    chapters: () => {
      return chaptersService.getAllChapters();
    },
    chapter: (_: unknown, { id }: { id: string }) => {
      return chaptersService.getChapterById(id);
    },
  },
  Chapter: {
    comic: (parent: { comicId: string }) => {
      return comicsService.getComicById(parent.comicId);
    },
    pages: (parent: { id: string }) => {
      return pagesService.getPagesByChapterId(parent.id);
    },
  },
};
