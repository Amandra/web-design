<template>
  <div class="todo-header">
    <input placeholder="请输入你的任务名称，按回车键确认" type="text" @keyup.enter="addTodo"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';

export default {
  name: 'Header',
  methods: {
    addTodo(event) {
      // 将用户的输入包装成为一个 todo 对象
      const todo = {id: nanoid(), name: event.target.value, done: false};
      console.log(todo);
    }
  }
};
</script>

<style lang="less" scoped>
.todo-header {
  input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  &:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
}
</style>