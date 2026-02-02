export type PageBackgroundTexture =
  | "black-paper"
  | "newspaper"
  | "parchment"
  | "white-paper";

export type Page = {
  id: string;
  chapterId: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  backgroundTexture: PageBackgroundTexture | null;
};
