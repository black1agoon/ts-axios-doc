function identity(arg) {
    return arg;
}
// let output = identity<string>('myString')
let output = identity('myString'); // 直接类型推断
function loggingIdentity(arg) {
    console.log(arg.length); // 只有arg 有长度才能有length
    return arg;
}
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
let stringNumberic = new GenericNumber();
stringNumberic.zeroValue = 'ss';
stringNumberic.add = function (x, y) {
    return x + y;
};
console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'));
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity2({ length: 3 });
function prop(obj, key) {
    return obj[key];
}
