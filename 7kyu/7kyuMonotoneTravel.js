var isMonotone = function (arr) {
   if (arr.length === 0){
      return true;
   }

   for (let i = 1; i < arr.length; i++){
      if (arr[i] < arr[i-1]){
         return false;
      }
   }

   return true;
}