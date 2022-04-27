import * as React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash";

import Layout from "../components/Layout"
import Seo from "../components/seo"

const TagRoute = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} pageType="overview">
      <Seo title={pageContext.tag} />
      <h1 className="text-3xl font-bold dark:text-gray-100 px-4">Results for {pageContext.tag}</h1>
      <ol style={{ listStyle: `none` }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-12">
        {posts.map((post) => {
          const title = post.node.frontmatter.title || post.node.fields.slug
          const featuredimage = post.node.frontmatter.featuredimage?.replace("static/", "")

          return (
            <li key={post.node.fields.slug}>
              <Link to={`/projects${post.node.fields.slug}`}>
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
                    <small className="bg-cyan-100 text-xs text-cyan-700 dark:bg-cyan-900 dark:text-cyan-400 px-3 py-2 rounded-md">{post.node.frontmatter.date}</small>
                  </header>
                  <section className="mt-4 text-gray-600 dark:text-gray-400">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.node.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <section className="mt-2 break-words">
                  {(post.node.frontmatter.tags && post.node.frontmatter.tags.length) ? post.node.frontmatter.tags.map(tag => {
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
  );
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
  }
`;