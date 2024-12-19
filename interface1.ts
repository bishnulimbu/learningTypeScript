

interface person {
  name: string,
  age: number,
  is18Plus(age: number): boolean
  // cannot define function here as it only holds struction and method signatures.
};

let ram: person = {
  name: "ram",
  age: 100,
  is18Plus(age: number) {
    return age >= 18;
  }

};

// console.log(ram);
console.dir(ram, ram.is18Plus(20));

