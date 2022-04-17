import React, { useState } from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { StaticImage } from "gatsby-plugin-image"

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
    <nav className="fixed bg-white top-0 z-50 w-full border-b-2 border-gray-200 py-2.5 rounded dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-6xl px-4 flex flex-wrap justify-between items-center mx-auto">
            <Link to="/">
                <StaticImage
                  layout="fixed"
                  objectFit="cover"
                  formats={["auto", "webp", "avif"]}
                  src="../images/logo.svg"
                  width={40}
                  height={40}
                  quality={95}
                  objectPosition="50% 50%"
                  alt="Profile picture"
                />
            </Link>
        <div className="flex md:order-2 ">
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <button onClick={() => (theme === "dark") ? toggleTheme("light") : toggleTheme("dark")} className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors">
                <span id="goLight" className="hidden dark:flex items-center">
                  <span  className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM1 9h2a1 1 0 1 1 0 2H1a1 1 0 0 1 0-2zm16 0h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm.071-6.071a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM5.757 14.243a1 1 0 0 1 0 1.414L4.343 17.07a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0zM4.343 2.929l1.414 1.414a1 1 0 0 1-1.414 1.414L2.93 4.343A1 1 0 0 1 4.343 2.93zm11.314 11.314l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 1 1 1.414-1.414z"></path></svg>
                  </span>
                </span>
                <span id="goDark" className="dark:hidden flex items-center content-center">
                  <span className="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" width="24" fill="currentColor"><path d="M2 10c0 4.43 3.478 8 7.742 8 .658 0 1.302-.085 1.922-.248-2.996-2.2-4.896-5.786-4.896-9.752 0-2.09.527-4.095 1.489-5.853C4.699 2.863 2 6.097 2 10zm6.768-2c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335A10.086 10.086 0 0 0 8.768 8z"></path></svg>
                  </span>
                </span>
              </button>
            )}
          </ThemeToggler>
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${(navIsOpen) ? "hidden" : ""} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`${(navIsOpen) ? "" : "hidden"} w-6 h-6`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${(navIsOpen) ? "" : "hidden"} justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
            <Link to="/">
              <span
                href="#"
                className="block py-2 text-gray-700 md:hover:bg-transparent md:border-0 hover:text-cyan-500 md:p-0 dark:text-gray-400 dark:hover:text-cyan-400 md:dark:hover:bg-transparent transition-colors"
              >
                Home
              </span>
              </Link>
            </li>
            <li>
            <Link to="/projects">
              <span
                href="#"
                className="block py-2 text-gray-700 md:hover:bg-transparent md:border-0 hover:text-cyan-500 md:p-0 dark:text-gray-400 dark:hover:text-cyan-400 md:dark:hover:bg-transparent transition-colors"
              >
                Projects
              </span>
              </Link>
            </li>
            <li>
            <Link to="/blog">
              <span
                href="#"
                className="block py-2 text-gray-700 md:hover:bg-transparent md:border-0 hover:text-cyan-500 md:p-0 dark:text-gray-400 dark:hover:text-cyan-400 md:dark:hover:bg-transparent transition-colors"
              >
                Blog
              </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="pt-[61px] md:pt-[49px]"></div>
    </>
  )
}

export default Nav
