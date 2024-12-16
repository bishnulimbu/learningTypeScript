var a = 1;
function fnOne(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
    // return a;
}
console.log(fnOne(1)(2)(3));
