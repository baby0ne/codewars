function solution(number) {
   const arr = [];

   for (let i = 3; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0)
         arr.push(i);
   }

   return arr.reduce((partialSum, a) => partialSum + a, 0);
}