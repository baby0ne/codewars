function arrayDepth(arr) {
   if (arr.filter(i => i.constructor.name === "Array").length != 0) {
      return 1 + arrayDepth([].concat(...arr.filter(i => i.constructor.name === "Array")));
   } else {
      return 1;
   }
}