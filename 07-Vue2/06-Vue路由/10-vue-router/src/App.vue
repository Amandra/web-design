<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始 HTML 中我们使用 a 标签实现页面的跳转 -->
          <!--<a class="list-group-item active" href="./about.html">About</a>-->
          <!--<a class="list-group-item" href="./home.html">Home</a>-->

          <!-- Vue 中借助 router-link 实现路由的切换  -->
          <router-link :to="{
            name: 'about'
          }" active-class="active" class="list-group-item">About
          </router-link>
          <router-link active-class="active" class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 此处到底展示什么组件，要看用户点击的是哪个导航项 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import Banner from '@/components/Banner';

export default {
  name: 'App',
  components: {Banner}
};
</script>

<style>
</style>
