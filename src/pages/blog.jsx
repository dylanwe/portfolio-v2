import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} pageType="overview">
        <Seo title="All posts" />
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">No blog posts found</h2>
          <div className="my-4" style={{
            width: '100%',
            height: '0',
            paddingBottom: '77%',
            position: 'relative'
            }}><iframe src="https://giphy.com/embed/3oriff4xQ7Oq2TIgTu" title="so empty" width="100%" height="100%" style={{position: 'absolute'}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} pageType="overview">
      <Seo title="All posts" />
      <header className="flex justify-between items-end  px-4">
        <h1 className="text-3xl font-bold dark:text-gray-100">Blog</h1>
        <Link to="/tags/">
          <span className="text-cyan-500 hover:text-cyan-600 transition-colors flex">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 24 24" width="24" fill="currentColor"><path d="M11.586 15.071L13 13.657l1.414 1.414 6.165-6.165 1.09-3.552-2.484-2.483-1.079.336-1.598-1.598L18.591.96a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2L22.345 9.97l-7.93 7.93-2.83-2.828zM14.236.75l2.482 2.483a2 2 0 0 1 .498 2l-1.235 4.028-7.93 7.931-7.78-7.778L8.17 1.516 12.227.254a2 2 0 0 1 2.008.496zM3.1 9.414l4.95 4.95 6.164-6.165 1.09-3.552-2.484-2.483-3.585 1.115L3.1 9.414zm7.424-2.475a1.5 1.5 0 1 1 2.121-2.121 1.5 1.5 0 0 1-2.12 2.121zm6.886 1.022l.782-2.878c.45.152.755.325.917.518a1.5 1.5 0 0 1-.185 2.113c-.29.244-.795.326-1.514.247z"></path></svg>
            Search by #tags
          </span>
        </Link>
      </header>
      <ol style={{ listStyle: `none` }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-12">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const featuredimage = post.frontmatter.featuredimage?.replace("static/", "")

          return (
            <li key={post.fields.slug}>
              <Link to={`/blog${post.fields.slug}`}>
                <article
                  className="border-2 border-white dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-700 p-4 rounded-lg hover:shadow-lg h-full transition-shadow dark:transition-colors"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <div className={`h-48 w-full mb-4 rounded-lg bg-cover bg-center ${(featuredimage) ? "" : "bg-gray-200 dark:bg-gray-700"}`} style={{
                        backgroundImage: `${(featuredimage) ? `url(${featuredimage}` : ""})`
                      }}></div>
                    <h2 className="mb-2 text-lg font-bold dark:text-gray-200">{title}</h2>
                    <small className="bg-cyan-100 text-xs text-cyan-700 dark:bg-cyan-900 dark:text-cyan-400 px-3 py-2 rounded-md">{post.frontmatter.date}</small>
                  </header>
                  <section className="mt-4 text-gray-600 dark:text-gray-400">
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
          featuredimage
        }
      }
    }
  }
`
