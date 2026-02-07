import { pagesMock } from "#/mocks/pages.ts";
import type { Page } from "#/types/pages.ts";

export class PagesService {
  private pages: Array<Page> = pagesMock;

  public getAllPages(): Array<Page> {
    return this.pages;
  }

  public getPageById(id: string): Page | undefined {
    return this.pages.find((currentPage) => currentPage.id === id);
  }

  public getPagesByChapterId(chapterId: string): Array<Page> {
    return this.pages.filter(
      (currentPage) => currentPage.chapterId === chapterId,
    );
  }
}

export const pagesService = new PagesService();
