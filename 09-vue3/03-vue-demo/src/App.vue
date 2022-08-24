<template>
  <h1>我是 App 组件</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>工作薪水：{{ job.salary }}</h2>
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
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    });

    function changeInfo() {
      name.value = '李四';
      age.value = 20;
      job.value.type = 'Java工程师';
      job.value.salary = '60k';
      console.log('changeInfo', job.value);
    }

    return { // 返回一个对象（常用）
      name,
      age,
      job,
      changeInfo
    };
  }
};
</script>

<style>

</style>
