<template>
  <Demo msg="你好啊" @hello="showHelloMsg"/>
</template>

<script>
import Demo from '@/components/Demo';

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    function showHelloMsg(value) {
      console.log(`触发了 hello 事件，收到的参数是 ${value}`);
    }

    return {
      showHelloMsg
    };
  }
};
</script>

<style>

</style>
