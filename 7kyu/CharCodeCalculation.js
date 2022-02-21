function calc(x) {
   let asciiX_1 = '';
   for (let i = 0; i < x.length; i++) {
      asciiX_1 += x.charCodeAt(i);
   }

   let asciiX_2 = '';
   for (let i = 0; i < asciiX_1.length; i++){
      if (asciiX_1[i] === '7'){
         asciiX_2 += '1';
      } else {
         asciiX_2 += asciiX_1[i];
      }
   }

   let total_1 = 0;
   let total_2 = 0;

   for (let i = 0; i < asciiX_1.length; i++){
      total_1 += Number(asciiX_1[i]);
      total_2 += Number(asciiX_2[i]);
   }

   return total_1 - total_2;
}
