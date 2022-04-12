import CMS from 'netlify-cms-app'

import markdownStyle from './../styles/markdown-body.css'

CMS.init()
var PostPreview = createClass({
    render: function() {
      const { entry, getAsset, widgetsFor } = this.props
      const imagePath = entry.getIn(['data', 'image'])
      const image = getAsset(imagePath)
      return h('div', { className: 'markdown-body' });
    }
  })

  CMS.registerPreviewTemplate('blog', PostPreview)
  CMS.registerPreviewTemplate('projects', PostPreview)
CMS.registerPreviewStyle(markdownStyle.toString(), { raw: true });

