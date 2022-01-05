function sixToast(num) {
   if (num === 6){
      return 0;
   } else {
      if (num > 6) {
         return num - 6;
      } else if (num < 6){
         return 6 - num;
      }
   }
}