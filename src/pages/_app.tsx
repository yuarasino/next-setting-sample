import { NextUIProvider } from "@nextui-org/react"
import type { AppProps } from "next/app"
import Head from "next/head"

import Footer from "@/components/footer"
import Header from "@/components/header"
import globalStyles from "@/styles/global"
import customTheme from "@/styles/theme"

const _App = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextUIProvider theme={customTheme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default _App
