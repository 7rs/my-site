export interface Navigation {
  label: string;
  url: string;
}

type HeadingDepth = 1 | 2 | 3 | 4 | 5 | 6;

export interface Heading {
  depth: HeadingDepth;
  text: string;
  slug: string;
}
