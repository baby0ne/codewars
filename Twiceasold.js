function twiceAsOld(dadYearsOld, sonYearsOld) {
   let counter = 1;
   let dadYearsOldNew = dadYearsOld;
   let sonYearsOldNew = sonYearsOld;

   if (dadYearsOld / sonYearsOld == 2){
      return 0;
   }

   for (counter; counter < 100; counter++){
      dadYearsOldNew++;
      sonYearsOldNew++;
      if (dadYearsOldNew / sonYearsOldNew === 2){
         return counter;
      }
   }

   counter = 1;
   for (counter; counter < 100; counter++) {
      dadYearsOld--;
      sonYearsOld--;
      if (dadYearsOld / sonYearsOld === 2) {
         return counter;
      }
   }
}