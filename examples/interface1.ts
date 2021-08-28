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

// class Person {
//   readonly name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
//
// let john = new Person('John')
// console.log(john.name)

abstract class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printName(): void {
    console.log('Department name: ' + this.name)
  }

  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
// department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在
