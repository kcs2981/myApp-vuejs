// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Index from './index.vue'

Vue.config.productionTip = false

new Vue({
  el: '#index',
  router,
  template: '<Index/>',
  components: { Index }
}).$mount('#index')

