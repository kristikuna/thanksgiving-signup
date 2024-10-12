import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SignUpTable from "../components/signUpTable/signUpTable"

function IndexPage({ data }) {
  const allSignUps = data.allMongodbThanksgivingSignup.edges

  return (
    <Layout>
      <h1>{`Hey, Fam 👋`}</h1>
      {/* <AddToSignUp /> */}
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
