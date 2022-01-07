function hammingDistance(a, b) {
   let counter = 0;
   let helper = 0;
   for (let i = 0; i < a.length; i++){
      if (a[i] != b[helper]){
         counter++;
      }
      helper++;
   }
   return counter;
}