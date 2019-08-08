
// import 'iview/dist/styles/iview.css';
// import 'ant-design-vue/dist/antd.less';
// import '../../my-theme/index.less';
import '../css/common.css';

import Vue from 'vue'
import VueCookies from 'vue-cookies'
import { message } from 'ant-design-vue'


Vue.use(VueCookies)
Vue.prototype.$message = message

import http from '../../service/http.js'
import ports from '../../service/ports_api.js'
Vue.prototype.http = http
Vue.prototype.ports = ports

import '../../assets/js/iconfont.js';
import IconSvg from '@/components/icon-svg'
//全局注册icon-svg
Vue.component('icon-svg', IconSvg)