import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { scrollToTop: true },
    component: () => import("@/views/Home")
  },
  {
    path: '/gallery',
    name: 'Gallery',
    meta: { scrollToTop: true },
    component: () => import("@/views/Gallery")
  },
  {
    path: '/inprint',
    alias: '/impressum',
    name: 'Inprint',
    meta: { scrollToTop: true },
    component: () => import("@/views/Inprint")
  },
  {
    path: '*',
    name: '404',
    meta: { scrollToTop: true },
    component: () => import("@/views/404.vue")
  },
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior 
})

export default router
