function findOdd(arr) {
   var result = {};
   for (var i = 0; i < arr.length; ++i) {
      var a = arr[i];
      if (result[a] != undefined)
         ++result[a];
      else
         result[a] = 1;
   }

   for(let key in result) {
      if (result[key] % 2 !== 0) return Number(key);
   }
}