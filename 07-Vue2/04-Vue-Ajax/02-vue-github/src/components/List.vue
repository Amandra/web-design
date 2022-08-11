<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div v-for="user in users" v-show="users.length" :key="user.id" class="card">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="isFirst">欢迎使用</h1>
    <!-- 展示加载中 -->
    <h1 v-show="isLoading">加载中...</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="errMsg">{{ errMsg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'List',
  data() {
    return {
      isFirst: true, // 是否初次展示
      isLoading: false, // 是否加载中
      errMsg: '', // 错误信息
      users: []
    };
  },
  mounted() {
    this.$bus.$on('updateListData', ({isFirst, isLoading, errMsg, users}) => {
      this.isFirst = isFirst;
      this.isLoading = isLoading;
      this.errMsg = errMsg;
      this.users = users;
    });
  },
  beforeDestroy() {
    this.$bus.$off('getUsers');
  }
};
</script>

<style scoped>

</style>