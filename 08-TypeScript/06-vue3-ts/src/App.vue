<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
// defineComponent 函数目的是定义一个组件
import {defineComponent} from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
// 暴露一个定义好的组件
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
