const removeConsecutiveDuplicates = s => {
   let arrayS = s.split(" ");

   let result = "";

   for(let i = 0; i < arrayS.length - 1; i++){
      if (arrayS[i] !== arrayS[i+1]){
         result += arrayS[i]  + " ";
      }
   }
   result += arrayS[arrayS.length - 1];
   
   return result;
}