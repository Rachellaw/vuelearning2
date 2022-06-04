<template>
  <div class="category">
      <h1>当前求和为：{{sum}}</h1>
      <h3>当前求和放大10倍为：{{bigSum}}</h3>
      <h3>我在{{school}}，学{{subject}}</h3>
      <h3 style="color:red">person组件总人数是：{{personList.length}}</h3>
      <select v-model.number="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="increment(number)">+</button>
      <button @click="decrement(number)">-</button>
      <button @click="incrementOdd(number)">当前求和为奇数再加</button>
      <button @click="incrementWait(number)">等一等再加</button>
</div>
</template>

<script>
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name:'MyCount',
    data(){
        return {
            number:1, //用户选择的数字
        }
    },
    computed: {
        // 借助mapState生成计算属性，从state中映射数据（数组写法）
        ...mapState(['sum','school','subject','personList']),
        // 借助mapGetters生成计算属性，从getters中映射数据（数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
        // 借助mapMutations生成对应方法，方法中会调用commit去联系Mutations（对象写法）
        ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),
        // 借助mapActions生成对应方法，方法中会调用dispatch去联系Actions（数组写法）
        ...mapActions(['incrementOdd','incrementWait']),
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