function decode(string) {
   let array = [];
   for (let i = 0; i < string.length; i++){
      array[i] = string[i];
   }

   string = "";

   for (let i = 0; i < array.length; i++) {
      if(array[i] == 5){
         array[i] = 0;
      } else if (array[i] == 2){
         array[i] = 8;
      } else if (array[i] == 1) {
         array[i] = 9;
      } else if (array[i] == 3) {
         array[i] = 7;
      } else if (array[i] == 4) {
         array[i] = 6;
      } else if (array[i] == 6) {
         array[i] = 4;
      } else if (array[i] == 7) {
         array[i] = 3;
      } else if (array[i] == 8) {
         array[i] = 2;
      } else if (array[i] == 9) {
         array[i] = 1;
      } else if (array[i] == 0) {
         array[i] = 5;
      }
   }

   for (let i = 0; i < array.length; i++) {
   string += array[i];
   }

   return string;
}