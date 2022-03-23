function swap(str) {
   let newStr = str.split('');
   for(let i = 0; i < newStr.length; i++){
      if (newStr[i] === newStr[i].toUpperCase()){
         newStr[i] = newStr[i].toLowerCase();
      } else {
         newStr[i] = newStr[i].toUpperCase();
      }
   } 
   return newStr.join('');
}