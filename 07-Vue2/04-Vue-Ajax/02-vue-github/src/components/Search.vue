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
        // 请求成功前更新 List 中的数据
        this.$bus.$emit('updateListData', {
          isFirst: false,
          isLoading: true,
          errMsg: '',
          users: []
        });
        const {data: {items}} = await axios.get(`/github/search/users?q=${this.keyword}`);
        // 请求成功后更新 List 的数据
        this.$bus.$emit('updateListData', {
          isFirst: false,
          isLoading: false,
          errMsg: '',
          users: items
        });
      } catch (e) {
        // 请求失败后更新 List 的数据
        console.error(e);
        this.$bus.$emit('updateListData', {
          isFirst: false,
          isLoading: false,
          errMsg: e.message,
          users: []
        });
      }

    }
  }
};
</script>

<style scoped>

</style>