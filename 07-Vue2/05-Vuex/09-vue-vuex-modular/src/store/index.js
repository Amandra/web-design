// 该文件用于 Vuex 中最为核心的 store
import Vue from 'vue';
// 引入 Vuex
import Vuex from 'vuex';
// 使用插件
Vue.use(Vuex);

// 求和功能相关的配置
const countOptions = {
    namespaced: true, // 开启命名空间
    state: { // 准备 state ，用于存储数据
        sum: 0,
        name: '许大仙',
        age: 18,
    },
    actions: { // 准备 actions ，用于响应组件中的动作
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
        },
    },
    getters: { // 准备 getters ，用于将 state 中的数据进行加工
        bigSum(state) {
            return state.sum * 10;
        }
    }
};

// 人员管理相关的配置
const personOptions = {
    namespaced: true, // 开启命名空间
    state: { // 准备 state ，用于存储数据
        personList: [
            {id: '001', name: '张三'},
            {id: '002', name: '李四'},
            {id: '003', name: '王五'},
        ]
    },
    actions: { // 准备 actions ，用于响应组件中的动作

    },
    mutations: { // 准备 mutations ，用于操作数据（state）
        ADD_PERSON(state, value) {
            state.personList.unshift(value);
        }
    },
    getters: { // 准备 getters ，用于将 state 中的数据进行加工

    }
};

// 创建 store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
});