import Vue from 'vue'
import Router from 'vue-router'
import management_center from './management_center'

Vue.use(Router)

export default new Router({
  routes: [
      ...management_center,//管理中心
  ]
})
