module.exports = (api, options) => {
  // add svg-icon webpack config
  const svgoLoaderConfig = require('svg-sprite-icon/svgo-loader.conf');
  api.chainWebpack(webpackConfig => {
    const svgRule = webpackConfig.module.rule('svg');
    svgRule.uses.clear();
    svgRule.test(/\.svg$/).include.add(path.join(process.cwd(), '.', 'src/assets/icons'));
    svgRule.use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        });
    svgRule.use('svgo-loader')
        .loader('svgo-loader')
        .options(svgoLoaderConfig)
  });
};