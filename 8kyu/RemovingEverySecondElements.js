function removeEveryOther(arr) {
   if (arr.length === 1) {
      return arr;
   }

   const helpArr = [...arr];
   for (let i = 1; ; i++) {
      arr.splice(i, 1);
      if (arr.length === Math.ceil(helpArr.length / 2)) break;
   };
   return arr;
}