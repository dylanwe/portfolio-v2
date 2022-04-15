import React from 'react'
import PropTypes from 'prop-types'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <div className='prose dark:prose-invert'>
        {widgetFor('title')}
        {widgetFor('body')}
    </div>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview