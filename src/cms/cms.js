import CMS from 'netlify-cms-app'
import markdownStyle from './../styles/markdown-body.css'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewStyle(markdownStyle.toString(), { raw: true });

