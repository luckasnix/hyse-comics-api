import { chaptersService } from "#/services/chapters.ts";
import { comicsService } from "#/services/comics.ts";

export const comicsResolvers = {
  Query: {
    comics: () => {
      return comicsService.getAllComics();
    },
    comic: (_: unknown, { id }: { id: string }) => {
      return comicsService.getComicById(id);
    },
  },
  Comic: {
    chapters: (parent: { id: string }) => {
      return chaptersService.getChaptersByComicId(parent.id);
    },
  },
};
