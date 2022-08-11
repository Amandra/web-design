<template>
  <div class="container">
    <Category :listData="foods" title="美食"/>
    <Category :listData="games" title="游戏"/>
    <Category :listData="films" title="电影"/>
  </div>
</template>

<script>
import Category from '@/components/Category';

export default {
  name: 'App',
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《你好世界》']
    };
  },
  components: {
    Category
  }

};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
