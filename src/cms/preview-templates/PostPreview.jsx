import React from "react"
import PropTypes from "prop-types"

const PostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);

  console.log(date);

  return (
    <>
      <article
        className="prose md:prose-lg dark:prose-invert"
        itemScope
        itemType="http://schema.org/Article"
        style={{margin: "auto"}}
      >
        <header style={{textAlign: "center"}}>
          {/* <p className="mb-2 text-gray-500 dark:text-gray-400">{date}</p> */}
          <h1>{title}</h1>
        </header>
        <hr />
        <section>{widgetFor('body')}</section>
      </article>
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
