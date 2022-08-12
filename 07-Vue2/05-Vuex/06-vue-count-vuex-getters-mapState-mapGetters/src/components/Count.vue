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
import {mapGetters, mapState} from 'vuex';

export default {
  name: 'Count',
  data() {
    return {
      // sum: 0, // 当前的和
      n: 1 // 用户选择的数字
    };
  },
  computed: {
    /*
    // 靠程序员自己亲自写计算属性
    sum() {
       return this.$store.state.sum;
     },
     name() {
       return this.$store.state.name;
     },
     age() {
       return this.$store.state.age;
     },*/
    // 借助 mapState 生成计算属性，从 state 中读取数据（对象写法）
    // ...mapState({sum: 'sum', name: 'name', age: 'age'}),
    // 借助 mapState 生成计算属性，从 state 中读取数据（数组写法）
    ...mapState(['sum', 'name', 'age']),
    ...mapGetters({bigSum: 'bigSum'}),
    // // 靠程序员自己亲自写计算属性
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
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
    console.log('Count组件', mapState({sum: 'sum', name: 'name', age: 'age'}));
  }
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>