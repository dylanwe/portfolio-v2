import CMS from 'netlify-cms-app';
import PostPreview from './preview-templates/PostPreview';

CMS.init();

CMS.registerPreviewStyle('./../styles/cms.css', { raw: true });
CMS.registerPreviewStyle('./../styles/one-dark.css', { raw: true });

CMS.registerPreviewTemplate('blog', PostPreview)
CMS.registerPreviewTemplate('projects', PostPreview)
