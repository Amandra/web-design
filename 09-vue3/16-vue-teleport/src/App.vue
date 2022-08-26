<template>
  <div class="app">
    <h2>我是 App 组件</h2>
    <Child/>
  </div>
</template>

<script>
import {provide, reactive} from 'vue';
import Child from '@/components/Child';

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {

    const car = reactive({name: '奔驰', price: '45W'});

    provide('car', car);

    return {};
  }
};
</script>

<style>
.app {
  background-color: skyblue;
  padding: 10px;
}
</style>
