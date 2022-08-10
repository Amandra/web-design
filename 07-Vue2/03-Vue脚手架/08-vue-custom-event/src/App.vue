<template>
  <div>
    <h1>{{ msg }}</h1>
    <School :getSchoolName="getSchoolName"/>
    <Student/>
  </div>
</template>

<script>
import School from '@/components/School';
import Student from '@/components/Student';

export default {
  name: 'App',
  data() {
    return {
      msg: '你好啊'
    };
  },
  methods: {
    getSchoolName(name) {
      console.log('App收到了学校的名称：', name);
    }
  },
  components: {
    School,
    Student
  }
};
</script>

<style>
</style>
