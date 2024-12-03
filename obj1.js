function createUser(_a) {
    var name = _a.name, email = _a.email;
    return { name: name, email: email };
}
// added additional parameter from the object without paramerter for it.
var newUser = { name: "ram", email: "ram@email.com", address: "heroHonda" };
createUser(newUser);
console.log(newUser);
function createMen(user) {
    console.log(user.name + " " + user.gender + " " + user.age);
}
createMen({ name: "ram", gender: "male", age: 20 });
