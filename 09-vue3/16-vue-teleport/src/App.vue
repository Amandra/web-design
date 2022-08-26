<template>
  <div class="app">
    <h2>我是 App 组件</h2>
    <Demo/>
  </div>
</template>

<script>
import Demo from '@/components/Demo';
import {provide, reactive} from 'vue';

export default {
  name: 'App',
  components: {
    Demo
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
