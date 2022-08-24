<template>
  <h1>我是 App 组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>

import {ref} from 'vue';

export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('张三');
    let age = ref(18);

    function changeInfo() {
      name.value = '李四';
      age.value = 20;
      console.log('changeInfo', name, age);
    }

    return { // 返回一个对象（常用）
      name,
      age,
      changeInfo
    };
  }
};
</script>

<style>

</style>
