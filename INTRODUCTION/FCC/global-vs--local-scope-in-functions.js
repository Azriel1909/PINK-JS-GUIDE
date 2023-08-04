// Global vs. Local Scope

// Example

const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  return someVar;
}

console.log(myFun());

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();