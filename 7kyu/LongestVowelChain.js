function solve(s) {
   let counter_1 = 1;
   let counter_2 = 0;
   for (let j = 0; j < s.length; j++) {
      for (let i = j; i < s.length; i++) {
         if ((s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') && (s[i + 1] === 'a' || s[i + 1] === 'e' || s[i + 1] === 'i' || s[i + 1] === 'o' || s[i + 1] === 'u')) {
            counter_1++;
         } else {
            break;
         }
      }
      if (counter_1 > counter_2) {
         counter_2 = counter_1;
         counter_1 = 1;
      } else {
         counter_1 = 1;
      }
   }
   return counter_2;
}

