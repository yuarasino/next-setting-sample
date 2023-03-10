import "@/styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import type { AppProps } from "next/app"

export default function _App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
