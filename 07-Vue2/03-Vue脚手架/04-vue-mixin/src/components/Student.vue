<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 引入混合
import Mixin from '@/mixin';

export default {
  name: 'Student',
  data() {
    return {
      name: '许大仙',
      age: 18
    };
  },
  mixins: [Mixin]
};
</script>

<style scoped>

</style>