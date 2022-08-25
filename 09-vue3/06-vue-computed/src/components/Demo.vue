<template>
  <h1>我是 Demo 组件</h1>
  <div>姓：<input v-model="person.firstName" type="text"></div>
  <div>名：<input v-model="person.lastName" type="text"></div>
  <div>全名：{{ person.fullName }}</div>
  <div>全名：<input v-model="person.fullName" type="text"></div>
</template>

<script>
import {computed, reactive} from 'vue';

export default {
  name: 'Demo',
  setup() {
    // 数据
    const person = reactive({
      firstName: '张',
      lastName: '三'
    });
    // 计算属性（简写）
    /*
        person.fullName = computed(() => {
          return person.firstName + '-' + person.lastName;
        });
    */

    // 计算属性（完整写法）
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value) {
        const [firstName, lastName] = value.split('-');
        person.firstName = firstName;
        person.lastName = lastName;
      }
    });

    return { // 返回一个对象
      person,
    };
  }
};
</script>

<style scoped>

</style>
