import React from "react";
import Head from "next/head";
import { GlobalStyle, theme } from "../shared/theme";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header/Header";
import { Center } from "../components/Center/style";
import { Footer } from "../components/Footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Head>
        <title>What's next?</title>
      </Head>

      <Header />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
