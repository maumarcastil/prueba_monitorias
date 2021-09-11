import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
//import fontawesome
import "fontawesome";
//import context state
import { InitialProvider } from "context/InitialContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,900|Roboto:300,400,700&display=swap"
          rel="stylesheet"
        />
        <title>Prueba Dashboard</title>
      </Head>

      <InitialProvider>
        <Component {...pageProps} />
      </InitialProvider>
    </>
  );
}

export default MyApp;
