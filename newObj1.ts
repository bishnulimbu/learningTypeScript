
type User = {
  readonly id: string;
  // will not allow value to change.
  name: string;
  email: string;
  isActive: boolean;
  gender?: string;
  // ? will make value optional.
}

function createUser(user: User): void {
  console.log(user);
}

// createUser({ id: "one", name: "rammu", email: "ram@email.com", isActive: true });

let userOne: User = { id: "11", name: "rammu", email: "ram@email", isActive: false };
userOne.name = "hanumann";
console.log(userOne);
