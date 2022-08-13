<template>
  <div>
    <h3> 人员列表 </h3>
    <h3 style="color: red"> Count 组件的求和为： {{ sum }} </h3>
    <input v-model="name" placeholder="请输入名字" type="text">
    <button @click="add"> 添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import {nanoid} from 'nanoid';

export default {
  name: 'Person',
  data() {
    return {
      name: ''
    };
  },
  methods: {
    add() {
      const person = {id: nanoid(), name: this.name};
      // 存入到 Vuex
      this.addPerson(person);
      this.name = '';
    },
    ...mapMutations({addPerson: 'ADD_PERSON'})
  },
  computed: {
    ...mapState(['personList', 'sum'])
  }
};
</script>

<style scoped>

</style>