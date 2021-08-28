let passcode = 'secret passcode';
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode === 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('Error: Unauthorized update of employee!');
        }
    }
}
let employee = new Employee();
employee.fullName = 'Bob';
if (employee.fullName) {
    console.log(employee.fullName);
}
