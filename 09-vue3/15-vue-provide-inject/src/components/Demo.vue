<template>
  <div class="demo">
    <h2>我是 Demo 组件</h2>
    <ul>
      <li>汽车名称：{{ name }}</li>
      <li>汽车价格：{{ price }}</li>
    </ul>
  </div>
</template>

<script>

import {inject, toRefs} from 'vue';

export default {
  name: 'Demo',
  setup() {
    const car = inject('car');
    return {
      ...toRefs(car)
    };
  }
};
</script>

<style scoped>
.demo {
  background-color: pink;
  padding: 10px;
}
</style>
