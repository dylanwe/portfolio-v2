import React from "react"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout location={"/"} contained={true}>
    <div className="text-center mt-12">
      <h1 className="text-3xl font-medium">Homepage</h1>
      <p>Welcome to my Gatsby site.</p>
    </div>
  </Layout>
)

export default IndexPage