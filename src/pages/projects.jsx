import * as React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash";

import Layout from "../components/Layout"
import Seo from "../components/seo"

const ProjectIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} pageType="overview">
        <Seo title="All projects" />
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">No Projects found</h2>
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
      <Seo title="All Projects" />
      <header className="flex justify-between items-end  px-4">
        <h1 className="text-3xl font-bold dark:text-gray-100">Projects</h1>
      </header>
      <ol style={{ listStyle: `none` }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-12">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const featuredimage = post.frontmatter.featuredimage?.replace("static/", "")

          return (
            <li key={post.fields.slug}>
              <Link to={`/projects${post.fields.slug}`}>
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
                  <section className="mt-2 break-words">
                    {(post.frontmatter.tags && post.frontmatter.tags.length) ? post.frontmatter.tags.map(tag => {
                      return (
                        <Link to={`/tags/${kebabCase(tag)}/`}>
                          <small className="inline-block text-xs mr-4 mb-2 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-slate-600 p-2 rounded-lg transition-colors">#{tag}</small>
                        </Link>
                      );
                    }) : <></>}
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

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        fields: {collection: {eq: "projects"}},
        frontmatter: {draft: {eq: false}}
      }
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
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
          tags
        }
      }
    }
  }
`
