import { DataError } from "../../common/domain/DataError";
import { Ploc } from "../../common/presentation/Ploc";
import { StateKinds } from "../../common/presentation/StateKinds";
import { GetBrawlersUseCase } from "../domain/GetBrawlersUseCase";
import { brawlersInitialState, BrawlersState } from "./BrawlersState";

export class BrawlersPloc extends Ploc<BrawlersState> {
  constructor(private getBrawlersUseCase: GetBrawlersUseCase) {
    super(brawlersInitialState);
  }

  async search(searchTerm: string) {
    const brawlersResult = await this.getBrawlersUseCase.execute(searchTerm);

    brawlersResult.fold(
      (error) => this.changeState(this.handleError(searchTerm, error)),
      (brawlers) =>
        this.changeState({
          kind: StateKinds.LOADED,
          brawlers,
          searchTerm,
        })
    );
  }

  private handleError(searchTerm: string, error: DataError): BrawlersState {
    switch (error.kind) {
      case "UnexpectedError": {
        return {
          searchTerm,
          kind: StateKinds.ERROR,
          error: "Sorry, an error has ocurred. Please try later again",
        };
      }
    }
  }
}
