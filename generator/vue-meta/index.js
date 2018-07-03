const utils = require('../utils');

module.exports = (api, options) => {
  api.injectImports(api.entryFile, `import Meta from 'vue-meta';`);
  api.postProcessFiles(files => {
    utils.injectOtherContents(api, files, 
`// 启用 vue-meta 插件
Vue.use(Meta, {
  keyName: 'head',
});`
    );
  });  
 
  // add dependencies to the package.json
  api.extendPackage({
    dependencies: {
      'vue-meta': '^1.3.1'
    }
  });
};