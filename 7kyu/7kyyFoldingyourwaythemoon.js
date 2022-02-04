function foldTo(distance) {
   if (distance < 0){
      return null;
   }
   let piece = 0.0001;
   let count = 0;
   for (count; piece < distance; count++){
      piece *= 2;
   }
   return count;
}