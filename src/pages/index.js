import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

const IndexPage = props => {
  const recipes = props.data.allMongodbThanksgivingSignup.edges
  console.log(recipes)
  return (
    <Layout>
      <div className={styles.textCenter}>
        <p className={styles.intro}>
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="signup-list">
        {recipes.map(recipe => (
          <div className="recipes">
            <Link to={"/recipe/" + recipe.node.id}>
              <p>{recipe.node.name}</p>
            </Link>
            <p>{recipe.node.food}</p>
            <p>{recipe.node.category}</p>
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
