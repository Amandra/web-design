<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码(数据、方法等)
export default {
  name: 'School',
  data() {
    return {
      name: '苏州大学',
      address: '江苏省苏州市工业园区仁爱路199号',
    };
  }
};
</script>

<style>
/* 组件的样式 */
.school {
  background-color: pink;
  padding: 5px;
}
</style>