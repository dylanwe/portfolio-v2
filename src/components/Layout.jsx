import * as React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({ location, children, pageType }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let widthClass;

  if (pageType === "overview") {
    widthClass = "max-w-6xl mx-auto mt-12";
  } else if (pageType === "post") {
    widthClass = "max-w-2xl mx-auto mt-12";
  } else {
    widthClass = "";
  }

  return (
    <div data-is-root-path={isRootPath}>
      <Nav />
        <main className={`${widthClass} px-4 min-h-[calc(100vh-6rem)]`}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
