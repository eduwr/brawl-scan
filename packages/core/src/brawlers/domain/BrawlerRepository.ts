import { DataError } from "../../common";
import { Either } from "../../common";
import { Brawler } from "./Brawler";

export interface BrawlerRepository {
  get(filter: string): Promise<Either<DataError, Brawler[]>>;
}
