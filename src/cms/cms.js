import CMS from 'netlify-cms-app';
import PostPreview from './preview-templates/PostPreview';
import cmsCSS from './../styles/cms.css'
import codeHighlights from './../styles/one-dark.css'

CMS.registerPreviewStyle(cmsCSS.toString(), { raw: true });
CMS.registerPreviewStyle(codeHighlights.toString(), { raw: true });

CMS.registerPreviewTemplate('blog', PostPreview)
CMS.registerPreviewTemplate('projects', PostPreview)