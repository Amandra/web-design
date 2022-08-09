<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名称</button>
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
  methods: {
    showName() {
      alert(this.name);
    }
  }
};
</script>

<style>
.demo {
  background-color: pink;
}
</style>