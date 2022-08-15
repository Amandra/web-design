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
      <!-- 缓存路由组件 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>

    </div>
  </div>

</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>

</style>