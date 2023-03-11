import { styled, Navbar, Text, Link } from "@nextui-org/react"
import NextImage from "next/image"
import NextLink from "next/link"
import { useRef } from "react"
import { FaGithub } from "react-icons/fa"

const menus = [
  { title: "NEWS", href: "/#news" },
  { title: "SPEC", href: "/#spec" },
  { title: "LIVE", href: "/#live" },
  { title: "BLOG", href: "/blog" },
  { title: "INFO", href: "/info" },
]

const StyledHeader = styled("header", {
  position: "fixed",
  top: "0",
  w: "100%",
})

const StyledFaGithub = styled(FaGithub, {
  verticalAlign: "middle",
  color: "#333333",
})

const Header = () => {
  const toggleRef = useRef<HTMLButtonElement>(null)

  return (
    <StyledHeader>
      <Navbar
        maxWidth="md"
        disableBlur
        css={{
          bg: "var(--nextui--navbarBlurBackgroundColor)",
          bf: "saturate(180%) blur(var(--nextui--navbarBlur))",
        }}
        containerCss={{
          bg: "transparent",
          gap: "$10",
        }}
      >
        <Navbar.Toggle
          ref={toggleRef}
          showIn="xs"
          aria-label="toggle navigation"
          css={{
            "& .line": {
              height: "2px",
            },
          }}
        />
        <Navbar.Brand>
          <Link as={NextLink} href="/">
            <NextImage src="/logo.png" alt="logo" width={150} height={50} />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" css={{ ml: "auto" }}>
          {menus.map(({ title, href }) => {
            return (
              <Navbar.Item key={title}>
                <Link as={NextLink} href={href} scroll={false}>
                  <Text span weight="semibold">
                    {title}
                  </Text>
                </Link>
              </Navbar.Item>
            )
          })}
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Link
              href="https://github.com/yuarasino/yuarasino-website"
              target="_blank"
            >
              <Text span size="22px" css={{ padding: "$2" }}>
                <StyledFaGithub />
              </Text>
            </Link>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {menus.map(({ title, href }) => {
            return (
              <Navbar.CollapseItem key={title}>
                <Link
                  as={NextLink}
                  href={href}
                  scroll={false}
                  onClick={() => toggleRef.current?.click()}
                  css={{ dflex: "center", minWidth: "100%" }}
                >
                  <Text span weight="semibold">
                    {title}
                  </Text>
                </Link>
              </Navbar.CollapseItem>
            )
          })}
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  )
}

export default Header
