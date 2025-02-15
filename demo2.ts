enum roles {
  admin = "all",
  user = "services",
  client = "access",
};
interface Student {
  name: string,
  age: number,
  // isActive: () => string,
  isActive?(): string,
}
interface Student {
  faculty?: "bca" | "bba" | "bhm" | "bsw",
}
interface Teacher extends Student {
  subject: string,
}
const std1: Student = {
  name: "rammu",
  age: 111,
  // isActive: () => { return "hello i am rammu." },
  isActive() {
    return "hello i am rammu."
  },
  faculty: "bca",
}
const teach1: Teacher = {
  name: "rathi",
  age: 121,
  // isActive: () => { return "hello i am rammu." },
  faculty: "bca",
  subject: "java",
}

const user1 = roles.admin;
console.log(user1);
console.log(std1.isActive());//will proably run but has warning due to method being optional.
console.log(std1);
console.log(teach1);



