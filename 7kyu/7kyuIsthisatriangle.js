function isTriangle(a, b, c) {
   let is_Triangle = false;
   if (a + b > c && b + c > a && a + c > b){
      is_Triangle = true;
   }
   return is_Triangle;
}