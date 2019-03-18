import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import lists from '@/pages/lists'
Vue.use(Router)

export default new Router({
  /*
  *pc端
  */
  routes: [
    {
      path: '/pc',
      name: 'home',
      component: function (resolve) {
        require(['../pc/home'], resolve);
      },
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
