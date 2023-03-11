import { Text } from "@nextui-org/react"
import Head from "next/head"

import Main from "@/components/main"

const Info = () => {
  return (
    <>
      <Head>
        <title>INFO | Yu Arasino&apos;s Web Site</title>
        <meta name="description" content="新篠ゆうのウェブサイト" />
      </Head>
      <Main>
        <Text h1>INFO</Text>
      </Main>
    </>
  )
}

export default Info
