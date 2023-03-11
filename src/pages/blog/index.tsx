import { Text } from "@nextui-org/react"
import Head from "next/head"

import Main from "@/components/main"

const Blog = () => {
  return (
    <>
      <Head>
        <title>BLOG | Yu Arasino&apos;s Web Site</title>
        <meta name="description" content="新篠ゆうのウェブサイト" />
      </Head>
      <Main>
        <Text h1>BLOG</Text>
      </Main>
    </>
  )
}

export default Blog
