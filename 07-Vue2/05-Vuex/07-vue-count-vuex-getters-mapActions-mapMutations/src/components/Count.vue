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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';

export default {
  name: 'Count',
  data() {
    return {
      // sum: 0, // 当前的和
      n: 1 // 用户选择的数字
    };
  },
  computed: {
    ...mapState(['sum', 'name', 'age']),
    ...mapGetters({bigSum: 'bigSum'}),
  },
  methods: {
    /*
    increment() {
      this.$store.commit('INCREMENT', this.n);
    },
    decrement() {
      this.$store.commit('DECREMENT', this.n);
    },
    */
    /* increment(value) {
       this.$store.commit('INCREMENT', value);
     },*/
    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations (对象写法)
    ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),
    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations (数组写法)
    // ...mapMutations(['INCREMENT', 'DECREMENT']),

    /* ******************************************* */

    /*
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.n);
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.n);
    },
    */
    // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions (对象写法)
    // ...mapActions({incrementOdd: 'incrementOdd', incrementWait: 'incrementWait'})
    // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions (数组写法)
    ...mapActions(['incrementOdd', 'incrementWait'])
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