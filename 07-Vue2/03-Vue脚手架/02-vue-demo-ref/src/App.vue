<template>
  <div>
    <h1 ref="title" v-text="msg"></h1>
    <button ref="btn" @click="showDom">点我输出上方的 dom 元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from '@/components/School';

export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎学习 Vue2.x'
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
      console.log(this.$refs.btn);
      console.log(this.$refs.sch);
    }
  },
  components: {
    School,
  }
};
</script>

<style>
</style>
