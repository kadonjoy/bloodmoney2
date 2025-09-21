export interface MediaItem {
  src: string;
  title: string;
  description: string;
  videoTitle: string;
}

export interface MediaSectionProps {
  titleColor?: string;
  items: MediaItem[];
  sectionId?: string;
  className?: string;
  scale?: number;
}

export interface Game {
  id: number;
  name: string;
  image: string;
  url: string;
}

export interface GameHeroSectionProps {
  gameTitle: string;
  gameSubtitle: string;
  gameIframeSrc: string;
  gameImageSrc: string;
  howToPlayList: string[];
}

export interface ReadyToPlaySectionProps {
  playNowHref: string;
  gameTitle: string;
}
