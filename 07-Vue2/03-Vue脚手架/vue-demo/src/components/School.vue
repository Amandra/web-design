<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：</h2>
    <h2>学校地址：</h2>
    <button @click="showName">点我提示学校名称</button>
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
  },
  methods: {
    showName() {
      alert(this.name);
    }
  }
};
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: pink;
}
</style>