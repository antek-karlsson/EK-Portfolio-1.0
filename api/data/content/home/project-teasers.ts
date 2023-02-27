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
    linkUrl: '#',
    imgUrl: 'musearch-teaser.svg',
    imgAlt: 'Musearch by Ewelina Karlsson',
  },
];
