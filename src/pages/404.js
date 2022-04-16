import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} pageType="post">
      <Seo title="404: Not Found" />
      <div className="text-center pt-[30vh]">
        <h1 className="text-5xl font-bold mb-2 text-gray-800 dark:text-white">404: Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
