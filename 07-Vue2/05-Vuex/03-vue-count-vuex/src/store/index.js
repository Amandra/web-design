// 该文件用于 Vuex 中最为核心的 store
import Vue from 'vue';
// 引入 Vuex
import Vuex from 'vuex';
// 使用插件
Vue.use(Vuex);
// 创建 store
export default new Vuex.Store({
    state: { // 准备 state ，用于存储数据
        sum: 0
    },
    actions: { // 准备 actions ，用于响应组件中的动作
        increment(context, value) {
            context.commit('INCREMENT', value);
        },
        decrement(context, value) {
            context.commit('DECREMENT', value);
        },
        incrementOdd(context, value) {
            if (context.state.sum % 2 !== 0) {
                context.commit('INCREMENT', value);
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value);
            }, 1000);
        }
    },
    mutations: { // 准备 mutations ，用于操作数据（state）
        INCREMENT(state, value) {
            state.sum += value;
        },
        DECREMENT(state, value) {
            state.sum -= value;
        }
    }
});
