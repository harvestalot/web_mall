import Vue from 'vue'
import { Button, } from 'ant-design-vue'
import Login from './login.vue'

//引用公共资源
import '../../assets/js/common.js';

Vue.config.productionTip = false


Vue.use(Button)
new Vue({
  el: '#login',
  components: { Login },
  template: '<Login/>'
})