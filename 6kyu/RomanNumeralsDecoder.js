function solution(roman) {
   let result = 0;

   for (let i = 0; i < roman.length; i++) {
      switch (roman[i]) {
         case 'I': {
            if (roman[i + 1] === 'V') {
               result += 4;
               i++;
            } else if (roman[i + 1] === 'X') {
               result += 9;
               i++;
            }
            else result += 1;
            break;
         }
         case 'V': {
            result += 5;
            break;
         }
         case 'X': {
            if (roman[i + 1] === 'L') {
               result += 40;
               i++;
            } else if (roman[i + 1] === 'C') {
               result += 90;
               i++;
            }
            else result += 10;
            break;
         }
         case 'L': {
            result += 50;
            break;
         }
         case 'C': {
            if (roman[i + 1] === 'D') {
               result += 400;
               i++;
            } else if (roman[i + 1] === 'M') {
               result += 900;
               i++;
            }
            else result += 100;
            break;
         }
         case 'D': {
            result += 500;
            break;
         }
         case 'M': {
            result += 1000;
            break;
         }
      }
   }

   return result;
}