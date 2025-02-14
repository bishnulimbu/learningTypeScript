let Person = { name: "ram", age: 11, isGay: false };
let pName: string = "ram";
let num1 = 1.911111111;
function numSquare(num: number): number {
  return num * num;
}
//defining type of an object. interface can also be used for this.
type Student = {
  readonly name: string; // it just means that the value cannot be changed once initialized.
  age: number;
  gender: string;
  isGay?: boolean; //optional value
};
//extending type
type collegeStudent = Student & {
  faculty: string;
};
const obj1: collegeStudent = {
  name: "ram",
  age: 12,
  gender: "male",
  faculty: "bca",
};
//we can even use function
//creating new user object
function createCollegeStudent(student: collegeStudent): collegeStudent {
  return student;
}

const schoolStudent1 = {
  name: "sita",
  age: 14,
};
function createSchoolStudent(student: { name: string; age: number }) {
  return student;
}
createSchoolStudent(schoolStudent1);

const array1: string[] = [];
array1.push("rammu simple.");
const array2: Array<string> = []; //generics for type definations.
array2.push("string one from generic");
const collegeStudents: collegeStudent[] = [];
collegeStudents.push(
  {
    name: "ram",
    age: 12,
    gender: "male",
    faculty: "bca",
  },
  {
    name: "roake",
    age: 1333,
    gender: "female",
    faculty: "bba",
  },
);
const numOrstring = (num: string | number): string | number => {
  if (typeof num === "string") {
    return num.toUpperCase();
  } else if (typeof num === "number") {
    return num + 100;
  } else {
    return "no number or string.";
  }
};
const ambiguousArray: (string | number)[] = [1, 2, 3, 4, "ram", "hari"];
let pi: 3.14 = 3.14;//assigning strong type value

//void is return null. never if return nothing(like throw new error).
// console.log(Person.name);
// console.log(Person.email);
console.log(pName);
console.log(num1);
console.log(num1.toFixed()); //will round up to whole number
Person.isGay = true;
console.log(Person.isGay);
console.log(numSquare(2));
console.log(obj1);
console.log(schoolStudent1);
console.log(createCollegeStudent({
  name: "sam",
  age: 111,
  gender: "male",
  faculty: "bba",
}));
console.log(array1);
console.log(array2);
console.log(collegeStudents);
console.log(numOrstring("hello"));
console.log(ambiguousArray);


export { };
