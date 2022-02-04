function determineTime(durations) {
   let sumTime = 0;
   let hours = [];
   let minutes = [];
   let seconds = [];

   for (let i = 0; i, i < durations.length; i++){
      hours[i] = Number(durations[i][0] + durations[i][1]) * 60 * 60;
   }
   for (let i = 0; i, i < durations.length; i++) {
      minutes[i] = Number(durations[i][3] + durations[i][4]) * 60;
   }
   for (let i = 0; i, i < durations.length; i++) {
      seconds[i] = Number(durations[i][6] + durations[i][7]);
   }

   for (let i = 0; i , i < durations.length; i++){
      sumTime += hours[i] + minutes[i] + seconds[i];
   }

   if (sumTime > 86400){
      return false;
   }
   
   return true;
}