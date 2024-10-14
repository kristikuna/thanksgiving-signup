import * as React from "react"
import { Box, Typography } from "@mui/material"

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const EMOJI_LIST = ["❤️", "☕", "🐱"]
  const madeWithEmoji =
    EMOJI_LIST[Math.floor(Math.random() * EMOJI_LIST.length)]
  return (
    <>
      {/* <Header siteTitle={`Hey, Fam 👋`} /> */}
      <Box component="main">
        {children}
        {/* TODO: move footer to component */}
        <Box
          component="footer"
          sx={{
            background: `var(--color-code-bg)`,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: `var(--font-sm)`,
            height: "7vh",
            position: "fixed",
            width: "100%",
          }}
        >
          <Typography>{`Made with ${madeWithEmoji} by Kristi Kuna`}</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Layout
