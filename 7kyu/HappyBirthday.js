function wrap(height, width, length) {
   let wrapArray = [height, width, length];

   wrapArray.sort(function (a, b) {
      return a - b;
   });

   return (wrapArray[0] * 4) + (wrapArray[1] * 2) + (wrapArray[2] * 2) + 20;
}