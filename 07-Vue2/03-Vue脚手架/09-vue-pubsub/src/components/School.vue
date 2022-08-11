<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';

export default {
  name: 'School',
  data() {
    return {
      name: '苏州大学',
      address: '江苏省苏州市工业园区仁爱路199号',
    };
  },
  mounted() {
    this.token = PubSub.subscribe('SENT_NAME', function (msgName, data) {
      console.log('School 组件收到的消息：', data);
    });
  },
  beforeDestroy() {
    PubSub.unsubscribe(this.token);
  }
};
</script>

<style>
.demo {
  background-color: pink;
}
</style>