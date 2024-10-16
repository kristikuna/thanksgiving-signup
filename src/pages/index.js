import * as React from "react"
import { graphql } from "gatsby"
import { Typography } from "@mui/material"
import Layout from "../components/layout"
import SignUpTable from "../components/SignUpTable/SignUpTable"
import Countdown from "../components/Countdown/Countdown"
import Spinner from "../components/Spinner/Spinner"

function IndexPage({ data }) {
  const allSignUps = data.allMongodbThanksgivingSignup.edges

  return (
    <Layout>
      <Typography
        variant="h1"
        color="var(--color-code-bg)"
        sx={{ fontSize: "3rem", fontWeight: "bold", padding: "1rem" }}
      >{`Hey, Fam 👋`}</Typography>
      <Spinner />

      <Countdown />
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
          category
          name
          food
          foodPrepNeeds
          notes
        }
      }
    }
  }
`
