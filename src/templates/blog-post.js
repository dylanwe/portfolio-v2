import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Post from "./Post"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
    <Layout location={location} title={siteTitle} pageType="post">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        img={post.frontmatter.featuredimage?.replace("static/", "")}
      />
      <Post title={post.frontmatter.title} date={post.frontmatter.date} body={{ __html: post.html }} tags={post.frontmatter.tags}/>
    </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
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
        tags
        description
        featuredimage
      }
    }
  }
`
