var arguments = process.argv;

console.log(arguments);

///////////

let toJadenCase = function (sentence) {
  console.log(
    sentence
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ")
  );
  return sentence
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

///////////

var script = toJadenCase(arguments[2]);
