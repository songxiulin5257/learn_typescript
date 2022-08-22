// object 表示一个js对象
let a: object; 
a = {};
a = function () {}

// {} 用来指定对象中可以包含哪些属性
// 属性名后加一个？表示这个属性是可选的
let b: {name: string, age?:  number} = {name: 'xiulin', age: 30}


// [propName: string]: any 表示任意属性
let c: {name:string, [propName: string]: any}
c = {name: 'xiulin', age: 30, size: 'XXL'}

// 设置函数结构的类型声明
// 语法：（形参： 类型， 形参： 类型）=> 返回类型
let i: (a, b) => number;
i = function (n1: number, n2: number): number {
  return n1 + n2
}

// 数组类型
// string[] 表示字符串数组
let h: string[];

// number[]表示数值类型的数组
let o: Array<number>;


// ts扩展的类型
// 元组 元组就是固定长度的数组
let k: [string, string]
k = ['xx', '222']

// 枚举 enum 
enum Gender {
  Male = 0,
  Female = 1
}

let l: {name: string, gender: Gender};
l = {
  name: 'xiulin',
  gender: Gender.Male
}