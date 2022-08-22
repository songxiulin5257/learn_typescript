// 可以使用 | 来指定多个类型
let d: 10 | 11;


// any表示的是任意类型 相当于对这个变量关闭了类型检查
// 使用ts时 不建议使用any类型
let e: any = 10;
e = '10';

// 只声明了一个变量 但是没有赋值 ts会自动判断变量的类型为any
let f;
f = 10
f = false

// unkonwn表示的是未知类型
let g: unknown;

let s: string = '10';

// unknown 是一个类型安全的any
// unknown 类型的变量 不能直接赋值给其他类型的变量
s = g;

// 类型断言 将unknown类型转换为其他类型
// s = g as string;
s = <string>g;

function fn (num: number): number | boolean {
  if (num > 0) {
    return num
  } else {
    return false;
  }
}


// void表示函数没有返回值
function fn1(): void {
  return undefined;
}

// never 表示永远不会返回结果
function fn2(): never {
  // console.log('类型never')
  throw new Error('报错了')
  // return undefined;
}