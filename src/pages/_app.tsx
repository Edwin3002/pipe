import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navb from "../components/nav/NavB";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
          <title>Reivid Sports</title>
          <link rel = "icon" href="https://res.cloudinary.com/edwin3002/image/upload/v1665243347/felipe/rs2_qr4gli.png" type = "image/x-icon"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <Navb />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
