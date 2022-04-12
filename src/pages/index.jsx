import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <main>
    <h1>Homepage</h1>
    <p>Welcome to my Gatsby site.</p>
    <Link to="/projects">go projects</Link>
    <br />
    <Link to="/blog">go blog</Link>
  </main>
)

export default IndexPage