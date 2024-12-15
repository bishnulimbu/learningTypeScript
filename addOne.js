var a = 1;
function fnOne(a) {
    return function () {
        return a + 10;
    }
    // return a;
}
console.log(fnOne(a)());
