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
