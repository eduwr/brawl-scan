interface BrawlerClass {
  id: number;
  name: string;
}

interface BrawlerRarity {
  id: number;
  name: string;
  color: string;
}

interface Power {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  imageUrl: string;
  released: boolean;
}

interface Video {
  type: number;
  name: string;
  description: string;
  duration: string;
  videoUrl: string;
  previewUrl: string;
  uploadDate: Date;
}

export interface Brawler {
  id: number;
  avatarId: number;
  name: string;
  hash: string;
  path: string;
  released: boolean;
  version: number;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  imageUrl3: string;
  class: BrawlerClass;
  rarity: BrawlerRarity;
  unlock: any;
  description: string;
  starPowers: Power[];
  gadgets: Power[];
  videos: Video[];
}

export interface BrawlersApiResponse {
  list: Brawler[];
}
