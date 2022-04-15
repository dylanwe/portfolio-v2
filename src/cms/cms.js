import CMS from 'netlify-cms-app';
// import PostPreview from './preview-templates/PostPreview';
// import './../styles/cms.css'
// import codeHighlights from './../styles/one-dark.css'

CMS.init();

CMS.registerPreviewStyle('./../styles/cms.css', { raw: true });
CMS.registerPreviewStyle('./../styles/one-dark.css', { raw: true });

// CMS.registerPreviewTemplate('blog', PostPreview)
// CMS.registerPreviewTemplate('projects', PostPreview)


var PostPreview = createClass({
    render: function() {
      const { entry, getAsset, widgetsFor } = this.props
      const imagePath = entry.getIn(['data', 'image'])
      const image = getAsset(imagePath)
      return h('div', { className: 'prose' });
    }
  })

  CMS.registerPreviewTemplate('blog', PostPreview)
  CMS.registerPreviewTemplate('projects', PostPreview)