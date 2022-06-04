<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{gender}}</h2>
      <button @click="sendStudentName">点击把student name传给App</button>
      <button @click="unbind">解绑atguigu事件</button>
      <button @click="death">销毁当前student组件的实例对象</button>
  </div>
</template>

<script>    
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                gender:'女'
            }
        },
        methods:{
            sendStudentName(){
                // 触发student组件实例对象上的atguigu事件
                // 传递多个数据
                this.$emit('atguigu',this.name,200,999,888)
            },
            unbind(){
                // 解绑atguigu事件
                this.$off('atguigu')
                // 解绑所有自定义事件
                // this.$off()
            },
            death(){
                // 销毁当前student组件的实例对象，销毁后student组件实例对象的所有自定义事件将不奏效
                this.$destroy()
            }
        }
    }
</script>

<style>
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>