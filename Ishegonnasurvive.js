function hero(bullets, dragons) {
   if (bullets / dragons >= 2){
      return true;
   } else if (bullets / dragons < 2 || bullets == 0) 
   return false;
}