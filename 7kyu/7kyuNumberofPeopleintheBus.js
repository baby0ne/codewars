var number = function (busStops) {
   let counter = 0;
   for (let i = 0; i < busStops.length; i++){
      counter += busStops[i][0];
      counter -= busStops[i][1];
   }
   return counter;
}