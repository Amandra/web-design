<template>
  <h1>我是 Demo 组件</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下自定义hello事件</button>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: 'Demo',
  beforeCreate() {
    console.log('beforeCreate');
  },
  props: ['msg'],
  emits: ['hello'],
  setup(props, context) {
    console.log('setup', this); // setup undefined
    console.log('props', props);
    console.log('context.attrs', context.attrs); // 相当于 Vue2 中的 $attrs
    console.log('context.emit', context.emit); // 相当于 Vue2 中的 $emit
    const person = reactive({
      name: '张三',
      age: 18
    });

    function test() {
      context.emit('hello', 666);
    }

    return {
      person,
      test
    };
  }
};
</script>

<style scoped>

</style>
