import React from 'react'
import PropTypes from 'prop-types'
import Post from '../../templates/Post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <div>
        <Post title={widgetFor('title')} date={widgetFor('date')} body={widgetFor('body')}/>
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