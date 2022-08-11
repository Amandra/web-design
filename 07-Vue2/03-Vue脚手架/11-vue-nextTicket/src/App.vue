<template>
  <div>
    <input v-show="show" ref="input" type="text">
    <button @click="showInput">点我显示输入框，并获取焦点</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      show: false
    };
  },
  methods: {
    showInput() {
      this.show = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  },
  components: {}
};
</script>

<style>
</style>
