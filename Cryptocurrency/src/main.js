// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFlexboxgrid from 'vue-flexboxgrid'

Vue.use(VueFlexboxgrid)
Vue.config.productionTip = false
import('vue-flexboxgrid/dist/vue-flexboxgrid.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
