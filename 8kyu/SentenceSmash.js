function smash(words) {
   let sentence = "";
   for (let i = 0; i < words.length; i++){
      if(i === words.length - 1){
         sentence += words[i];
      } else {
      sentence += words[i] + " ";
      }
   }
   return sentence;
};