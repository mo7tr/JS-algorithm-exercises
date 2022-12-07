var arguments = process.argv;

console.log(arguments);

///////////

function DNAStrand(dna) {
  dna = dna.split("");

  for (let i = 0; i < dna.length; i++) {
    dna[i] === "A"
      ? (dna[i] = "T")
      : dna[i] === "T"
      ? (dna[i] = "A")
      : dna[i] === "C"
      ? (dna[i] = "G")
      : dna[i] === "G"
      ? (dna[i] = "C")
      : 0;
  }

  dna = dna.join("");

  console.log("dna  =>", dna);

  return dna;
}

///////////

var script = DNAStrand(arguments[2]);
