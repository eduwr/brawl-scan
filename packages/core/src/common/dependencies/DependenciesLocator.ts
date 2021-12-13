import { BrawlersPloc } from "../../brawlers/presentation/BrawlersPloc";
import { BrawlersRepository } from "../../brawlers/data/BrawlersRepository";
import { GetBrawlersUseCase } from "../../brawlers/domain/GetBrawlersUseCase";
import { HttpClient } from "../domain/HttpClient";

import axios from "axios";

const brawlerApi = axios.create({
  baseURL: "https://api.brawlapi.com/v1",
});

const provideBrawlersPloc = (): BrawlersPloc => {
  const brawlerHttpService = new HttpClient(brawlerApi);
  const brawlerRepository = new BrawlersRepository(brawlerHttpService);
  const getBrawlersUseCase = new GetBrawlersUseCase(brawlerRepository);

  const brawlersPloc = new BrawlersPloc(getBrawlersUseCase);

  return brawlersPloc;
};

export const dependenciesLocator = {
  provideBrawlersPloc,
};
