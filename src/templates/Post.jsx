import React from "react"
import Bio from "./../components/Bio"
import { kebabCase } from "lodash";
import { Link } from "gatsby"

const Post = ({ title, date, body, tags }) => {
  // add target="_blank" to all markdown links
  body.__html = body.__html.replaceAll("a href", 'a target="_blank" href');

    return (
      <>
        <article
        className="prose dark:prose-invert"
        itemScope
        itemType="http://schema.org/Article"
        >
        <header className="text-center">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{date}</p>
          <h1 className="mb-4">{title}</h1>
          <div className="break-words">
          {(tags && tags.length) ? tags.map(tag => {
            return (
              <Link to={`/tags/${kebabCase(tag)}/`}>
                <small className="inline-block text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-400 px-3 py-2 rounded-md mx-2 mb-2">#{tag}</small>
              </Link>
            );
          }) : <></>}
          </div>
        </header>
        <hr />
        <section
          dangerouslySetInnerHTML={body}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <Bio />
      </>
    )
  }
  
export default Post