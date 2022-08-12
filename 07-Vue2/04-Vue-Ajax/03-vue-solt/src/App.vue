<template>
  <div class="container">
    <Category title="游戏">
      <ul>
        <li v-for="(game,index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>
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
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《你好，世界》']
    };
  },
  components: {
    Category
  }

};
</script>

<style>
.container {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>
