<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    async getStudents() {
      try {
        const result = await axios.get('/api1/students');
        console.log(result.data);
      } catch (e) {
        console.log(e.message);
      }
    },
    async getCars() {
      try {
        const result = await axios.get('/api2/cars');
        console.log(result.data);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
};
</script>

<style>
</style>
