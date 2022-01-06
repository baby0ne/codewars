function DNAtoRNA(dna) {
   // create a function which returns an RNA sequence from the given DNA sequence
   let rna = "";
   if (dna.indexOf("T") > -1){
      rna = dna.replace(/T/g, "U");
   } else if (dna.indexOf("T") === -1){
      rna = dna; 
   }
   return rna; 
} 