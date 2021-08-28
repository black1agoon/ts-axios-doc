let squre = {};
squre.color = 'blue';
squre.sideLength = 10;
squre.penWidth = 5.0;
function getCounter() {
    let counter = (function (start) {
    });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
// 接口继承类
class Control {
}
class Button extends Control {
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
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department; // 允许创建一个对抽象类型的引用
// department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports() // 错误: 方法在声明的抽象类中不存在
