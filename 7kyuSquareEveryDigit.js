function squareDigits(num) {
   let oldString = String(num);
   let newString = "";
   for (let i = 0; i < oldString.length; i++){
      newString += Number(oldString[i]) * Number(oldString[i]);
   }
   return Number(newString);
}