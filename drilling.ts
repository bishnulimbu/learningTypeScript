
function fnOne(name1: string) {
  console.log(name1);
  return (name2: string) => {
    console.log(name2);
    return (name3: string) => {
      console.log(name3);
    }
  }
}

fnOne("ram")("hari")("sita");

function fnTwo(num1: number) {
  console.log(num1 + 1);
  return (num2: number) => {
    console.log(num2 + 2);
    return (num3: number) => {
      console.log(num3 + 3);
    }
  }
}

fnTwo(1)(2)(3);

function fnThree(num1: number) {
  () => num1 + 1;
  () => num1 + 1;
  console.log(num1);
}
//idk about this but the increment probably will be done in a traditional way I think.

fnThree(1);
