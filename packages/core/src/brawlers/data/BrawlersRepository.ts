import { BrawlerRepository } from "../domain/BrawlerRepository";
import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { Brawler } from "../domain/Brawler";

const brawlers: Brawler[] = [
  {
    id: 16000039,
    avatarId: 28000054,
    name: "Colette",
    hash: "Colette",
    path: "Colette",
    released: true,
    version: 1,
    link: "https://brawlify.com/brawlers/detail/Colette",
    imageUrl: "https://cdn.brawlify.com/brawler/Colette.png",
    imageUrl2: "https://cdn.brawlify.com/brawler-bs/Colette.png",
    imageUrl3: "https://cdn.brawlify.com/emoji/Colette.png",
    class: {
      id: 1,
      name: "Fighter",
    },
    rarity: {
      id: 7,
      name: "Chromatic",
      color: "#f88f25",
    },
    unlock: null,
    description:
      "Colette is going to get you! She taxes opponents' health and has fancy moves to boot.",
    starPowers: [
      {
        id: 23000300,
        name: "Push It",
        path: "Push-It",
        version: 2,
        description:
          "All enemy brawlers hit by Colette's charge are carried to the farthest point of the attack!",
        imageUrl: "https://cdn.brawlify.com/star-powers/Push-It.png",
        released: true,
      },
      {
        id: 23000301,
        name: "Mass Tax",
        path: "Mass-Tax",
        version: 2,
        description:
          'Colette\'s super gives her a 20% shield for <span class="text-success">5</span> seconds. Every enemy brawler hit by it will add <span class="text-success">10%</span> more protection.',
        imageUrl: "https://cdn.brawlify.com/star-powers/Mass-Tax.png",
        released: true,
      },
    ],
    gadgets: [
      {
        id: 23000302,
        name: "Na-ah!",
        path: "Na-ah",
        version: 2,
        description: "Colette's next shot deals extra 1000 damage.",
        imageUrl: "https://cdn.brawlify.com/gadgets/Na-ah.png",
        released: true,
      },
    ],
    videos: [],
  },
  {
    id: 16000038,
    avatarId: 28000053,
    name: "Surge",
    hash: "Surge",
    path: "Surge",
    released: true,
    version: 1,
    link: "https://brawlify.com/brawlers/detail/Surge",
    imageUrl: "https://cdn.brawlify.com/brawler/Surge.png",
    imageUrl2: "https://cdn.brawlify.com/brawler-bs/Surge.png",
    imageUrl3: "https://cdn.brawlify.com/emoji/Surge.png",
    class: {
      id: 1,
      name: "Fighter",
    },
    rarity: {
      id: 7,
      name: "Chromatic",
      color: "#f88f25",
    },
    unlock: null,
    description:
      "He's a Protector with a penchant for parties. Surge attacks foes with energy drink blasts that split in two on contact. His Super upgrades his stats in 3 stages and comes complete with totally awesome body mods!",
    starPowers: [
      {
        id: 23000283,
        name: "To The Max!",
        path: "To-The-Max",
        version: 2,
        description:
          "Surge's main attack now splits when hitting walls or when reaching max distance.",
        imageUrl: "https://cdn.brawlify.com/star-powers/To-The-Max.png",
        released: true,
      },
      {
        id: 23000284,
        name: "Serve Ice Cold",
        path: "Serve-Ice-Cold",
        version: 2,
        description:
          "Surge keeps his STAGE 1 Super upgrade for the full match duration.",
        imageUrl: "https://cdn.brawlify.com/star-powers/Serve-Ice-Cold.png",
        released: true,
      },
    ],
    gadgets: [
      {
        id: 23000285,
        name: "Power Surge",
        path: "Power-Surge",
        version: 2,
        description:
          "Surge overloads his circuits and teleports a short distance forward.",
        imageUrl: "https://cdn.brawlify.com/gadgets/Power-Surge.png",
        released: true,
      },
    ],
    videos: [
      {
        type: 0,
        name: "Surge's Main Attack",
        description: "Check out how Surge attacks.",
        duration: "PT3S",
        videoUrl: "https://cdn.brawlify.com/videos/Surge-Main-Attack.mp4",
        previewUrl:
          "https://cdn.brawlify.com/videos/preview/Surge-Main-Attack.jpg",
        uploadDate: new Date("2020-07-09T00:00:00.000Z"),
      },
      {
        type: 1,
        name: "Surge's Super Attack",
        description: "Check out how Surge uses the Super.",
        duration: "PT4S",
        videoUrl: "https://cdn.brawlify.com/videos/Surge-Super.mp4",
        previewUrl: "https://cdn.brawlify.com/videos/preview/Surge-Super.jpg",
        uploadDate: new Date("2020-07-09T00:00:00.000Z"),
      },
    ],
  },
];

export class BrawlersRepository implements BrawlerRepository {
  get(filter: string): Promise<Either<DataError, Brawler[]>> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        try {
          if (filter) {
            const filteredBrawlers = brawlers.filter((braw: Brawler) => {
              return braw.name.toLowerCase().includes(filter.toLowerCase());
            });
            resolve(Either.right(filteredBrawlers));
          } else {
            resolve(Either.right(brawlers));
          }
        } catch (error) {
          resolve(Either.left(error as DataError));
        }
      }, 100);
    });
  }
}
