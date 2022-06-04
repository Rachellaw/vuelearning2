<template>
  <div class="category">
      <h1>当前求和为：{{sum}}</h1>
      <h3>当前求和放大10倍为：{{bigSum}}</h3>
      <h3>我在{{school}}，学{{subject}}</h3>
      <!-- .number强制将收到的数据转换成数字类型 -->
      <select v-model.number="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">当前求和为奇数再加</button>
      <button @click="incrementWait">等一等再加</button>
</div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    name:'MyCount',
    data(){
        return {
            number:1, //用户选择的数字
        }
    },
    computed: {
        // 借助mapState生成计算属性，从state中映射数据（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'})

        // 借助mapState生成计算属性，从state中映射数据（数组写法）
        ...mapState(['sum','school','subject']),

        // 借助mapGetters生成计算属性，从getters中映射数据（对象写法）
        // ...mapGetters({bigSum:'bigSum'})

        // 借助mapGetters生成计算属性，从getters中映射数据（数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
        increment(){
            this.$store.commit('INCREMENT',this.number)
        },
        decrement(){
            this.$store.commit('DECREMENT',this.number)
        },
        incrementOdd(){
            this.$store.dispatch('incrementOdd',this.number)
        },
        incrementWait(){
            this.$store.dispatch('incrementWait',this.number)
        },
    },
    mounted(){
        // mapState({sum:'sum',school:'school',subject:'subject'})
    }
}
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>