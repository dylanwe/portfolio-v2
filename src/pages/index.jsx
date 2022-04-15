import React from "react"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout location={"/"} contained={true}>
    <div className="text-center my-12">
      <h1 className="text-3xl font-medium dark:text-white">Homepage</h1>
      <p className="dark:text-gray-400">Welcome to my Gatsby site.</p>
    </div>
  </Layout>
)

export default IndexPage