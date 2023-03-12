export interface Teaser {
  id: number;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imgUrl: string;
  imgAlt: string;
}

export const teasers: Teaser[] = [
  {
    id: 1,
    title: 'Musearch',
    description: `Individual project of a mobile application for searching and discovering museums.`,
    linkText: 'View case study',
    linkUrl: '/projects/musearch',
    imgUrl: 'musearch-teaser.svg',
    imgAlt: 'Musearch by Ewelina Karlsson',
  },
  {
    id: 2,
    title: 'Other work',
    description: `Various visuals and graphics.`,
    linkText: 'View',
    linkUrl: '/other',
    imgUrl: 'musearch-teaser.svg',
    imgAlt: 'Other work by Ewelina Karlsson',
  },
];
