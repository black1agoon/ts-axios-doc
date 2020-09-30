class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello ' + person.firstName + '' + person.lastName
}

let user = new User('Qiang', 'Xu')
console.log(greeter(user))

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

enum Color {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color[2]
console.log(colorName)

let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
let strLength2: number = (someValue as string).length
console.log(strLength, strLength2)

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}
let sq: SquareConfig = {color: 'white', name: 'xuyq'}

interface StringArray {
  [index111: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]
console.log(myStr)
