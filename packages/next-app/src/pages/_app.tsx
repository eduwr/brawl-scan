import "../styles/globals.css";
import type { AppProps } from "next/app";

import { BrawlersProvider } from "../contexts/brawlersContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BrawlersProvider>
      <Component {...pageProps} />
    </BrawlersProvider>
  );
}

export default MyApp;
