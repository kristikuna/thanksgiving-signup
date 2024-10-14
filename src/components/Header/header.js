import * as React from "react"
import Box from "@mui/material/Box"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Box to="/">{siteTitle}</Box>
  </header>
)

export default Header
