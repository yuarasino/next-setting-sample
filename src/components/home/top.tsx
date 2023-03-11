import { styled, Text, Container } from "@nextui-org/react"
import NextImage from "next/image"

const StyledDiv = styled("div", {})

const StyledImage = styled(NextImage, {
  w: "100%",
  h: "auto",
})

const Top = () => {
  return (
    <StyledDiv>
      <StyledImage src="/top.jpg" alt="top" width={1200} height={675} />
    </StyledDiv>
  )
}

export default Top
