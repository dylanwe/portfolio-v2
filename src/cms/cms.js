import CMS from 'netlify-cms-app';
import PostPreview from './preview-templates/PostPreview';

CMS.init();

CMS.registerPreviewStyle('./../styles/cms.css', { raw: true });
CMS.registerPreviewStyle('./../styles/prismTheme.css', { raw: true });

CMS.registerPreviewTemplate('projects', PostPreview)
