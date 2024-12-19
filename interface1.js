;
var ram = {
    name: "ram",
    age: 100,
    is18Plus: function (age) {
        return age >= 18;
    }
};
// console.log(ram);
console.dir(ram, ram.is18Plus(20));
