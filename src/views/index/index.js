// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './index.vue'
import VueLazyload from 'vue-lazyload'
import { Button, Menu, Form, Input, Checkbox, Select, Icon } from 'ant-design-vue'

import '../../assets/js/common.js';

import htmlToPdf from '@/assets/vendor/htmlToPdf'
Vue.use(htmlToPdf)


Vue.use(VueLazyload)
// Vue.use(VueLazyload,{
//     preLoad: 1.3,
//     error: 'dist/error.png',
//     loading: 'dist/loading.gif',
//     attempt: 1
// })

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Menu)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Index },
  template: '<Index/>'
})