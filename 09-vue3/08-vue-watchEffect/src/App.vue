<template>
  <button @click="isShow = !isShow">显示/隐藏 Demo 组件</button>
  <Demo v-if="isShow"/>
</template>

<script>
import Demo from '@/components/Demo';
import {ref} from 'vue';

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    let isShow = ref(true);
    return {
      isShow
    };
  }
};
</script>

<style>

</style>
