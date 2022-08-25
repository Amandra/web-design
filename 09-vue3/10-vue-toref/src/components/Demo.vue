<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="name = '李四'">修改姓名</button>
  <button @click="age = 40">修改年龄</button>
  <button @click="job.salary++">修改薪水</button>
</template>

<script>
import {reactive, toRefs} from 'vue';

export default {
  name: 'Demo',
  setup() {
    const person = reactive({
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
