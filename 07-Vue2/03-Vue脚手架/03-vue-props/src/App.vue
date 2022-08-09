<template>
  <div>
    <Student :age="19" name="李四" sex="女"/>
  </div>
</template>

<script>
import Student from '@/components/Student';

export default {
  name: 'App',
  components: {
    Student
  }
};
</script>

<style>
</style>
