<template>
  <div>
    <h3>当前求和为 : {{ sum }}</h3>
    <h3>当前求和放大 10倍 为 : {{ bigSum }}</h3>
    <h3>我的名字是 : {{ name }}</h3>
    <h3>我的年龄是 : {{ age }}</h3>
    <h3 style="color: red">Person 组件的总人数是：{{ personList.length }}</h3>
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
      n: 1 // 用户选择的数字
    };
  },
  computed: {
    ...mapState(['sum', 'name', 'age', 'personList']),
    ...mapGetters({bigSum: 'bigSum'}),
  },
  methods: {
    ...mapMutations({increment: 'INCREMENT', decrement: 'DECREMENT'}),
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