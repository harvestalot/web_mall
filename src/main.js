// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import router from './router'


// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

/**
 * 日期格式化 xxxx-xx-xx
 * date     Date类型
 */
exports.formatDate = function (date) {
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
/**
 * 时分秒日期格式化 xxxx-xx-xx xx:xx:xx
 * date     Date类型
 */
exports.formatDateTime = function (date) {
    const Y = date.getFullYear();
    let M = date.getMonth() + 1;
    M = M < 10 ? '0' + M : M;
    let D = date.getDate();
    D = D < 10 ? ('0' + D) : D;
    let h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    let m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return Y + '-' + M + '-' + D + " " + h + ":" + m + ":" + s;
}