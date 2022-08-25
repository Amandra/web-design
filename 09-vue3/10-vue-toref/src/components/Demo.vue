<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ salary }}</h2>
  <button @click="name = '李四'">修改姓名</button>
  <button @click="age = 40">修改年龄</button>
  <button @click="salary++">修改薪水</button>
</template>

<script>
import {reactive, toRef} from 'vue';

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

    console.log(toRef(person, 'name'));

    return {
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job, 'salary'),
    };
  }
};
</script>

<style scoped>

</style>
