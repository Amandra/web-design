<template>
  <div class="row">
    <div v-for="user in users" :key="user.id" class="card">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'List',
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.$bus.$on('users', (data) => {
      this.users = data;
    });
  },
  beforeDestroy() {
    this.$bus.$off('users');
  }
};
</script>

<style scoped>

</style>