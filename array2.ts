
let arrOne: (number | string)[] = [1, 2, 3, 4, 5, "hello", "ram"];
// will store number and string in a single array.

console.log(arrOne);

//literal assignment 
let pi: 3.14 = 3.14;

let gender: "male" | "female";

// type roma = {
//   gender: string;
//   name: string;
// }

gender = "female";

type user = {
  name: string;
  gender: "male" | "female";
}

let doma: user = { name: "doma", gender: "male" };

console.log(doma);
console.log(gender);

export { };
