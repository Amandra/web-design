<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props ，实现子组件给父组件传递数据。 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件，实现子组件给父组件传递数据。 -->
    <!--<Student v-on:demo="getStudentName"/>-->
    <Student ref="student"/>
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
    },
    getStudentName(name) {
      console.log('App收到了学生的姓名：', name);
    }
  },
  mounted() {
    // 绑定自定义事件
    this.$refs.student.$on('demo', this.getStudentName);
  },
  components: {
    School,
    Student
  }
};
</script>

<style>
</style>
