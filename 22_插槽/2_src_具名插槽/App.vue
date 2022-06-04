<template>
  <div class="container">
      <MyCategory title="美食">
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        <a slot="footer" href="">更多美食</a>
      </MyCategory>
      <MyCategory title="游戏">
        <ul slot="center">
          <li v-for="(game,index) in games" :key="index">{{game}}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="">单击游戏</a>
          <a href="">网络游戏</a>
        </div>
      </MyCategory>
      <MyCategory title="电影">
        <video slot="center" controls src="http://clipsvorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <div class="foot" slot="footer">
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观影</h4>
      </MyCategory>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory'
export default {
    name:'App',
    components:{ MyCategory},
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《你好，李焕英》','《拆弹专家》','《明星大侦探》']
      }
    },
}
</script>

<style scoped>
  .container,footer,h4 {
    display: flex;
    justify-content: space-around;
  }

  video {
    width: 100%;
  }

  img {
    width: 100%;
  }
</style>