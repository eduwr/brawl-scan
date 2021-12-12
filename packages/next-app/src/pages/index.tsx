import { useEffect } from "react";
import type { NextPage } from "next";

import { StateKinds } from "../../../core/build";
import { useBrawlers } from "../contexts/brawlersContext";
import { usePlocState } from "../hooks/usePlocState";

const Home: NextPage = () => {
  const brawlersPloc = useBrawlers();
  const brawlersState = usePlocState(brawlersPloc);

  const { brawlers } = brawlersState;

  useEffect(() => {
    brawlersPloc.search("");
  }, []);

  switch (brawlersState.kind) {
    case StateKinds.LOADING:
      return <h1>Loading...</h1>;
    case StateKinds.LOADED:
      return (
        <div>
          <ul>
            {brawlers?.map((brawl) => (
              <li key={brawl.id}>{brawl.name}</li>
            ))}
          </ul>
        </div>
      );
    case StateKinds.RERROR:
      return <h1>Ooops! Something went wrong...</h1>;
    default:
      return <h1>Loading...</h1>;
  }
};

export default Home;
