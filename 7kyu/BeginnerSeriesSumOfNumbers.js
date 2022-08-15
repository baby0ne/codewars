function getSum(a, b) {
   if (a === b)
      return a;
   else if (a > b) {
      let sum = 0;
      while (a >= b) {
         sum += b;
         b++;
      }
      return sum;
   } else {
      let sum = 0;
      while (b >= a) {
         sum += a;
         a++;
      }
      return sum;
   }
}