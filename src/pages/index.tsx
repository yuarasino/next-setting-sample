import { Text } from "@nextui-org/react"
import Head from "next/head"

import Live from "@/components/home/live"
import News from "@/components/home/news"
import Spec from "@/components/home/spec"
import Main from "@/components/main"

const Home = () => {
  return (
    <>
      <Head>
        <title>Yu Arasino&apos;s Web Site</title>
        <meta name="description" content="新篠ゆうのウェブサイト" />
      </Head>
      <Main>
        <Text h1>Yu Arasino&apos;s Web Site</Text>
        <Text>新篠ゆうのウェブサイト</Text>

        <News />
        <Spec />
        <Live />
      </Main>
    </>
  )
}

export default Home
