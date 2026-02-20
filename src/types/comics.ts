export type ComicStructure = "single-panel" | "traditional" | "long-scroll";

export type ComicOrientation = "landscape" | "portrait";

export type ComicDirection = "western" | "eastern";

export type ComicGenre =
  | "action"
  | "adventure"
  | "biography"
  | "comedy"
  | "crime"
  | "drama"
  | "educational"
  | "fantasy"
  | "historical"
  | "horror"
  | "mystery"
  | "post-apocalyptic"
  | "psychological"
  | "romance"
  | "satire"
  | "sci-fi"
  | "slice-of-life"
  | "sport"
  | "superhero"
  | "supernatural"
  | "thriller"
  | "war"
  | "western";

export type ContentWarning =
  | "ai-generated"
  | "graphic-violence"
  | "sexual-content"
  | "strong-language"
  | "substance-use";

export type Comic = {
  id: string;
  structure: ComicStructure;
  orientation: ComicOrientation;
  direction: ComicDirection;
  genres: Array<ComicGenre>;
  contentWarnings: Array<ContentWarning>;
  title: string;
  synopsis: string;
  thumbnailUrl: string;
  coverUrl: string;
};
