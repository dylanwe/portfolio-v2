import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="py-6 bg-gray-100 dark:bg-gray-900">
    <div className="w-full max-w-6xl mx-auto md:flex md:items-center text-center md:justify-between px-4">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Dylan © {new Date().getFullYear()}, 🚀 Tailwind, Gatsby & Netlify
      </span>
      <ul className="flex flex-wrap justify-center md:justify-end items-center mt-3 text-sm text-gray-500 dark:text-gray-400 md:mt-0">
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
    </div>
  </footer>
);

export default Footer
