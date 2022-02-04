function alternateCase(s) {
   let arr = [];
   for(let i = 0; i < s.length; i++){
      arr[i] = s[i];
   }
   for (let i = 0; i < s.length; i++) {
      if(arr[i] !== arr[i].toUpperCase()){
         arr[i] = arr[i].toUpperCase();
      } else if (arr[i] !== arr[i].toLowerCase()){
         arr[i] = arr[i].toLowerCase();
      }
   }
   let newString = "";
   for (let i = 0; i < arr.length; i++){
      newString += arr[i];
   }
   return newString;
}