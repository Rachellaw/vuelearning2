<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 适用于任意组件通信
// 安装第三方库pubsub--引入--接收方订阅信息pubsub.subscribe并写回调函数--发送方发布信息pubsub.publish
// 在beforeDestroy钩子中pubsub.unsubscribe取消订阅
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data() {
            return {
                name:'尚硅谷',
                address:'北京昌平'
            }
        },
        mounted(){
            // console.log('school',this)
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我是school组件 我收到了data：',data)
            // })
            this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
                console.log('有人发布了hello消息，hello消息的回调被执行了',msgName,data)
            })
        },
        beforeDestroy(){
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>