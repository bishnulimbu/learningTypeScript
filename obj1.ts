function createUser({ name, email }: { name: string, email: string }): { name: string, email: string } {
  return { name, email }
}

// added additional parameter from the object without paramerter for it.
let newUser = { name: "ram", email: "ram@email.com", address: "heroHonda" }

createUser(newUser);

console.log(newUser);

type men = {
  name: string;
  gender: string;
  age: number
}

function createMen(user: men): void {
  console.log(user.name + " " + user.gender + " " + user.age);

}

createMen({ name: "ram", gender: "male", age: 20 })
