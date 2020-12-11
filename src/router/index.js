import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },{
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },{
    path: '/services',
    name: 'Services',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "services" */ '@/views/Services.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next ) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if (localStorage.getItem('jwt') === null){
      next({
        path: '/'
      })
    }else{
      next();
    }
  }else{
    next();
  }
})



export default router
