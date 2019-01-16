// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import './assets/css/common.css'//自定义页面样式
import './assets/css/select.css'//自定义页面样式
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  //components: { App }  vue1.0的写法
  render: h => h(App)    //vue2.0的写法
}).$mount('#app')
