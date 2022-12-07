var arguments = process.argv;

console.log(arguments);

///////////

function countBits(n) {
  let nBits = Number(n).toString(2);
  console.log("nBits =>", nBits, typeof nBits);

  let amountOf1 = 0;

  for (let i = 0; i < nBits.length; i++) {
    Number(nBits[i]) === 1 ? amountOf1++ : 0;
  }

  console.log("amountOf1 =>", amountOf1);

  return amountOf1;
}

//////////

var script = countBits(arguments[2]);
