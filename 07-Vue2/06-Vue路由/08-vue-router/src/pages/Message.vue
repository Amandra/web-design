<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 跳转路由，并携带 params 参数，to 的字符串写法 -->
        <!--<router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{ item.title }}</router-link>&nbsp;&nbsp;-->
        <!-- 跳转路由，并携带 params 参数，to 的对象 -->
        <router-link :to="{
          name: 'detail',
          params:{
            id: item.id,
            title: item.title
          }
        }">{{ item.title }}
          <button @click="pushShow(item)">push查看</button>
          <button @click="replaceShow(item)">replace查看</button>
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    };
  },
  methods: {
    pushShow(item) {
      this.$router.push({
        name: 'detail',
        params: {
          id: item.id,
          title: item.title
        }
      });
    },
    replaceShow(item) {
      this.$router.replace({
        name: 'detail',
        params: {
          id: item.id,
          title: item.title
        }
      });
    }
  }
};
</script>

<style scoped>

</style>