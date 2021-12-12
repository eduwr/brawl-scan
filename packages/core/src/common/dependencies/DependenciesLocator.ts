import { BrawlersPloc } from "../../brawlers/presentation/BrawlersPloc";
import { BrawlersRepository } from "../../brawlers/data/BrawlersRepository";
import { GetBrawlersUseCase } from "../../brawlers/domain/GetBrawlersUseCase";

const provideBrawlersPloc = (): BrawlersPloc => {
  const brawlerRepository = new BrawlersRepository();
  const getBrawlersUseCase = new GetBrawlersUseCase(brawlerRepository);

  const brawlersPloc = new BrawlersPloc(getBrawlersUseCase);

  return brawlersPloc;
};

export const dependenciesLocator = {
  provideBrawlersPloc,
};
