function order(words) {
   if (words.length === 0) return '';

   let originalArr = words.split(' ');
   let newArr = [];

   for (let i = 0; i < originalArr.length; i++) {
      for (let j = 0; j < originalArr[i].length; j++) {
         if (Number(originalArr[i][j]) !== NaN) {
            newArr[originalArr[i][j] - 1] = originalArr[i];
         }
      }
   }

   return newArr.join(' ');
}
