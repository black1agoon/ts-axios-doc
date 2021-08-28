class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = firstName + lastName
    }
}
// function greeter(person: Person) {
//   return 'Hello ' + person.firstName + '' + person.lastName
// }
//
// let user = new User('Qiang', 'Xu')
// console.log(greeter(user))
let list = [1, 2, 3];
let list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[2];
console.log(colorName);
let someValue = 'this is a string';
let strLength = someValue.length;
let strLength2 = someValue.length;
console.log(strLength, strLength2);
let a = [1, 2, 3, 4];
let ro = a;
let sq = { color: 'white', name: 'xuyq' };
let myArray;
myArray = ['Bob', 'Fred'];
let myStr = myArray[0];
console.log(myStr);
