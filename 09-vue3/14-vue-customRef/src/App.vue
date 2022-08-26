<template>
  <input v-model="keyword" type="text">
  <h3>{{ keyword }}</h3>
</template>

<script>

import {customRef} from 'vue';

export default {
  name: 'App',

  setup() {
    // 自定义 ref
    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newValue) {
            value = newValue;
            // 通知 Vue 去重新解析模板
            trigger();
          }
        };
      });
    }

    // let keyword = ref(''); // 使用 Vue 提供的 ref
    let keyword = myRef('hello'); // 使用 程序员自定义的 ref
    return {
      keyword
    };
  }
};
</script>

<style>

</style>
