var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + '' + person.lastName;
}
var user = new User('Qiang', 'Xu');
console.log(greeter(user));
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
var someValue = 'this is a string';
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength, strLength2);
var a = [1, 2, 3, 4];
var ro = a;
var sq = { color: 'white', name: 'xuyq' };
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[0];
console.log(myStr);
