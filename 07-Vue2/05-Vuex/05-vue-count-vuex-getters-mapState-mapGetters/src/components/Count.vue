<template>
  <div>
    <h1>当前求和为 : {{ sum }}</h1>
    <h1>当前求和放大 10倍 为 : {{ bigSum }}</h1>
    <h1>我的名字是 : {{ name }}</h1>
    <h1>我的年龄是 : {{ age }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>

export default {
  name: 'Count',
  data() {
    return {
      // sum: 0, // 当前的和
      n: 1 // 用户选择的数字
    };
  },
  computed: {
    sum() {
      return this.$store.state.sum;
    },
    bigSum() {
      return this.$store.getters.bigSum;
    },
    name() {
      return this.$store.state.name;
    },
    age() {
      return this.$store.state.age;
    }
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT', this.n);
    },
    decrement() {
      this.$store.commit('DECREMENT', this.n);
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.n);
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.n);
    }
  },
  mounted() {
    console.log('Count组件', this);
  }
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>