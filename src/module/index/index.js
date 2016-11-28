import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '../../components/common/mHeader.vue'
import footer from '../../components/common/mFooter.vue'
// import 'assets/a.css'
// require('assets/a.css')

Vue.use(VueRouter)
import test1 from './add.vue'
import test2 from './list.vue'

// 创建一个路由器实例
// 并且配置路由规则
const routes = [
  { path: '/', component: test1 },
  { path: '/foo', component: test1 },
  { path: '/bar', component: test2 }
]
const router = new VueRouter({
  hashbang: false,
  history: true,
  routes
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #index 匹配的元素上。
/* eslint-disable no-new */
new Vue({
  router,
  components: {mHeader: header, mFooter: footer}
}).$mount('#index')
