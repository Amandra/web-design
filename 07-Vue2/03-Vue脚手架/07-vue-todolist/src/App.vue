<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 头部组件 -->
        <Top :addTodo="addTodo"/>
        <!-- 列表组件 -->
        <List :todoList="todoList"/>
        <!-- 底部组件 -->
        <Bottom/>
      </div>
    </div>
  </div>
</template>

<script>
import Top from '@/components/Top';
import List from '@/components/List';
import Bottom from '@/components/Bottom';

export default {
  name: 'App',
  data() {
    return {
      todoList: [
        {id: '001', name: '抽烟', done: true},
        {id: '002', name: '喝酒', done: false},
        {id: '003', name: '烫头', done: true},
      ]
    };
  },
  methods: {
    addTodo(todo) {
      this.todoList.unshift(todo);
    }
  },
  components: {
    Top,
    List,
    Bottom
  }
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;

  &:hover {
    color: #fff;
    background-color: #bd362f;
  }
}

.todo-container {
  width: 600px;
  margin: 0 auto;

  .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}

</style>
