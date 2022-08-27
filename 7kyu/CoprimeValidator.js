function isCoprime(x, y) {
   let biggestX = [];
   const biggestY = [];

   for (let i = 1; i < x; i++) {
      if (x % i === 0) {
         biggestX.push(i);
      }
   }
   for (let i = 1; i < y; i++) {
      if (y % i === 0) {
         biggestY.push(i);
      }
   }

   const matched = biggestX.filter(el => biggestY.indexOf(el) > -1);

   return matched.length > 1 ? false : true;
}