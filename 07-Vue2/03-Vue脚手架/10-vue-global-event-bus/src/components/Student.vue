<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendName">将学生姓名发送给学校组件</button>
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
    sendName() {
      this.$bus.$emit('SENT_NAME', this.name);
    }
  }
};
</script>

<style scoped>

</style>