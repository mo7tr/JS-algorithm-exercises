var arguments = process.argv;

console.log(arguments);

///////////

countBits = (n) => {
  console.log(Number(n).toString(2).split("0").join("").length);
};

//////////

var script = countBits(arguments[2]);
