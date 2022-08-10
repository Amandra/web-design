<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 头部组件 -->
        <Top :addTodo="addTodo"/>
        <!-- 列表组件 -->
        <List :checkTodo="checkTodo" :deleteTodo="deleteTodo" :todoList="todoList"/>
        <!-- 底部组件 -->
        <Bottom :checkAllTodo="checkAllTodo" :todoList="todoList"/>
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
      todoList: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value));
      }
    }
  },
  methods: {
    // 新增 todo
    addTodo(todo) {
      this.todoList.unshift(todo);
    },
    // 删除 todo
    deleteTodo(id) {
      this.todoList.splice(this.todoList.findIndex(x => x.id === id), 1);
    },
    // 勾选或取消勾选 todo
    checkTodo(id) {
      this.todoList.forEach(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 全选
    checkAllTodo(done) {
      this.todoList.map(x => x.done = done);
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
