<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="add">点我+1</button>
  <br>
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
</template>

<script>
import {ref, watch} from 'vue';

export default {
  name: 'Demo',
  setup() {
    let sum = ref(0);
    let msg = ref('你好啊');

    // 情况①：监视 ref 所定义的响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    function add() {
      sum.value++;
    }

    return {
      sum,
      msg,
      add
    };
  }
};
</script>

<style scoped>

</style>
