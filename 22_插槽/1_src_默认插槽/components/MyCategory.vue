<template>
  <div class="category">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽，等着使用者填充内容 -->
      <slot>没有填充内容时会显示标签中的文字</slot>
      <slot>没有填充内容时会显示标签中的文字</slot>
  </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title']
}
</script>

<style scoped>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>