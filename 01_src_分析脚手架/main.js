// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的母组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// vue.js与vue.runtime.xxx.js
// vue.js是完整版的vue，包含核心功能和模板解析器
// vue.runtime.xxx.js是运行版的vue，只包含核心功能，没有模板解析器，
//    所以它不能在vm里使用template配置项，需使用render函数接收到的createElement函数去指定具体内容

// 创建vue实例对象vm
new Vue({
  el:'#app',
  // 将App组件放入容器中
  render: h => h(App),
  // render(createElement){
  //   return createElement('h1','hello')
  // }

  // template:`<h1>hello</h1>`,
  // component:{App}
})