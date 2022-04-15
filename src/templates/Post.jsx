import React from "react"
import Bio from "./../components/Bio"

const Post = ({ title, date, body }) => {
    return (
      <>
        <article
        className="prose dark:prose-invert"
        itemScope
        itemType="http://schema.org/Article"
        >
        <header className="text-center">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{date}</p>
          <h1>{title}</h1>
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