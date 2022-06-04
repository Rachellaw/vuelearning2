// 引入Vue
import Vue from 'vue'
// 引入App
import App from '../14_src_消息订阅与发布/App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()

// 创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})