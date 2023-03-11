import { Text } from "@nextui-org/react"
import Head from "next/head"

import Live from "@/components/home/live"
import News from "@/components/home/news"
import Spec from "@/components/home/spec"
import Top from "@/components/home/top"
import Main from "@/components/main"

const Home = () => {
  return (
    <>
      <Head>
        <title>Yu Arasino&apos;s Web Site</title>
        <meta name="description" content="新篠ゆうのウェブサイト" />
      </Head>
      <Main>
        <Top />
        <News />
        <Spec />
        <Live />
      </Main>
    </>
  )
}

export default Home
