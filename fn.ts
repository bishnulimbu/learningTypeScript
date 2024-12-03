// function addNums(num: number) {
//   return num + 100;
// }
//
// let result = addNums(1);
//
// console.log(result);
//
// function signUpUser(name: string, email: string, isPremium: boolean) {}
//
// let setUser = signUpUser(11, sam, false);

function eat(name: string) {
  return name + " dog food.";
}

console.log(eat("ram"));

// defining the return type also.
let userDetail = (name: string, email: string, gae: boolean = false): string => {
  return name + " " + email;
}

console.log(userDetail("ram", "ram@email.com"));

export { };

// void for returning nothing
function showError(errMsg): void {
  console.log(errMsg);
}
// never for handling error as it never returns anything
function handleError(value): never {
  console.log(value);
}
