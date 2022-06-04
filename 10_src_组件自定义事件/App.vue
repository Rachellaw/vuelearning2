<template>
  <!-- 组件自定义事件是组件间通信方式，适用于女组件传递给母组件 -->
  <!-- 女组件传递数据给母组件，由母组件给女组件绑定自定义事件，事件回调存在母组件中，由女组件调用触发 -->
  <div class="app">
    <h1>{{msg}}，学生姓名是：{{studentName}}</h1>
    <!-- 通过母组件给女组件传递函数形式的props，实现女给母组件传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 给Student组件的实例对象VueComponent绑定了个atguigu事件，女组件触发这个atguigu事件，就会调用方法 -->
    <!-- 通过母组件给女组件绑定自定义事件，实现女给母组件传递数据 -->

    <!-- 第一种方法：使用v-on:或@ -->
    <!-- v-on:atguigu->v-on:atguigu.once 只能触发一次回调函数 -->
    <!-- <Student v-on:atguigu="getStudentName"/> -->

    <!-- 第二种方法：使用ref -->
    <!-- @click.native 为组件绑定一个原生DOM事件在根标签上 -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name:'App',
        components:{School,Student},
        data(){
          return {
            msg : '你好啊！',
            studentName:''
          }
        },
        methods:{
          getSchoolName(name){
            console.log('App收到了schoolname',name)
          },
          //name,...params 把name剩下的数据存到params数组里
          getStudentName(name,...params){
            console.log('App收到了studentname',name,params)
            this.studentName = name
          },
          show(){
            alert('123')
          }
        },
        mounted(){
          // this.$refs.student获取到student组件的VueComponet
          // $on('atguigu',this.getStudentName)当atguigu事件被触发时，调用getStudentName方法
          // $on-->$once 回调函数只能调用一次
          this.$refs.student.$on('atguigu',this.getStudentName)
        }
    }
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>