import * as React from "react"
import { graphql } from "gatsby"
import { Typography } from "@mui/material"
import Layout from "../components/layout"
import SignUpTable from "../components/SignUpTable/SignUpTable"
import Add from "../components/Add/Add"
import Countdown from "../components/Countdown/Countdown"

function IndexPage({ data }) {
  const allSignUps = data.allMongodbThanksgivingSignup.edges

  return (
    <Layout>
      <Typography
        variant="h1"
        color="var(--color-code-bg)"
        sx={{ fontSize: "3rem", fontWeight: "bold" }}
      >{`Hey, Fam 👋`}</Typography>
      <Countdown />
      <Add />
      <SignUpTable allSignUps={allSignUps} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMongodbThanksgivingSignup {
      edges {
        node {
          id
          name
          food
          category
        }
      }
    }
  }
`
