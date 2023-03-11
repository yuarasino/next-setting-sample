import { NextUIProvider } from "@nextui-org/react"
import type { AppProps } from "next/app"
import Head from "next/head"

import Footer from "@/components/footer"
import Header from "@/components/header"
import theme from "@/styles/theme"

const _App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextUIProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default _App
