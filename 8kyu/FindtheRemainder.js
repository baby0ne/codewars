function remainder(a, b) {
   let remainder = 0; 
   if (a >= b){
      if(b === 0) {
         return NaN;
      }
      return a%b;
   } else if (a <= b){
      if (a === 0) {
         return NaN;
      }
      return b%a;
   }
}