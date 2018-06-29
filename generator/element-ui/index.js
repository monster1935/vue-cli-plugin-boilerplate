module.exports = (api, options) => {
  api.postProcessFiles(files => {
    // find last import tag in entry file
    const mainFile = files[api.entryFile];
    const lines = mainFile.split(/\r?\n/g).reverse();
    const lastImportIndex = lines.findIndex(line => line.match(/^import/));

    // modify file content
    lines[lastImportIndex] += `\nimport ElementUI from 'element-ui';`;
    lines[lastImportIndex] += `\nimport 'element-ui/lib/theme-chalk/index.css';`;
    lines[lastImportIndex] += `\n`;
    lines[lastImportIndex] += `\nVue.use(ElementUI);`;
    
    // save the content
    files[api.entryFile] = lines.reverse().join('\n');
  });  
 
  // add dependencies to the package.json
  api.extendPackage({
    dependencies: {
      'element-ui': '^2.3.6'
    }
  });
};