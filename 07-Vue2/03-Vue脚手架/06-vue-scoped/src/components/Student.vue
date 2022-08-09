<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '许大仙',
      age: 18
    };
  }
};
</script>

<style lang="less" scoped>
/* lang 表示 css 预处理器，需要安装对应的 loader */
.demo {
  background-color: pink;
}
</style>