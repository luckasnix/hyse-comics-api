import { chaptersService } from "#/services/chapters.ts";
import { pagesService } from "#/services/pages.ts";

export const pagesResolvers = {
  Query: {
    pages: () => {
      return pagesService.getAllPages();
    },
    page: (_: unknown, { id }: { id: string }) => {
      return pagesService.getPageById(id);
    },
  },
  Page: {
    chapter: (parent: { chapterId: string }) => {
      return chaptersService.getChapterById(parent.chapterId);
    },
  },
};
