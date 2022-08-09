<template>
  <ul class="todo-main">
    <Item v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<script>
import Item from '@/components/Item';

export default {
  name: 'List',
  components: {
    Item
  },
  props: ['todoList']
};
</script>

<style lang="less" scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>