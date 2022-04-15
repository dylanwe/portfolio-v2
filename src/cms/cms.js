import CMS from 'netlify-cms-app';
import PostPreview from './preview-templates/PostPreview';
import globalCSS from './../styles/global.css'
import codeHighlights from './../styles/one-dark.css'

CMS.registerPreviewStyle(globalCSS.toString(), { raw: true });
CMS.registerPreviewStyle(codeHighlights.toString(), { raw: true });

CMS.registerPreviewTemplate('blog', PostPreview)
CMS.registerPreviewTemplate('projects', PostPreview)