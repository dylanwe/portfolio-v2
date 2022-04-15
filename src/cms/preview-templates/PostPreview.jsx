import React from 'react'
 import PropTypes from 'prop-types'

 const PostPreview = ({ entry, widgetFor }) => {
   const tags = entry.getIn(['data', 'tags'])
   return (
     <div className='prose'>
         {widgetFor('body')}
     </div>
   )
 }

 PostPreview.propTypes = {
   entry: PropTypes.shape({
     getIn: PropTypes.func,
   }),
   widgetFor: PropTypes.func,
 }

 export default PostPreview 