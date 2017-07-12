import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Helloworld from '@/widgets/HelloWorld'
import showDetail from '@/widgets/showDetail'
import seller from '@/widgets/seller'

Vue.use(VueRouter)
Vue.use(VueResource)
console.log(Helloworld)
console.log(showDetail)
console.log(seller)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/helloWorld', component: Helloworld },
    { path: '/showDetail', component: showDetail },
    { path: '/seller', component: seller }
  ]
})

