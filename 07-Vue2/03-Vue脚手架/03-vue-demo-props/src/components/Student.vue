<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    console.log(this);
    return {
      msg: '学生',
    };
  },
  // props: ['name', 'sex', 'age'] // 简单声明接收

  /*props: { // 接收的同时对数据进行类型限制
    name: String,
    sex: String,
    age: Number
  }*/

  props: { // 接收的同时对数据进行：类型限制 + 必要性限制 + 默认值的指定
    name: {
      type: String, // name 的类型是字符串
      required: true // name 是必须的
    },
    sex: {
      type: String, // sex 的类型是字符串
      required: true // sex 是必须的
    },
    age: {
      type: Number, // age 的类型是数值
      default: 99 // 默认值
    }
  }
};
</script>

<style scoped>

</style>