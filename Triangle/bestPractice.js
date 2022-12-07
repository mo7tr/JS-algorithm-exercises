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
  console.log(a + b > c && a + c > b && c + b > a);
  return a + b > c && a + c > b && c + b > a;
}

var script = isTriangle(arguments[2]);
