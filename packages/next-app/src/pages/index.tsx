import { useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";

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
              <li key={brawl.id}>
                <h6>{brawl.name}</h6>
                <Image
                  height={100}
                  width={100}
                  alt={brawl.name}
                  src={brawl.imageUrl}
                ></Image>
              </li>
            ))}
          </ul>
        </div>
      );
    case StateKinds.ERROR:
      return <h1>Ooops! Something went wrong...</h1>;
    default:
      return <h1>Loading...</h1>;
  }
};

export default Home;
