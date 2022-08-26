<template>
  <div>
    <h2>当前求和为 {{ sum }}</h2>
    <button @click="sum++">点我+1</button>
    <br>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪水：{{ job.salary }}</h2>
    <button @click="name += '@'">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.salary++">修改薪水</button>
    <button @click="showRaw">显示原始的Person</button>
  </div>
</template>

<script>
import {reactive, ref, toRaw, toRefs} from 'vue';

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: '张三',
      age: 20,
      job: {
        salary: 20
      }
    });

    function showRaw() {
      // 将一个由reactive生成的响应式对象转为普通对象
      console.log(toRaw(person));
    }

    return {
      sum,
      showRaw,
      ...toRefs(person)
    };
  }
};
</script>

<style scoped>

</style>
