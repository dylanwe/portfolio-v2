import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} contained={false}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} contained={true}>
      <Seo title="All posts" />
      <h1 className="text-3xl font-bold dark:text-gray-100">Blog</h1>
      <ol style={{ listStyle: `none` }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr mt-4 mb-12">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug}>
                <article
                  className="border-2 border-gray-200 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-700 p-4 rounded-lg hover:shadow-lg h-full transition-shadow dark:transition-colors"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 className="mb-2 text-lg font-bold dark:text-gray-200">{title}</h2>
                    <small className="bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 px-3 py-2 rounded-md">{post.frontmatter.date}</small>
                  </header>
                  <section className="mt-2 text-gray-600 dark:text-gray-400">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fields: { collection: {eq: "blog"} } }, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
