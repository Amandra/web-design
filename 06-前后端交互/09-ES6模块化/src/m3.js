/* 统一暴露 */
const school = '家里蹲大学';

const person = {
    name: '许大仙', age: 18
};

function work() {
    console.log('工作');
}

// 【统一暴露】精简写法
// export {school, person, work};
// 【统一暴露】完整写法
export {school as school, person as person, work as work};
