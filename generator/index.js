module.exports = (api, options) => {

  /** render fixed config templates */
  api.render('./template')

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
};