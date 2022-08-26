<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="name = '李四'">修改姓名</button>
  <button @click="age = 40">修改年龄</button>
  <button @click="job.salary++">修改薪水</button>
</template>

<script>
import {shallowReactive, toRefs} from 'vue';

export default {
  name: 'Demo',
  setup() {
    // 如果一个对象结构，结构比较深，但是变化的只是最外层属性，那么就可以使用 shallowReactive
    const person = shallowReactive({
      name: '张三',
      age: 20,
      job: {
        salary: 20
      }
    });

    return {
      ...toRefs(person)
    };
  }
};
</script>

<style scoped>

</style>
