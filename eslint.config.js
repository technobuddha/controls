// 🚨
// 🚨 CHANGES TO THIS FILE WILL BE OVERRIDDEN
// 🚨
// @ts-check
import { lint } from '@technobuddha/project';

export default lint({ files: ['*.js'], platform: 'node' }, { files: ['*.md'], markdown: true });
