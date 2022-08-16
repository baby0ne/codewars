function findDupsMiss(arr) {
   const sortArr = arr.sort((a, b) => a - b);
   let missingValue = 0;
   let dupsArr = [];


   for (let i = 0; missingValue === 0; i++) {
      if ((sortArr[i + 1] - sortArr[i]) > 1) {
         missingValue = sortArr[i] + 1;
      }
   }

   for (let i = 0; i < sortArr.length; i++) {
      if (dupsArr.indexOf(sortArr[i]) != -1) {
         continue;
      }
      if (sortArr[i] === sortArr[i + 1]) {
         dupsArr.push(sortArr[i])
      }
   }

   return [missingValue, dupsArr];
}