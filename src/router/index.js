import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router";

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
}

// const router = new VueRouter({
//         routes
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
          // 判断该路由是否需要登录权限
          if (localStorage.getItem('loginSuccess')) {
                  console.log(to,to.meta.requireAuth,"!!!!!!!!!!!!!!!!")
                  next()
          } else {
                  next('/login');
                  // next({
                  //      path: "/login",
                  //      // 将跳转的路由path作为参数，登录成功后跳转重定向到该路由
                  //      query: {
                  //              redirect: to.fullPath
                  //      }
                  // });
          }
  } else {
          next()
  }
})

export default router
