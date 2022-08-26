<template>
  <div class="son">
    <h2>我是孙组件</h2>
    <Dialog/>
  </div>

</template>

<script>
import Dialog from '@/components/Dialog';

export default {
  name: 'Son',
  components: {
    Dialog
  }
};
</script>

<style scoped>
.son {
  background-color: green;
  padding: 10px;
}
</style>
