<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">将学生姓名给 App 组件</button>
    <button @click="unbind">解绑 demo 事件</button>
    <button @click="dead">销毁当前Student组件的实例（VC）</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '许大仙',
      age: 18
    };
  },
  methods: {
    sendStudentName() {
      console.log('Student', this);
      // 触发 Student 组件实例身上的 demo 事件
      this.$emit('demo', this.name);
    },
    unbind() {
      this.$off('demo'); // 解绑一个自定义事件
      // this.$off(['demo', 'hehe']); // 解绑多个自定义事件
      // this.$off();// 解绑所有的自定义事件
    },
    dead() {
      //销毁了当前 Student 组件的实例，销毁后所有 Student 实例的自定义事件全部不奏效
      this.$destroy();
    }
  }
};
</script>

<style scoped>
.student {
  background-color: skyblue;
  padding: 5px;
  margin-top: 5px;
}
</style>