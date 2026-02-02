import { chaptersMock } from "../mocks/chapters.ts";
import type { Chapter } from "../types/chapters.ts";

export class ChaptersService {
  private chapters: Array<Chapter> = chaptersMock;

  public getAllChapters(): Array<Chapter> {
    return this.chapters;
  }

  public getChapterById(id: string): Chapter | undefined {
    return this.chapters.find((currentChapter) => currentChapter.id === id);
  }

  public getChaptersByComicId(comicId: string): Array<Chapter> {
    return this.chapters.filter(
      (currentChapter) => currentChapter.comicId === comicId,
    );
  }
}

export const chaptersService = new ChaptersService();
