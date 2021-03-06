// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App.vue'
import store from './store'
import { Group, Cell, ConfirmPlugin, XButton, AjaxPlugin, LoadingPlugin, AlertPlugin, ToastPlugin } from 'vux'
FastClick.attach(document.body)
Vue.config.productionTip = false

// 全局注册（以插件形式）
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

// 全局注册（以组件形式）
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-button', XButton)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
