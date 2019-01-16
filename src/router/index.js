import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import lists from '@/pages/lists'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    },
    /*
    *下拉先择*
    */
    {
      path: '/selects',
      name: 'selects',
      component: function (resolve) {
        require(['../pages/selects'], resolve);
      },
    },   
  ]
})
