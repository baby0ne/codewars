const quarterOf = (month) => {
   let quarter = 0;
   if (month < 4){
      quarter = 1;
   } else if (month < 7 ){
      quarter = 2;
   } else if (month < 10) {
      quarter = 3;
   } else {
      quarter = 4;
   }
   return quarter;
}