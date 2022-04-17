function squareOrSquareRoot(array) {
   let resultArr = [];
   for(let i = 0; i < array.length; i++) {
      if (Number.isInteger(Math.sqrt(array[i]))) resultArr.push(Math.sqrt(array[i]))
      else resultArr.push(array[i] * array[i])
   }
   return resultArr;
}
