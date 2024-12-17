
type dog = {
  id: number;
  dog_name: string;
  gender: string;
}
type cat = {
  id: number;
  cat_name: string;
  gender: string;
}

let myCat: dog | cat = { id: 11, dog_name: "shepherd", gender: "male" };
let newDog: dog = { id: 1, dog_name: "kallay", gender: "female" };

// myCat = {
//   cat_name: mycat.dog_name = "siberian"
// };

console.log(myCat);
console.log(newDog);

