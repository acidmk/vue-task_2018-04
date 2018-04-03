import Vue from 'vue'
import Router from 'vue-router'
import AddFieldPage from '@/components/AddFieldPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddFieldPage',
      component: AddFieldPage
    }
  ]
})
