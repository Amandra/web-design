<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyword" placeholder="请输入姓名" type="text"/>&nbsp;<button @click="search">
      Search
    </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keyword: ''
    };
  },
  methods: {
    search() {
      if (!this.keyword.trim()) return alert('输入不能为空');
      this.$bus.$emit('keyword', this.keyword);
    }
  }
};
</script>

<style scoped>

</style>