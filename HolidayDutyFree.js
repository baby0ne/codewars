function dutyFree(normPrice, discount, hol) {
   let discountInPercent = discount / 100;
   let saveMoney = normPrice * discountInPercent;
   let bottleNumber; 
   for (bottleNumber = 0; hol > saveMoney; bottleNumber++){
      hol -= saveMoney;
   }
   return bottleNumber;
}