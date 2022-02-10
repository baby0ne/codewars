function points(games) {
   let result = 0;

   for(let i = 0; i < games.length; i++){
      if (games[i][0] > games[i][2]){
         result += 3;
      } else if (games[i][0] === games[i][2]) {
         result += 1;
      } 
   }
   
   return result;
}