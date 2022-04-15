import CMS from 'netlify-cms-app';
import PostPreview from './preview-templates/PostPreview';

CMS.registerPreviewStyle("../styles/global.css");
CMS.registerPreviewStyle("../src/styles/one-dark.css");
CMS.registerPreviewTemplate('blog', PostPreview)
CMS.registerPreviewTemplate('projects', PostPreview)