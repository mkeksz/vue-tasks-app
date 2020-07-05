import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'ListTasks',
    meta: {layout: 'EmptyLayout'},
    component: () => import('@/views/ListTasks'),
  },
  {
    path: '/add',
    name: 'NewTask',
    meta: {layout: 'EmptyLayout'},
    component: () => import('@/views/NewTask'),
  },
  {
    path: '/task/:id',
    name: 'task',
    meta: {layout: 'EmptyLayout'},
    component: () => import('@/views/Task.vue')
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
