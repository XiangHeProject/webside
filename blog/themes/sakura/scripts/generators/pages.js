/* global hexo */

'use strict';

const fs = require('fs');
const path = require('path');

// generate 404 page
if (!fs.existsSync(path.join(hexo.source_dir, '404.html'))) {
  hexo.extend.generator.register('_404', function(locals) {
    if (this.theme.config.page404.enable !== false) {
      return {
        path  : '404.html',
        data  : locals.theme,
        layout: '404'
      };
    }
  });
}