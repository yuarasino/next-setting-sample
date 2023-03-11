import { createTheme } from "@nextui-org/react"
import { Yusei_Magic } from "next/font/google"

const sansFont = Yusei_Magic({ weight: ["400"], subsets: ["latin"] })

const customTheme = createTheme({
  type: "light",
  theme: {
    fonts: {
      sans: `${sansFont.style.fontFamily}`,
    },
  },
})

export default customTheme
