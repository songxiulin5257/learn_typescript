// 动态类型 容易出错
let a: number;
a = 10;
a = 30;
console.log(a);

const b:string = '10'; // 声明完变量直接赋值

// 自动进行类型检测
// let c = false;

// c = 1;

// js中的函数参数是不考虑类型的，只要参数名称一致，参数类型就可以不一致
function sum(a: number, b: number):number {
    return a + b;
}
