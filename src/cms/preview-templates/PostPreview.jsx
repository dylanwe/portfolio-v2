import React from 'react'
import PropTypes from 'prop-types'
import Post from '../../templates/Post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <article
        className="prose dark:prose-invert"
        itemScope
        itemType="http://schema.org/Article"
        >
        <header className="text-center">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{widgetFor('date')}</p>
          <h1>{widgetFor('title')}</h1>
        </header>
        <hr />
        <section>{widgetFor('body')}</section>
        <hr />
      </article>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview