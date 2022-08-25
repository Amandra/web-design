<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="add">点我+1</button>
  <br>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <br>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪水：{{ person.job.salary }}</h2>
  <button @click="person.name = '李四'">修改姓名</button>
  <button @click="person.age = 40">修改年龄</button>
  <button @click="person.job.salary++">修改薪水</button>
</template>

<script>
import {onBeforeUnmount, onMounted, onUnmounted, reactive, ref} from 'vue';

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let msg = ref('你好啊');
    const person = reactive({
      name: '张三',
      age: 20,
      job: {
        salary: 20
      }
    });

    function add() {
      sum.value++;
    }

    // 生命周期钩子
    onMounted(() => {
      console.log(`组件挂载完毕`);
    });

    onBeforeUnmount(() => {
      console.log(`组件卸载之前`);
    });

    onUnmounted(() => {
      console.log(`组件卸载完毕`);
    });

    return {
      sum,
      msg,
      person,
      add
    };
  }
};
</script>

<style scoped>

</style>
