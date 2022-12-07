var arguments = process.argv;

console.log(arguments);

///////////

// entrez un argument sous forme d'un string contenant le tableau en CLI avec node.js
// exemple: node script.js "[1,3,2]"

///////////

function isTriangle(args) {
  let array = JSON.parse(args);
  let a = array[0];
  let b = array[1];
  let c = array[2];

  determineTriangle(a, b, c);
}

function determineTriangle(a, b, c) {
  let sides = [a, b, c];
  console.log("sides =>", sides);

  sides.sort(compare);
  console.log("sides sorted =>", sides);

  if (sides[2] < sides[0] + sides[1]) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function compare(a, b) {
  console.log("a - b) =>", a - b);
  return a - b;
}

var script = isTriangle(arguments[2]);
