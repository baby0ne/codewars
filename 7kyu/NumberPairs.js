function getLargerNumbers(a, b) {
   let newArray = [];

   for(let i = 0; i < a.length; i++){
      a[i] >= b[i] ? newArray[i] = a[i] : newArray[i] = b[i];
   }

   return newArray;
}