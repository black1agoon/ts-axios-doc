function greeter(person) {
    return 'Hello ' + person.firstName + '' + person.lastName;
}
var user = {
    firstName: 'yq',
    lastName: 'xu'
};
console.log(greeter(user));
