import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      login: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView,
    meta: {
      login: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      login: false
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  //   meta: {
  //     login: true
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(( to, from, next ) => {
  const authRequired = to.meta.login
  if ( authRequired ) {
    next("/login")
  }
  next()
})

export default router
