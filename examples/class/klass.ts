// class Greeter {
//   static standardGreeting = 'Hello, there'
//   greeting: string
//   constructor(message: string) {
//     this.greeting = message
//   }
//   greet() {
//     return 'Hello, ' + this.greeting
//   }
// }
//
// let greeter1: Greeter
// greeter1 = new Greeter('world')
// console.log(greeter1.greet())

// class Animal {
//   private name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
//
// class Rhino extends Animal {
//   constructor() {
//     super('Rhino')
//   }
// }

// class Employee {
//   private name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }
//
// let animal = new Animal('Goat')
// let rhino = new Rhino()
// let employee = new Employee('Bob')

// animal = rhino
// rhino = animal
// animal = employee // 错误: Animal 与 Employee 不兼容.