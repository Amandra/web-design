<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" alt="" src="https://dts0r5oeqkedm.cloudfront.net/2015/04/c.jpg">
      <a slot="footer" class="foot" href="#">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game,index) in games" :key="index">{{ game }}</li>
      </ul>
      <template slot="footer">
        <div class="foot">
          <a href="#">单机游戏</a>
          <a href="#">网络游戏</a>
        </div>
      </template>
    </Category>
    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template slot="footer">
        <div class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎前来观影！！！</h4>
      </template>

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
