<template>
  <div>
    <button @click="isShow = true">点我弹个窗</button>
    <div v-if="isShow" class="dialog">
      <h2>我是一个弹窗</h2>
      <h4>一些内容</h4>
      <button @click="isShow=false">关闭弹窗</button>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false);

    return {isShow};
  }
};
</script>

<style scoped>
.dialog {
  width: 300px;
  height: 300px;
  background-color: orange;
}
</style>
