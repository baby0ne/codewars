function isNarcissistic(n) { 
   let result = 0;
   let stringN = String(n);

   for (let i = 0; i < stringN.length; i++) {
      result += Math.pow(Number(stringN[i]), stringN.length)
   }

   return (result === n ? true : false);
}