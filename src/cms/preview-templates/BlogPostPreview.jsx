import React from 'react'
import { Template } from './../../components/layout'

const BlogPostPreview = ({ entry, widgetFor }) => {

  return (
    <Template
      body={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      date={new Date()}
    />
  )
}

export default BlogPostPreview