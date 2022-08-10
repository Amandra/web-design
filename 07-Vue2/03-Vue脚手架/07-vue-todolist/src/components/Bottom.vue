<template>
  <div class="todo-footer">
    <label>
      <input :checked="checkedTodoNum === totalTodoNum" type="checkbox" @click="checkAll"/>
    </label>
    <span>
          <span>已完成{{ checkedTodoNum }}</span> / 全部{{ totalTodoNum }}
        </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: ['todoList'],
  methods: {
    checkAll() {
      this.todoList.map(x => x.done = true);
    }
  },
  computed: {
    totalTodoNum() {
      return this.todoList.length;
    },
    checkedTodoNum() {
      return this.todoList.filter(x => x.done).length;
    }
  }
};
</script>

<style lang="less" scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;

  label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;

    input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }

    button {
      float: right;
      margin-top: 5px;
    }
  }
}
</style>