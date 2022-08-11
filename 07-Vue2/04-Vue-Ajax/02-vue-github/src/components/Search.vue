<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyword" placeholder="请输入姓名" type="text"/>&nbsp;
      <button @click="search">
        Search
      </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      keyword: ''
    };
  },
  methods: {
    async search() {
      if (!this.keyword.trim()) {
        return alert('输入不能为空');
      }
      try {
        const {data: {items}} = await axios.get(`/github/search/users?q=${this.keyword}`);
        this.$bus.$emit('users', items);
      } catch (e) {
        console.error(e);
      }

    }
  }
};
</script>

<style scoped>

</style>