import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';

Vue.use(Router);

/**
 * 为路由添加前缀
 * https://github.com/vuejs/vue-router/issues/745
 *
 * @param {String} prefix 前缀
 * @param {Array} routes 路由数组
 */
function withPrefix(prefix, routes) {
  return routes.map((route) => {
    const newRoute = route;
    newRoute.path = `${prefix}/${route.path}`;
    return newRoute;
  });
}

// 路由列表
const routeList = [
  {
    path: 'about',
    name: 'about',
    component: About,
  },
];

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    ...withPrefix('/pages', routeList),
  ],
});
