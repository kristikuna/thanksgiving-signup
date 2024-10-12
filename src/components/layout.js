import * as React from "react"
import { Box } from "@mui/material"

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const EMOJI_LIST = ["❤️", "🦃", "🐱"]
  const madeWithEmoji =
    EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)]
  return (
    <>
      {/* <Header siteTitle={`Hey, Fam 👋`} /> */}
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Box
          component="footer"
          sx={{
            fontSize: `var(--font-sm)`,
          }}
        >
          {`Made with ${madeWithEmoji} by Kristi Kuna`}
        </Box>
      </Box>
    </>
  )
}

export default Layout
