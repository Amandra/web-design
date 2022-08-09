export default {
    install(Vue) {
        // 全局自定义指令
        Vue.directive('big', function (element, binding) {
            let {value} = binding;
            element.innerText = value * 10;
        });
    }
};