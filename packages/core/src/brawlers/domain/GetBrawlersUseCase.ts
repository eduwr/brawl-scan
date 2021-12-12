import { DataError } from "../../common/domain/DataError";
import { Either } from "../../common/domain/Either";
import { BrawlerRepository } from "./BrawlerRepository";
import { Brawler } from "./Brawler";

export class GetBrawlersUseCase {
  constructor(private brawlerRepository: BrawlerRepository) {}
  execute(filter: string): Promise<Either<DataError, Brawler[]>> {
    return this.brawlerRepository.get(filter);
  }
}
