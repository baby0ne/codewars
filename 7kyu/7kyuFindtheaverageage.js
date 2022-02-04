function getAverageAge(list) {
   let sumAge = 0;

   for (let i = 0; i < list.length; i++) {
      sumAge += list[i].age;
   }

   return Math.round(sumAge / list.length);
}