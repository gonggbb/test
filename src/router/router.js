
// import Home from '../views/Home.vue'
const routes = [
        {
                path: '/',
                redirect:"/login",
             
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
         },
        {
                // path: '/',
                path: '/login',
                name: 'login',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
         },
         {
                path: '/main',
                name: 'main',
                redirect: '/main/home', //子路由从定向
               component: () => import(/* webpackChunkName: "about" */ '../views/main.vue'),
               meta: {
                       requireAuth: true
               },
               children:[
                {
                        
                        path: 'home',
                        name: 'home',//不加/
                       component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
                       meta: {
                               requireAuth: true
                       }
                      },
                    
                      {
                        path: 'element',
                        name: 'element',
                        meta: {
                              requireAuth: true
                       },
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "about" */ '../views/element.vue')
                      },
                      {
                        path: 'echart',
                        name: 'echart',
                        meta: {
                              requireAuth: true
                       },
                        // route level code-splitting
                        // this generates a separate chunk (about.[hash].js) for this route
                        // which is lazy-loaded when the route is visited.
                        component: () => import(/* webpackChunkName: "about" */ '../views/echart.vue')
                      }
               ]
         },
         {
                path: '/404',
                name: 'notFound',
                component: () =>
                    import( /* webpackChunkName: "about" */ '../views/NotFound')
         },
         {
             path: '*', // 此处需特别注意置于最底部
             redirect: '/404'
         }
       
      ]
    export default routes