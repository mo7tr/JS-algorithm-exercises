var arguments = process.argv;

console.log(arguments);

//////////

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log("string length comparaison error");
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let char of str1) {
    obj1[char] ? (obj1[char] += 1) : (obj1[char] = 1);
    console.log("(obj1[char]) =>", obj1[char]);
  }

  for (let char of str2) {
    obj2[char] ? (obj2[char] += 1) : (obj2[char] = 1);
    console.log("(obj2[char]) =>", obj2[char]);
  }

  console.log(obj1, obj2);

  for (let key in obj1) {
    if (!(key in obj2)) {
      console.log("At least this char isn't present in both =>", key);
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      console.log("The amount of this char is different =>", key);
      return false;
    }
  }

  return true;
}

//////////

var script = validAnagram(arguments[2], arguments[3]);
