function correct(string) {
   let newArr = [];
   let newString = "";
   for(let i = 0; i < string.length; i++){
      newArr[i] = string[i];
   }
   for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === "5"){
         newArr[i] = "S";
      } else if (newArr[i] === "0"){
         newArr[i] = "O";
      } else if (newArr[i] === "1"){
         newArr[i] = "I";
      }
   }
   for (let i = 0; i < newArr.length; i++) {
      newString += newArr[i];
   }
   return newString;
}