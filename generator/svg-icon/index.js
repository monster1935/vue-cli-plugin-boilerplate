const utils = require('../utils');

module.exports = (api, options) => {
  api.injectImports(api.entryFiles, `import SvgIcon from 'svg-sprite-icon;`);

  api.postProcessFiles(files => {
    utils.injectOtherContents(api, files, 'Vue.use(SvgIcon);');
  });  
 
  // add dependencies to the package.json
  api.extendPackage({
    dependencies: {
      'svg-sprite-icon': '^1.0.4',
      'svg-sprite-loader': '^3.8.0',
      'svgo': '^1.0.5',
      'svgo-loader': '^2.1.0'
    }
  });
};