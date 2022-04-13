import * as React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ location, children, contained }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Nav />
      <main className={`${(contained) ? "max-w-2xl mx-auto mt-12" : ""} px-4 prose dark:prose-invert`}>{children}</main>
      <br />
      <p>{contained}</p>
      <br />
      <Footer />
    </div>
  )
}

export default Layout
