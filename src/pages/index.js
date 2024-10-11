import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import * as styles from "../components/index.module.css"

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
// ]
function IndexPage({ data }) {
  const allSignUps = data.allMongodbThanksgivingSignup.edges

  return (
    <Layout>
      {/* <div className={styles.textCenter}>
        <p className={styles.intro}>
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
      </div> */}
      <div className="signup-list">
        {allSignUps.map(signUp => (
          <div key={signUp.node.id}>
            <Link to={"/recipe/" + signUp.node.id}>
              <p>{signUp.node.name}</p>
            </Link>
            <p>{signUp.node.food}</p>
            <p>{signUp.node.category}</p>
          </div>
        ))}
      </div>
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
