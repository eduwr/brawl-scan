import { Brawler } from "../domain/Brawler";
import { StateKinds } from "../../common/presentation/StateKinds";

export interface CommonBrawlersState {
  searchTerm: string;
  brawlers?: Brawler[];
}

export interface LoadingBrawlersState {
  kind: StateKinds.LOADING;
}

export interface LoadedBrawlersState {
  kind: StateKinds.LOADED;
}

export interface ErrorBrawlersState {
  kind: StateKinds.ERROR;
  error: string;
}

export type BrawlersState = (
  | LoadingBrawlersState
  | LoadedBrawlersState
  | ErrorBrawlersState
) &
  CommonBrawlersState;

export const brawlersInitialState: BrawlersState = {
  kind: StateKinds.LOADING,
  searchTerm: "",
};
