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
import {reactive, ref, watch} from 'vue';

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
    /*watch(person, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue);
    }, {immediate: true});*/

    //情况④：监视 reactive 定义的响应式数据中的某个属性
    /*watch(() => person.age, (newValue, oldValue) => {
      console.log('person的age变化了', newValue, oldValue);
    }, {immediate: true, deep: true});*/

    //情况⑤：监视 reactive 定义的响应式数据中的某些属性
    /*watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue);
    }, {immediate: true, deep: true});*/

    // 特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person的job变化了', newValue, oldValue);
    }, {deep: true}); //此处由于监视的是 reactive 所定义的对象中的某个属性，所以 deep 配置有效

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
