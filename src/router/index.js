import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/HomePage'
import PaymentsPage from '../pages/PaymentsPage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'index',
      component: HomePage
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsPage,
    },
  ]
})

export default router
