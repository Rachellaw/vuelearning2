<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{gender}}</h2>
      <button @click="sendStudentName">把学生名给school组件</button>
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
        mounted(){
            // console.log('student',this.x)
        },
        methods:{
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
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