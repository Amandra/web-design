<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link active-class="active" class="list-group-item" to="/home/message">Message</router-link>
        </li>
      </ul>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  beforeDestroy() {
    console.log('Home组件即将被销毁');
  },
  mounted() {
    console.log('Home组件挂载完毕', this);
  }
};
</script>

<style scoped>

</style>