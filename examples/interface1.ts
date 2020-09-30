// 继承接口
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let squre = {} as Square
squre.color = 'blue'
squre.sideLength = 10
squre.penWidth = 5.0

// 混合类型 可以是函数 可以是属性 可以是对象(拥有函数)
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function (start: number) {

  }) as Counter
  counter.interval = 123
  counter.reset = function () {

  }
  return counter
}


// 接口继承类

class Control {
  private state: any
}
interface SelectableControl extends Control {
  select()
}
class Button extends Control implements SelectableControl{
  select() {
  }
}
class TextBox extends Control {
  select() {
  }
}

