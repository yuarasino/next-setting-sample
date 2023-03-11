import { styled, Text, Container, Link } from "@nextui-org/react"
import NextLink from "next/link"
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa"

import Flex from "@/components/flex"

const StyledFaTwitter = styled(FaTwitter, { color: "#1da1f2" })
const StyledFaYoutube = styled(FaYoutube, { color: "#ff0000" })
const StyledFaGithub = styled(FaGithub, { color: "#333333" })

const links = [
  { FaIcon: StyledFaTwitter, href: "https://twitter.com/yuarasino" },
  { FaIcon: StyledFaYoutube, href: "https://youtube.com/@yuarasino" },
  { FaIcon: StyledFaGithub, href: "https://github.com/yuarasino" },
]

const StyledFooter = styled("footer", {
  py: "$10",
})

const Footer = () => {
  return (
    <StyledFooter>
      <Container display="flex" justify="space-between" lg>
        <Flex>
          <Text>&copy; 新篠ゆう</Text>
        </Flex>
        <Flex>
          {links.map(({ FaIcon, href }, index) => {
            return (
              <Link as={NextLink} href={href} target="_blank" key={index}>
                <Text span size="$xl">
                  <FaIcon />
                </Text>
              </Link>
            )
          })}
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
