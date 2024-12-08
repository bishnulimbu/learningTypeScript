
function getId(id: number | string) {

  if (typeof id === "string") {
    // needs a temperory variable for saving the changed data.
    let data1 = id.toUpperCase()
    console.log(data1);
  } else {
    console.log(id);
  }
}

getId(11);
getId("hello world.");
