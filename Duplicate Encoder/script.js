var arguments = process.argv;

console.log(arguments);

///////////

function duplicateEncode(word) {
  word = word.toLowerCase();
  let temporaryWord = word;
  word = word.split("");
  temporaryWord = temporaryWord.split("");
  console.log("temporaryWord =>", temporaryWord);

  for (let i = 0; i < word.length; i++) {
    let temporaryLetter = word[i];

    let isDoubled = false;

    for (let j = 0; j < word.length; j++) {
      if (i !== j) {
        if (temporaryLetter === word[j]) {
          isDoubled = true;
          break;
        }
      }
    }

    if (isDoubled === true) {
      temporaryWord[i] = ")";
      console.log("temporaryWord =>", temporaryWord);
    } else {
      temporaryWord[i] = "(";
      console.log("temporaryWord =>", temporaryWord);
    }
  }

  word = temporaryWord.join("");

  console.log("end word =>", word);
  return word;
}

var script = duplicateEncode(arguments[2]);
