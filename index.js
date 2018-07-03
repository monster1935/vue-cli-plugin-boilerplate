module.exports = (api, options) => {
  console.log('vue-boilplate-plugin');
  if (options.svgIcon) {
    console.log('config webpack')
    const svgoLoaderConfig = require('svg-sprite-icon/svgo-loader.conf');
    api.chainWebpack(webpackConfig => {
      const svgRule = webpackConfig.module
        .rule('svg')
          .test(/\.svg$/)
          .include
            .add(filepath => {
              return /src\/assets\/icons/.test(filepath);
            })
            .end()
          .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
              symbolId: 'icon-[name]'
            })
            .end()
          .use('svgo-loader')
            .loader('svgo-loader')
            .options(svgoLoaderConfig)
    });
  }
};