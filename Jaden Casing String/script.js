var arguments = process.argv;

console.log(arguments);

///////////

function toJadenCase(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    let newWord =
      words[i].charAt(0).toUpperCase() + words[i].substring(1, words[i].length);

    words[i] = newWord;

    console.log(words[i]);
  }

  return words.join(" ");
}

///////////

var script = toJadenCase(arguments[2]);
