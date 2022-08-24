<template>
  <h1>我是 App 组件</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>

export default {
  name: 'App',
  // 此处只是测试一下 setup ，暂时不考虑响应式
  setup() {
    // 数据
    let name = '张三';
    let age = 18;

    // 方法
    function sayHello() {
      alert(`大家好，我的名字是 ${name}，我的年龄是 ${age}`);
    }

    return { // 返回一个对象（常用）
      name,
      age,
      sayHello
    };
  }
};
</script>

<style>

</style>
