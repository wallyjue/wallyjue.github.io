import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainContent',
      component: MainContent
    }
  ]
})
