<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data() {
    return {
      name: '苏州大学',
      address: '江苏省苏州市工业园区仁爱路199号',
    };
  },
  mounted() {
    this.$bus.$on('SENT_NAME', (data) => {
      console.log('School组件接收到的学生姓名是：', data);
    });
  }
};
</script>

<style>
.demo {
  background-color: pink;
}
</style>