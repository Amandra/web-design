<template>
  <div>
    <Student/>
    <School/>
    <h2>当前的n值是：<span v-text="n"></span></h2>
    <h2>放大10倍后的n值是：<span v-big="n"></span></h2>
    <button @click="n++">点我n+1</button>
  </div>
</template>

<script>
import School from '@/components/School';
import Student from '@/components/Student';

export default {
  name: 'App',
  data() {
    return {
      n: 1
    };
  },
  components: {
    School,
    Student
  },
};
</script>

<style>
</style>
