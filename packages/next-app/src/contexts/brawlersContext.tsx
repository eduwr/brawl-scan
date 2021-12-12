import { BrawlersPloc, dependenciesLocator } from "@brawl-scan/core";
import { ReactNode } from "react";
import { createContext } from "./createContext";

const [blocContext, useBrawlersPloc] = createContext<BrawlersPloc>();

export const BrawlersProvider = ({ children }: { children: ReactNode }) => (
  <blocContext.Provider value={dependenciesLocator.provideBrawlersPloc()}>
    {children}
  </blocContext.Provider>
);

export const useBrawlers = useBrawlersPloc;
