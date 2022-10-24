/*
Rna Transcription
Instructions
Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
*/
const transcription = (dna) => {
  let rna = dna.split('');
  for (let i = 0; i < rna.length; i++) {
    switch (dna[i]) {
      case "G":
        rna[i] = "C";
        break;
      case "C":
        rna[i] = "G";
        break;
      case "T":
        rna[i] = "A";
        break;
      case "A":
        rna[i] = "U";
        break;
      default:
        rna[i] = "";
    }
  }
  return rna.join('');
};
