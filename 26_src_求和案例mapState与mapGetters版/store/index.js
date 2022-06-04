// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex"
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作(业务逻辑)
const actions = {
    // increment(context,value){
    //     context.commit('INCREMENT',value)
    // },
    // decrement(context,value){
    //     context.commit('DECREMENT',value)
    // },
    incrementOdd(context,value){
        if(context.state.sum % 2){
            context.commit('INCREMENT',value)
        }
    },
    incrementWait(context,value){
        setTimeout(() => {
            context.commit('INCREMENT',value)
        },300)
    },
}
// 准备mutations--用于操作数据（state）（功能实现）
const mutations = {
    INCREMENT(state,value){
        state.sum += value
    },
    DECREMENT(state,value){
        state.sum -= value
    }
}
// 准备state--用于存储数据(数据源)
const state = {
    sum:0,  // 当前的和
    school:'尚硅谷',
    subject:'前端'
}
// 准备getters--用于将state里的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum*10
    }
}

// Vm: new Vue()
// store: new Vuex.Store()

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})