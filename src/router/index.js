import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import index from '@/dashboard/index'
import index2 from '@/dashboard/index_2'
import index3 from '@/dashboard/index_3'
import form from '@/form/form'
import form1 from '@/form/form_1'
import form2 from '@/form/form_2'
import formValidate from '@/plugin/formValidate'
import layer from '@/plugin/layer'
import table from '@/plugin/table'
import button from '@/buttonicon/button'
import icon from '@/buttonicon/icon'

Vue.use(VueRouter)
Vue.use(VueResource)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/index', component: index },
    { path: '/index2', component: index2 },
    { path: '/index3', component: index3 },
    { path: '/form', component: form },
    { path: '/form1', component: form1 },
    { path: '/form2', component: form2 },
    { path: '/formValidate', component: formValidate },
    { path: '/layer', component: layer },
    { path: '/table', component: table },
    { path: '/button', component: button },
    { path: '/icon', component: icon },
    { path: '/', component: index }
  ]
})

