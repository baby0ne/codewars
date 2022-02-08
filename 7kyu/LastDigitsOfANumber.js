function lastDigit(n, d) {
   if (d <= 0){
      return [];
   }

   let stringN = String(n);
   let answer = [];
   let i = 0;


   if (d <= stringN.length){
      i = stringN.length - d;
   } 

   for(i; i < stringN.length; i++){
      answer.push(Number(stringN[i]));
   }

   return answer;
}