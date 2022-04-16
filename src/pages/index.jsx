import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <>
    <Nav />
    <span class="absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex md:left-[-20vh] -top-24 w-[640px] h-[640px]"></span>
    <div className="mt-36 px-4 max-w-3xl mx-auto min-h-[calc(100vh-6rem)]">
      <header className="text-center">
        <div className="flex justify-center items-center w-full">
          <StaticImage
            className="bio-avatar h-auto w-full animate-[wiggle_4s_ease-in-out_infinite]"
            layout="fixed"
            objectFit="cover"
            formats={["auto", "webp", "avif"]}
            src="../images/logo.svg"
            width={100}
            height={100}
            quality={95}
            objectPosition="50% 50%"
            alt="Profile picture"
            />
        </div>
        <h1 className="my-6 text-5xl font-bold dark:text-white">Hi 👋 I’m Dylan!</h1>
        <p className="text-2xl font-bold text-gray-700 dark:text-gray-400">I’m a software engineer student at the <a className="text-gray-400 dark:text-gray-300 underline" href="https://www.hva.nl">Amsterdam University of Applied Sciences</a> and I enjoy programming and reading.</p>
        <div className="mt-4">
          <Link to="/projects"><button className="bg-cyan-500 px-4 py-2 text-white rounded-lg hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-colors">Projects</button></Link>
        </div>
    </header>
      <main className="my-12 grid grid-cols-2 gap-4 auto-rows-fr">
        <div className="text-gray-800 border border-gray-200 dark:text-gray-400 dark:border-gray-600 rounded-lg p-4">
          <p>🌎 Speaks Duth and English</p>
        </div>
        <div className="text-gray-800 border border-gray-200 dark:text-gray-400 dark:border-gray-600 rounded-lg p-4">
          <p>💻 Prev. Web-developer intern @ <a href="https://www.otys.nl" className="underline font-medium text-gray-400 dark:text-gray-300">Otys</a></p>
        </div>
        <div className="text-gray-800 border border-gray-200 dark:text-gray-400 dark:border-gray-600 rounded-lg p-4">
          <p>🎓 Graduate Web designer @ <a href="https://www.glu.nl/opleiding/webdesign/" className="underline font-medium text-gray-400 dark:text-gray-300">GLU</a></p>
        </div>
        <div className="text-gray-800 border border-gray-200 dark:text-gray-400 dark:border-gray-600 rounded-lg p-4">
          <p>👨‍💻 1st year Software Engineer @ <a href="https://www.hva.nl" className="underline font-medium text-gray-400 dark:text-gray-300">HVA</a></p>
        </div>
      </main>
      <section className="my-12">
        <p className="text-gray-800 dark:text-gray-400">
          You can find me on <a href="https://www.linkedin.com/in/dylan-weijgertze/" className="underline font-medium text-gray-400 dark:text-gray-300">LinkedIn</a> or have a look at my code on <a href="https://github.com/dylanwe" className="underline font-medium text-gray-400 dark:text-gray-300">Github</a>.
        </p>
        
      </section>
    </div>
    <span class="absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex right-[-20vh] top-[24vh] w-[640px] h-[640px]"></span>
  <Footer />
  </>
)

export default IndexPage