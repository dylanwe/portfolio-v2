import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
  <footer className="p-4 bg-gray-100 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Dylan © {new Date().getFullYear()}, 🚀 Tailwind, Gatsby & Netlify
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <Link to="/">
            <span className="mr-4 hover:underline md:mr-6 ">
                Home
            </span>
        </Link>
      </li>
      <li>
        <Link to="/projects">
            <span className="mr-4 hover:underline md:mr-6 ">
                Projects
            </span>
        </Link>
      </li>
      <li>
        <Link to="/blog">
            <span className="mr-4 hover:underline md:mr-6 ">
                Blog
            </span>
        </Link>
      </li>
      <li>
        <a href="admin/#/" className="hover:underline">
          Admin
        </a>
      </li>
    </ul>
  </footer>
  );
}

export default Footer
