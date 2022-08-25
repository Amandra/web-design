import {onBeforeUnmount, onMounted, reactive} from 'vue';

export default function () {
    // 实现鼠标打点相关数据
    const point = reactive({
        x: 0,
        y: 0
    });

    // 方法
    function savePoint(e) {
        point.x = e.pageX;
        point.y = e.pageY;
        console.log('@');
    }

    // 生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint);
    });

    return point;
}

