function onesComplement(n) {
    let newString = "";

   for (let i = 0; i < n.length; i++){
      if (n[i] === "0"){
         newString += "1";
      } else {
         newString += "0";
      }
   }  

   return newString;
};