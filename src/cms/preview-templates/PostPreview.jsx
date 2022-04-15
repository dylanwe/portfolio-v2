import React from "react"
import PropTypes from "prop-types"
import Bio from "../../components/Bio"

const PostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  
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
        <section dangerouslySetInnerHTML={widgetFor('body')} itemProp="articleBody" />
        <hr />
      </article>
      <Bio />
    </>
  )
}

PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PostPreview
