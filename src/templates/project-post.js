import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ProjectPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
    <Layout location={location} title={siteTitle} pageType="post">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        img={post.frontmatter.featuredimage}
      />
      <Post title={post.frontmatter.title} date={post.frontmatter.date} body={{ __html: post.html }}/>
    </Layout>
    </>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query ProjectPostTemplate(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredimage
      }
    }
  }
`
