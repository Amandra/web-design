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
import axios from 'axios';

export default {
  name: 'List',
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    try {
      const keyword = await new Promise((resolve, reject) => {
        this.$bus.$on('keyword', (data) => {
          resolve(data);
        });
      });
      console.log(keyword);
      const {data: {items}} = await axios.get(`/github/search/users?q=${keyword}`);
      this.users = items;
    } catch (e) {
      console.error(e);
    }
  },
  beforeDestroy() {
    this.$bus.$off('keyword');
  }
};
</script>

<style scoped>

</style>