import Vue from 'vue'
import router from '../../router'
import VueLazyload from 'vue-lazyload'
import { Button, Breadcrumb } from 'ant-design-vue'
import HomePage from './index.vue'
//引用公共资源
import '../../assets/js/common.js';

// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('../../assets//images/default_img.png'),
    loading: require('../../assets/images/loading.png'),
    attempt: 3
})


Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Breadcrumb)

new Vue({
    el: '#managementCenter',
    router,
    components: { HomePage },
    template: '<HomePage/>'
})