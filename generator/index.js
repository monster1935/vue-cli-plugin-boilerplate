module.exports = (api, options) => {

  require('./default');
  /** render options config templates */
  // 1. 是否开启element ui 组件库
  if (options.elementUI) {
    require('./element-ui')(api, options);
  }
  // 2. 是否开启全局状态管理
  if (options.vuex) {
    require('./store')(api, options);
  }
  // 3. 是否开启前端路由管理
  if (options.vueRouter) {
    require('./router')(api, options);
  }
  // 4. 是否开启vue-meta
  if (options.vueMeta) {
    require('./vue-meta')(api, options);
  }
  // 5. 是否开启 svg-icon
  if (options.svgIcon) {
    require('./svg-icon')(api, options);
  }
};