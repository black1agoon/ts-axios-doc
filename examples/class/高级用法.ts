class Greeter {
  static standardGreeting = 'hello, there'
  greeting: string
  constructor(message?: string) {
    this.greeting = message
  }
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter
greeter = new Greeter()
Greeter.standardGreeting = '111'
console.log(greeter.greet())

// let greeterMaker = Greeter
// greeterMaker.standardGreeting = 'Hey there'
// let greeter2: Greeter = new greeterMaker()
// console.log(greeter2.greet())