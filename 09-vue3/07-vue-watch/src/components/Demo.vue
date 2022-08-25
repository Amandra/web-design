<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="add">点我+1</button>
  <br>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <br>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="person.name = '李四'">修改姓名</button>
  <button @click="person.age = 40">修改年龄</button>
</template>

<script>
import {reactive, ref, watch} from 'vue';

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let msg = ref('你好啊');
    const person = reactive({
      name: '张三',
      age: 20,
    });

    // 情况①：监视 ref 所定义的响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }); */

    // 情况②：监视 ref 所定义多个的响应式数据
    /*watch([sum, msg], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });*/

    // 情况③：监视 reactive 所定义的响应式数据
    // 若 watch 监视的是 reactive 定义的响应式数据，则无法正确获得 oldValue！！
    // 若 watch 监视的是 reactive 定义的响应式数据，则强制开启了深度监视
    watch(person, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue);
    }, {immediate: true});

    function add() {
      sum.value++;
    }

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
