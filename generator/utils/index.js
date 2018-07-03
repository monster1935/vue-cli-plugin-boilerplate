module.exports = {
  /**
   * @description main.js 中插入额外的代码内容
   * @param { Object } api genrator 实例对象
   * @param { Object } files 文件集对象
   * @param { String } code 待插入的代码内容
   */
  injectOtherContents: function(api, files, code) {
    // find last import tag in entry file
    const mainFile = files[api.entryFile];
    const lines = mainFile.split(/\r?\n/g).reverse();
    const lastImportIndex = lines.findIndex(line => line.match(/^import/));

    lines[lastImportIndex] += `\n`;
    lines[lastImportIndex] += `\n${code}`;
    
    // save the content
    files[api.entryFile] = lines.reverse().join('\n');
  }
};