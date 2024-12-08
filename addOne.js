var a = 1;
function fnOne(a) {
    (function (a) { return a + 1; });
    (function (a) { return a + 1; });
    return a;
}
console.log(fnOne(a));
