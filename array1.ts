let arrOne: string[] = [];
// string type defined for array.

arrOne.push("one");

arrOne.map(item => console.log(item));

type user = {
  name: string;
  gae: boolean;
}

let arrTwo: user[] = [];
arrTwo.push({ name: "ram", gae: true });

console.log(arrTwo);

let arrThree: Array<number> = [];
arrThree.push(11);

console.log(arrThree);

export { };
