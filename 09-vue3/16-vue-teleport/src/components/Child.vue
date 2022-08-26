<template>
  <div class="child">
    <h2>我是子组件</h2>
    <Son/>
  </div>
</template>

<script>
import Son from '@/components/Son';

export default {
  name: 'Child',
  components: {
    Son
  }
};
</script>

<style scoped>
.child {
  background-color: pink;
  padding: 10px;
}
</style>
