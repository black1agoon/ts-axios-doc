function identity<T>(arg: T): T {
  return arg
}

// let output = identity<string>('myString')
let output = identity('myString') // 直接类型推断

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length) // 只有arg 有长度才能有length
  return arg
}

interface GenericIndentityFn<T> {  // 泛型接口
  (arg: T): T
}


class GenericNumber <T> {  // 泛型类
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x,y) {
  return x + y
}

let stringNumberic = new GenericNumber<string>()
stringNumberic.zeroValue = 'ss'
stringNumberic.add = function (x, y) {
  return x + y
}

console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'))

interface Lengthwise {
  length: number
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {  // 泛型约束
  console.log(arg.length)
  return arg
}
loggingIdentity2({length: 3})

interface Person3 {  // keyof 介绍 用法
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person3  // "name" | "age" | "location"
type K2 = keyof Person3[]  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person3 }  // string | number
function prop(obj: object, key: string) {
  return obj[key]
}

function create<T>(c: {new(): T}): T {
  return new c()
}


