module.exports = (api, options) => {
  api.injectImports(api.entryFile, `import router from './router';`);
  api.injectRootOptions(api.entryFile, `router`);
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.0.1',
    },
  });
  api.render('./template');

  // rewrite src/App.vue
  api.postProcessFiles(files => {
    const appFile = files['src/App.vue'];
    if (appFile) {
      files['src/App.vue'] = appFile.replace(/^<template>[^]+<\/script>/,
        `<template>
        <div id="app">
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/pages/about">About</router-link>
          </div>
          <router-view/>
        </div>
      </template>`.trim()
      );
    }
  });
};