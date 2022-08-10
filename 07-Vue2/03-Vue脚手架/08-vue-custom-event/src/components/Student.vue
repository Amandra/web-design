<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">将学生姓名给 App 组件</button>
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