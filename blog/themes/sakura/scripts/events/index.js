'use strict';

hexo.on('generateBefore', () =>{
    require('./lib/hello.js')(hexo);
    require('./lib/lazyload.js')(hexo);
    require('./lib/highlight.js')(hexo);
    require('./lib/test.js')(hexo);
});