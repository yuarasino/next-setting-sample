import { createTheme } from "@nextui-org/react"
import { M_PLUS_1 } from "next/font/google"

const mplus1 = M_PLUS_1({ subsets: [] })

const customTheme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: `${mplus1.className}`,
    },
  },
})

export default customTheme
