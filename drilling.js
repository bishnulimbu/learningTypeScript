function fnOne(name1) {
    console.log(name1);
    return function (name2) {
        console.log(name2);
        return function (name3) {
            console.log(name3);
        };
    };
}
fnOne("ram")("hari")("sita");
function fnTwo(num1) {
    console.log(num1 + 1);
    return function (num2) {
        console.log(num2 + 2);
        return function (num3) {
            console.log(num3 + 3);
        };
    };
}
fnTwo(1)(2)(3);
function fnThree(num1) {
    (function () { return num1 + 1; });
    (function () { return num1 + 1; });
    console.log(num1);
}
fnThree(1);
