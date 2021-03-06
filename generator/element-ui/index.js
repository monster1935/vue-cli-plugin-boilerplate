const utils = require('../utils');

module.exports = (api, options) => {
  api.injectImports(api.entryFile, [
    `import ElementUI from 'element-ui';`,
    `import 'element-ui/lib/theme-chalk/index.css';`
  ]);
  api.postProcessFiles(files => {
    utils.injectOtherContents(api, files, 'Vue.use(ElementUI);');
  });  
 
  // add dependencies to the package.json
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.3.6'
    }
  });
};