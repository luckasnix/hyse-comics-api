import { comicsMock } from "#/mocks/comics.ts";
import type { Comic } from "#/types/comics.ts";

export class ComicsService {
  private comics: Array<Comic> = comicsMock;

  public getAllComics(): Array<Comic> {
    return this.comics;
  }

  public getComicById(id: string): Comic | undefined {
    return this.comics.find((currentComic) => currentComic.id === id);
  }
}

export const comicsService = new ComicsService();
