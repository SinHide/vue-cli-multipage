import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../../components/common/mHeader.vue'
import footer from '../../components/common/mFooter.vue'
// import 'assets/a.css'
// require('assets/a.css')

Vue.use(VueRouter);
import test1 from './add.vue'
import test2 from './list.vue'

import v0 from './v0.vue'
import v1 from './v1.vue'
import v2 from './v2.vue'
import v3 from './v3.vue'
import v4 from './v4.vue'
import v5 from './v5.vue'
import v6 from './v6.vue'
import v7 from './v7.vue'
import v8 from './v8.vue'
import v9 from './v9.vue'
import v10 from './v10.vue'

// 创建一个路由器实例
// 并且配置路由规则
const routes = [
  { path: '/', component: test1 },
  { path: '/foo', component: test1 },
  { path: '/bar', component: test2 },
  { path: '/0', component: v0 },
  { path: '/1', component: v1 },
  { path: '/2', component: v2 },
  { path: '/3', component: v3 },
  { path: '/4', component: v4 },
  { path: '/5', component: v5 },
  { path: '/6', component: v6 },
  { path: '/7', component: v7 },
  { path: '/8', component: v8 },
  { path: '/9', component: v9 },
  { path: '/10', component: v10 }
];
const router = new VueRouter({
  hashbang: false,
  history: true,
  routes
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #index 匹配的元素上。
/* eslint-disable no-new */
new Vue({
  data: {
    message: 'parent'
  },
  router,
  components: {mHeader: header, mFooter: footer}
}).$mount('#index');
