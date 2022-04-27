import * as React from "react"
import { kebabCase } from "lodash";
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const TagsIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const { group } = data.allMarkdownRemark;

    return (
        <Layout location={location} title={siteTitle} pageType="post">
            <Seo title="Search tags" />
            <h1 className="text-3xl font-bold dark:text-gray-100">Tags</h1>
            <ul className="mt-4">
              {group.map((tag) => (
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}> 
                  <li key={tag.fieldValue} className="flex justify-between mr-4 mb-2 bg-gray-50 text-gray-500 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:dark:bg-slate-600 p-2 rounded-lg px-4 transition-colors">
                      <span>#{tag.fieldValue}</span>
                      <span>({tag.totalCount})</span>
                  </li>
                </Link>
              ))}
            </ul>
        </Layout>
    );
}

export default TagsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___tags], order: DESC }) {
        group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
    }
  }
`